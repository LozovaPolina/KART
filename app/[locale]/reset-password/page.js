"use client";

import Field from "../../../shared/ui/Field/Field";
import Text from "../../../shared/ui/text/Text";
import Title from "../../../shared/ui/title/Title";
import { LockKeyhole } from "lucide-react";
import React, { useState } from "react";

import { useInput } from "../../../hooks/useInput";
import { useTranslations } from "next-intl";
import { API_URL } from "../../../data/url";

const ResetPassword = () => {
  const t = useTranslations("ResetPasswordForm");

  const UUID = "e67a8d00-3dfc-4276-81e5-5b6d874c6fa6";

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput("", (value) => value.length >= 8);

  const {
    value: repeatPasswordValue,
    handleInputChange: handleRepeatPasswordChange,
    handleInputBlur: handleRepeatPasswordBlur,
    hasError: repeatPasswordError,
  } = useInput("", (value) => value.length >= 8);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function changePassword(newPassword) {
    try {
      const response = await fetch(API_URL + "/users/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: UUID,
          new_password: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to change password");
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (passwordValue.length < 5 || repeatPasswordValue.length < 5) {
      setError(t("passwordLengthError"));
      return;
    }

    if (passwordValue !== repeatPasswordValue) {
      setError(t("passwordsDoNotMatch"));
      return;
    }

    setLoading(true);

    try {
      await changePassword(passwordValue);
      setSuccess(true);
      handlePasswordChange({ target: { value: "" } });
      handleRepeatPasswordChange({ target: { value: "" } });
    } catch {
      setError(t("serverError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex justify-center items-center mx-auto w-13 h-13 rounded-md">
        <LockKeyhole />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <Title className="text-center">{t("title")}</Title>
      </div>

      <Field
        label={t("newPassword")}
        value={passwordValue}
        type="password"
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordError}
        name="newPassword"
      />

      <Field
        label={t("repeatPassword")}
        value={repeatPasswordValue}
        type="password"
        onChange={handleRepeatPasswordChange}
        onBlur={handleRepeatPasswordBlur}
        error={repeatPasswordError}
        name="repeatPassword"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm">{t("successMessage")}</p>
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#49BA4A] text-white rounded py-2"
        >
          {loading ? t("loading") : t("resetPassword")}
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
