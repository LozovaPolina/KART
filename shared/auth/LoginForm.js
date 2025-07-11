"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/reducer/authSlice";
import { useInput } from "../../hooks/useInput";
import { Check, LogIn } from "lucide-react";

import Title from "../ui/title/Title";
import Text from "../ui/text/Text";
import Field from "../ui/Field/Field";

import { useTranslations } from "next-intl";

const LoginForm = ({ toggleAuthMode }) => {
  const t = useTranslations("LoginForm");
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);

  const [checkBox, setCheckBox] = useState(false);

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (value) => /\S+@\S+\.\S+/.test(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput("", (value) => value.length >= 5);

  function handleCheckboxChange() {
    setCheckBox((p) => !p);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValue.trim() || passwordValue.length < 5) {
      return;
    }

    dispatch(
      loginUserAction({
        email: emailValue,
        password: passwordValue,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex justify-center items-center mx-auto w-13  h-13 rounded-md">
        <LogIn />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <Title className="text-center">{t("title")}</Title>
        <Text className="text-[#4A4A4A]! text-center">{t("subtitle")}</Text>
      </div>

      <Field
        label={t("email")}
        value={emailValue}
        type="email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
        name="name"
      />

      <Field
        label={t("password")}
        value={passwordValue}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordError}
        name="password"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isLoggedIn && <p className="text-green-500 text-sm">{t("success")}</p>}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#49BA4A] text-white rounded py-2"
        >
          {loading ? t("loading") : t("login")}
        </button>
        <button
          onClick={toggleAuthMode}
          type="button"
          disabled={loading}
          className="w-full border border-[#49BA4A] text-[#49BA4A] py-2 rounded"
        >
          {t("noAccount")}
        </button>
      </div>

      <label
        htmlFor="checkbox"
        className="flex justify-center items-center gap-2 text-[#4A4A4A] cursor-pointer"
      >
        <input
          id="checkbox"
          type="checkbox"
          name="checkbox"
          checked={checkBox}
          onChange={handleCheckboxChange}
          className="peer hidden"
        />
        <div className="w-6 h-6 border-2 border-[#E2E2E2] rounded-sm flex items-center justify-center transition-colors peer-checked:border-[#49BA4A] peer-checked:bg-[#49BA4A]">
          <Check
            size={16}
            className={`text-white ${
              checkBox ? "opacity-100" : "opacity-0"
            } transition-opacity`}
          />
        </div>
        {t("rememberMe")}
      </label>
    </form>
  );
};

export default LoginForm;
