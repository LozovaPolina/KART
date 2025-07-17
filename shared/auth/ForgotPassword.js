"use client";

import { LockKeyhole } from "lucide-react";
import Title from "../ui/title/Title";
import Field from "../ui/Field/Field";
import { useTranslations } from "next-intl";
import React from "react";
import { useInput } from "../../hooks/useInput";
import { API_URL } from "../../data/url";

const ForgotPassword = () => {
  const t = useTranslations("ForgotPassword");

  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (value) => /\S+@\S+\.\S+/.test(value));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!emailValue.trim()) {
      setError(t("invalidEmail") || "Введите корректный email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/users/forgot-password?email=${encodeURIComponent(
          emailValue.trim()
        )}`,
        {
          method: "GET",
          headers: { Accept: "*/*" },
        }
      );

      if (!response.ok) throw new Error("Ошибка");

      const data = await response.json();
      if (data.uuid) {
        setMessage(t("emailSent") || "Письмо с инструкциями отправлено.");
      } else {
        setError(t("sendError") || "Не удалось отправить письмо.");
      }
    } catch {
      setError(t("sendError") || "Не удалось отправить письмо.");
    } finally {
      setLoading(false);
    }

    handleEmailChange({ target: { value: "" } });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 space-y-4  rounded-2xl"
    >
      <div className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex justify-center items-center mx-auto w-13  h-13 rounded-md">
        <LockKeyhole />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <Title className="text-center">
          {t("forgotPasswordTitle") || "Восстановление пароля"}
        </Title>
      </div>

      <Field
        label={t("email")}
        value={emailValue}
        type="email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
        name="email"
      />

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {message && (
        <p className="text-green-500 text-sm text-center">{message}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#49BA4A] text-white rounded py-2"
      >
        {loading ? t("loading") : t("send")}
      </button>
    </form>
  );
};

export default ForgotPassword;
