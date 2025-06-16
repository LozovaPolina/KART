'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/reducer/authSlice'; // adjust if needed
import Title from '../ui/title/Title';

import { useInput } from '../../util/useInput';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);


  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
  } = useInput("", (value) => value.trim() !== "");


  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => value.length >= 5);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');

    if (!nameValue.trim() || passwordValue.length < 5) {
      setLocalError('Введите корректные данные');
      return;
    }

    dispatch(loginUserAction({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <Title className="text-center">Вход</Title>

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

      {localError && <p className="text-red-500 text-sm">{localError}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isLoggedIn && <p className="text-green-500 text-sm">Успешный вход!</p>}
      <div className="flex gap-4">

        <button type="submit" disabled={loading} className="w-full bg-[#49BA4A] text-white rounded py-2 ">
          {loading ? 'Загрузка...' : 'Войти'}
        </button>
        <button type="submit" disabled={loading} className="w-full  border border-[#49BA4A] text-[#49BA4A] py-2  rounded">
          Нет аккаунта?
        </button>

      </div>

    </form>
  );
};

export default LoginForm;
