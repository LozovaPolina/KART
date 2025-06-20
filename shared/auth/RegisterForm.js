'use client';

import { registerUserAction } from '../../redux/reducer/authSlice';
// import { registerUserAction } from '../../redux/reducer/AuthSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../ui/title/Title';
import Text from '../ui/text/Text';
import Button from '../ui/button/Button';
import Link from 'next/link';
import { useInput } from '../../hooks/useInput';
import Field from '../ui/Field/Field';
import RadioGroup from '../ui/RadioGroup/RadioGroup';
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
    hasError: nameError
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError
  } = useInput("", (value) => /\S+@\S+\.\S+/.test(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError
  } = useInput("", (value) => value.length >= 5);


  const [role, setRole] = useState('');
  const [passedKartCourse, setPassedKartCourse] = useState('');


  const [country, setCountry] = useState("");

  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { value, type, checked } = e.target;

    if (type === "checkbox") {
      setAcceptedTerms(checked);
    } else {
      setCountry(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

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

    if (country.trim() === "") {
      setError("Выберите страну");
      return;
    }
    if (role.trim() === "") {
      setError("Выберите роль");
      return;
    }
    if (passedKartCourse.trim() === "") {
      setError("Выберите проходили ли Вы курс");
      return;
    }


    dispatch(
      registerUserAction({
        username: nameValue,
        email: emailValue,
        password: passwordValue,
        country: country,
        role: role,
        passedKartCourse: passedKartCourse,
      })
    );

    handleNameChange({ target: { value: "" } });
    handleEmailChange({ target: { value: "" } });
    handlePasswordChange({ target: { value: "" } });

    setRole('')
    setPassedKartCourse('')
    setCountry('')
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto h-full hide-scrollbar   flex flex-col gap-4">
      <Title className='text-center'>Регистрация</Title>
      <Text className='text-[#4A4A4A]! text-center'>Заполните регистрационную форму для получения лучшего предложения</Text>


      <Field
        label="Имя"
        value={nameValue}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        error={nameError}
        name="name"
      />

      <Field
        label="Пароль"
        value={passwordValue}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordError}
        name="password"
      />
      <Field
        label="Email"
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
        name="email"
      />

      {/* Страна */}
      <div className="relative w-full mt-4">
        <select
          name="country"
          value={country}
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
      <RadioGroup
        label="Выберите роль:"
        name="role"
        options={[...roles]}
        value={role}
        wrapStyles={"items-center"}
        onChange={setRole}
      />


      <RadioGroup
        label="Проходили курс педикюра KART?"
        name="passedKartCourse"
        options={[...answers]}
        value={passedKartCourse}
        wrapStyles={"items-center"}
        onChange={setPassedKartCourse}
      />


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
