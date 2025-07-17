"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../redux/reducer/authSlice";
import { useInput } from "../../hooks/useInput";
import Title from "../ui/title/Title";
import Text from "../ui/text/Text";
import Button from "../ui/button/Button";
import { Link } from "../../i18n/navigation";
import Field from "../ui/Field/Field";
import RadioGroup from "../ui/RadioGroup/RadioGroup";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const countries = [
  "Россия",
  "Казахстан",
  "Украина",
  "Беларусь",
  "Другая страна",
];

const RegisterForm = ({ toggleAuthMode }) => {
  const t = useTranslations("RegisterForm");
  const dispatch = useDispatch();
  const {
    loading,
    error: reduxError,
    isRegistered,
  } = useSelector((state) => state.auth);
  const roles = [t("fields.roles.master"), t("fields.roles.client")];
  const answers = [t("fields.answers.yes"), t("fields.answers.no")];

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: lastNameValue,
    handleInputChange: handlelastNameChange,
    handleInputBlur: handlelastNameBlur,
    hasError: lastNamerror,
  } = useInput("", (value) => value.trim() !== "");
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

  const [role, setRole] = useState("");
  const [passedKartCourse, setPassedKartCourse] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCountry(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (nameValue.trim() === "") return setError(t("errors.name"));
    if (lastNameValue.trim() === "") return setError(t("errors.name"));
    if (!/\S+@\S+\.\S+/.test(emailValue)) return setError(t("errors.email"));
    if (passwordValue.length < 5) return setError(t("errors.password"));
    if (country.trim() === "") return setError(t("errors.country"));
    if (role.trim() === "") return setError(t("errors.role"));
    if (passedKartCourse.trim() === "") return setError(t("errors.course"));

    dispatch(
      registerUserAction({
        email: emailValue,
        first_name: nameValue,
        last_name: lastNameValue,
        country,
        password: passwordValue,

        // role,
        // passedKartCourse
      })
    );

    handleNameChange({ target: { value: "" } });
    handlelastNameChange({ target: { value: "" } });
    handleEmailChange({ target: { value: "" } });
    handlePasswordChange({ target: { value: "" } });
    setRole("");
    setPassedKartCourse("");
    setCountry("");
  };

  useEffect(() => {
    if (isRegistered) {
      const timer = setTimeout(() => {
        toggleAuthMode();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto h-full flex flex-col gap-4"
    >
      <Title className="text-center">{t("title")}</Title>
      <Text className="text-[#4A4A4A]! text-center">{t("subtitle")}</Text>

      <Field
        label={t("fields.name")}
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameError}
        name="name"
      />
      <Field
        label={t("fields.lastName")}
        value={lastNameValue}
        onChange={handlelastNameChange}
        onBlur={handlelastNameBlur}
        error={nameError}
        name="name"
      />

      <Field
        label={t("fields.password")}
        value={passwordValue}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordError}
        name="password"
      />

      <Field
        label={t("fields.email")}
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
        name="email"
      />

      <div className="relative w-full mt-4">
        <select
          name="country"
          value={country}
          onChange={handleChange}
          className="w-full p-2 pt-5 border border-[#E2E2E2] rounded appearance-none outline-none focus:border-[#272727]"
        >
          <option value=""></option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <label
          htmlFor="country"
          className="absolute left-2 top-0 -translate-y-1/2 px-1 bg-[#F5F5F5] text-sm text-[#272727]"
        >
          {t("fields.country")}
        </label>
      </div>

      <RadioGroup
        label={t("fields.role")}
        name="role"
        options={roles}
        value={role}
        wrapStyles="items-center"
        onChange={setRole}
      />

      <RadioGroup
        label={t("fields.course")}
        name="passedKartCourse"
        options={answers}
        value={passedKartCourse}
        wrapStyles="items-center"
        onChange={setPassedKartCourse}
      />

      {isRegistered && (
        <p className="text-green-500 text-center text-sm">{t("success")}</p>
      )}
      {reduxError &&
        !isRegistered &&
        Object.entries(reduxError).map(([field, messages]) =>
          (Array.isArray(messages) ? messages : [messages]).map((msg, i) => (
            <p
              key={`${field}-${i}`}
              className="text-red-500 text-sm text-center"
            >
              {msg}
            </p>
          ))
        )}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#49BA4A] text-white py-2 rounded hover:shadow disabled:opacity-50"
      >
        {loading ? t("loading") : t("submit")}
      </Button>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <Text className="text-center text-[#000000]! text-[.75rem]!">
        {t.rich("note", {
          academy: (chunks) => (
            <Link href="/" className="text-[#49BA4A] cursor-pointer">
              {chunks}
            </Link>
          ),
        })}
      </Text>
    </form>
  );
};

export default RegisterForm;
