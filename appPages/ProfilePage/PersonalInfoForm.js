"use client"


import { useInput } from "../../hooks/useInput";
import Button from "../../shared/ui/button/Button";
import Field from "../../shared/ui/Field/Feild";
import { useState } from "react";

export default function PersonalInfoForm() {
  const [error, setError] = useState()
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: surnameValue,
    handleInputChange: handleSurnameChange,
    handleInputBlur: handleSurnameBlur,
    hasError: surnameError,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: nicknameValue,
    handleInputChange: handleNicknameChange,
    handleInputBlur: handleNicknameBlur,
    hasError: nicknameError,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: phoneValue,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhoneBlur,
    hasError: phoneError,
  } = useInput("", (v) => /^\d{10,}$/.test(v.replace(/\D/g, "")));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (v) => /\S+@\S+\.\S+/.test(v));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput("", (v) => v.length >= 5);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nameError || !nameValue.trim() ||
      surnameError || !surnameValue.trim() ||
      nicknameError || !nicknameValue.trim() ||
      emailError || !emailValue.trim() ||
      passwordError || !passwordValue.trim() ||
      phoneError || !phoneValue.trim()
    ) {
      setError("Пожалуйста, заполните все поля корректно.");
      return;
    }

    // Отправка формы
    console.log({
      name: nameValue,
      surname: surnameValue,
      nickname: nicknameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">

        <h3 className="text-lg font-semibold">Контактные данные</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">

          {/* Фамилия */}
          <Field
            label="Фамилия"
            value={surnameValue}
            onChange={handleSurnameChange}
            onBlur={handleSurnameBlur}
            error={surnameError}
            name="surname"
          />

          {/* Имя */}
          <Field
            label="Имя"
            value={nameValue}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            error={nameError}
            name="name"
          />

          {/* Никнейм */}
          <Field
            label="Отображаемое имя*"
            value={nicknameValue}
            onChange={handleNicknameChange}
            onBlur={handleNicknameBlur}
            error={nicknameError}
            name="nickname"
            className="col-span-2"
          />

          {/* Телефон */}
          <Field
            label="Телефон"
            value={phoneValue}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
            error={phoneError}
            name="phone"
            className="col-span-2"
            placeholder="+905555555555"
          />

          {/* Email */}
          <Field
            label="Email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            name="email"
            className="col-span-2"
          />

          {/* Пароль */}
          <Field
            label="Пароль"
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            error={passwordError}
            name="password"
            className="col-span-2"
          />
        </div>

      </div>

      {error && <p className="text-red-500">{error}</p>}
      <Button
        type="submit"
        className="bg-[#49BA4A] "
      >
        Сохранить
      </Button>
    </form>
  );
}

