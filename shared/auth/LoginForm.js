'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/reducer/authSlice'; // adjust if needed
import Title from '../ui/title/Title';

import { useInput } from '../../hooks/useInput';
import Text from '../ui/text/Text';
import { Check, LogIn } from 'lucide-react';
import Field from '../ui/Field/Feild';

const LoginForm = ({ toggleAuthMode }) => {
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);
  const [checkBox, setCheckBox] = useState(false)
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError
  } = useInput("", (value) => value.trim() !== "");


  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError
  } = useInput("", (value) => value.length >= 5);
  function handleCheckboxChange() {
    setCheckBox(p => !p)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameValue.trim() || passwordValue.length < 5) {
      return;
    }

    dispatch(loginUserAction({ username, password, remindMe: checkBox }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">

      <div className="bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.1)] flex justify-center items-center mx-auto w-13  h-13 rounded-md"><LogIn /></div>
      <div className="flex flex-col gap-4 items-center ">
        <Title className="text-center"> Войдите в аккаунт</Title>
        <Text className='text-[#4A4A4A]! text-center'>Чтобы продолжить, пожалуйста, войдите или создайте аккаунт.</Text>

      </div>
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



      {/* {localError && <p className="text-red-500 text-sm">{localError}</p>} */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isLoggedIn && <p className="text-green-500 text-sm">Успешный вход!</p>}
      <div className="flex gap-4">

        <button type="submit" disabled={loading} className="w-full bg-[#49BA4A] text-white rounded py-2 ">
          {loading ? 'Загрузка...' : 'Войти'}
        </button>
        <button onClick={toggleAuthMode} type="submit" disabled={loading} className="w-full  border border-[#49BA4A] text-[#49BA4A] py-2  rounded">
          Нет аккаунта?
        </button>

      </div>
      <label htmlFor="checkbox" className="flex justify-center items-center gap-2 text-[#4A4A4A] cursor-pointer">
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
            className={` text-white ${checkBox ? 'opacity-100' : 'opacity-0'}  transition-opacity`}
          />
        </div>
        Запомнить меня
      </label>

    </form>
  );
};

export default LoginForm;
