'use client';

import { registerUserAction } from '../../redux/reducer/authSlice';
// import { registerUserAction } from '../../redux/reducer/AuthSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../ui/title/Title';
import Text from '../ui/text/Text';
import Button from '../ui/button/Button';
import Link from 'next/link';
import { useInput } from '../../util/useInput';
// import { registerUserAction } from '@/redux/slices/auth/authSlice';


const countries = ['Россия', 'Казахстан', 'Украина', 'Беларусь', 'Другая страна'];
const roles = ['Мастер', 'Частный клиент']; // Example roles
const answers = ['Да', 'Нет'];
const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading, error: reduxError, isRegistered } = useSelector((state) => state.auth);

  // useInput hooks
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => /\S+@\S+\.\S+/.test(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => value.length >= 5);

  const {
    value: confirmPasswordValue,
    handleInputChange: handleConfirmPasswordChange,
    handleInputBlur: handleConfirmPasswordBlur,
  } = useInput("", () => true);

  // Other controlled inputs
  const [form, setForm] = useState({
    country: "",
    role: "",
    passedKartCourse: '',
  });

  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setAcceptedTerms(checked);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (true) {
      if (nameValue.trim() === "") {
        setError("Введите имя");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(emailValue)) {
        setError("Введите корректный email");
        return;
      }
      if (passwordValue.length < 5) {
        setError("Пароль должен быть минимум 5 символов");
        return;
      }

      if (form.country.trim() === "") {
        setError("Выберите страну");
        return;
      }
      if (form.role.trim() === "") {
        setError("Выберите роль");
        return;
      }
      if (form.passedKartCourse.trim() === "") {
        setError("Выберите проходили ли Вы курс");
        return;
      }


      dispatch(
        registerUserAction({
          username: nameValue,
          email: emailValue,
          password: passwordValue,
          password_confirm: confirmPasswordValue,
        })
      );
    } else {
      if (nameValue.trim() === "") {
        setError("Введите имя");
        return;
      }
      if (passwordValue.length < 5) {
        setError("Пароль должен быть минимум 5 символов");
        return;
      }

      dispatch(
        loginUserAction({
          username: nameValue,
          password: passwordValue,
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4   space-y-4">
      <Title className='text-center'>Регистрация</Title>
      <Text className='text-[#4A4A4A]! text-center'>Заполните регистрационную форму для получения лучшего предложения</Text>
      <p></p>
      <div className="relative w-full mt-4">
        <input
          type="text"
          name="name"
          value={nameValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          className="w-full p-2 pt-5 border border-[#E2E2E2] rounded outline-none focus:border-[#272727]"
        />
        <label
          htmlFor="name"
          className="absolute left-2 top-0 -translate-y-1/2 px-1 bg-[#F5F5F5] text-sm text-[#272727]"
        >
          Имя
        </label>
      </div>

      {/* Пароль */}
      <div className="relative w-full mt-4">
        <input
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          className="w-full p-2 pt-5 border border-[#E2E2E2] rounded outline-none focus:border-[#272727]"
        />
        <label
          htmlFor="password"
          className="absolute left-2 top-0 -translate-y-1/2 px-1 bg-[#F5F5F5] text-sm text-[#272727]"
        >
          Пароль
        </label>
      </div>

      {/* Email */}
      <div className="relative w-full mt-4">
        <input
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className="w-full p-2 pt-5 border border-[#E2E2E2] rounded outline-none focus:border-[#272727]"
        />
        <label
          htmlFor="email"
          className="absolute left-2 top-0 -translate-y-1/2 px-1 bg-[#F5F5F5] text-sm text-[#272727]"
        >
          Email
        </label>
      </div>

      {/* Страна */}
      <div className="relative w-full mt-4">
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          className="w-full p-2 pt-5 border border-[#E2E2E2] rounded appearance-none outline-none focus:border-[#272727]"
        >
          <option value=""></option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <label
          htmlFor="country"
          className="absolute left-2 top-0 -translate-y-1/2 px-1 bg-[#F5F5F5] text-sm text-[#272727]"
        >
          Страна
        </label>
      </div>




      <fieldset className="block mx-auto w-full">
        <legend className="mx-auto text-center mb-2 text-[#272727] font-medium">
          Выберите роль:
        </legend>

        <div className="flex gap-4 justify-center w-full">
          {roles.map((r) => (
            <label key={r} className="cursor-pointer relative flex items-center gap-2 text-[#272727]">
              <input
                type="radio"
                name="role"
                value={r}
                checked={form.role === r}
                onChange={handleChange}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border border-[#E2E2E2] flex items-center justify-center peer-checked:border-[#272727]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#272727] opacity-0 peer-checked:opacity-100 transition" />
              </span>
              <span>{r}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="block mx-auto w-full">
        <legend className="mx-auto text-center mb-2 text-[#272727] font-medium">
          Проходили курс педикюра KART?
        </legend>

        <div className="flex gap-4 justify-center w-full">
          {answers.map((r) => (

            <label key={r} className="cursor-pointer relative flex items-center gap-2 text-[#272727]">
              <input
                type="radio"
                name="passedKartCourse"
                value={r}
                checked={form.passedKartCourse === r}
                onChange={handleChange}
                className="peer hidden"
              />
              <span className="w-5 h-5 rounded-full border border-[#E2E2E2] flex items-center justify-center peer-checked:border-[#272727]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#272727] opacity-0 peer-checked:opacity-100 transition" />
              </span>
              <span>{r}</span>
            </label>
          ))}
        </div>
      </fieldset>




      {isRegistered && <p className="text-green-500 text-sm">Успешная регистрация!</p>}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#49BA4A] text-white py-2 rounded hover:shadow disabled:opacity-50"
      >
        {loading ? 'Загрузка...' : 'Зарегистрироваться'}
      </Button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <Text className='text-center text-[#000000]! text-[.75rem]!'>Для получения доступа к приобретению профессиональной
        продукции для выполнения процедур педикюра KART, а также получения скидки в размере 40%,
        Вам необходимо получить сертификат мастера KART.
        Для подробной информации ознакомьтесь с разделом <Link href={'/'} className='text-[#49BA4A] cursor-pointer'>&quot;Академия KART&quot;</Link ></Text>
    </form>
  );
};

export default RegisterForm;
