'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/reducer/authSlice'; // adjust if needed
import Title from '../ui/title/Title';
import Text from '../ui/text/Text';
import Button from '../ui/button/Button';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error, isLoggedIn } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');

    if (!username.trim() || password.length < 5) {
      setLocalError('Введите корректные данные');
      return;
    }

    dispatch(loginUserAction({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <Title className="text-center">Вход</Title>

      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />

      {localError && <p className="text-red-500 text-sm">{localError}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isLoggedIn && <p className="text-green-500 text-sm">Успешный вход!</p>}

      <Button type="submit" disabled={loading} className="w-full bg-[#49BA4A] text-white py-2 rounded">
        {loading ? 'Загрузка...' : 'Войти'}
      </Button>
    </form>
  );
};

export default LoginForm;
