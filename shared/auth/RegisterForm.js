'use client';

import { registerUserAction } from '../../redux/reducer/authSlice';
// import { registerUserAction } from '../../redux/reducer/AuthSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { registerUserAction } from '@/redux/slices/auth/authSlice';


const countries = ['Россия', 'Казахстан', 'Украина', 'Беларусь', 'Другая страна'];
const roles = ['Мастер', 'Ученик', 'Салон', 'Косметолог']; // Example roles

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading, error, isRegistered } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    country: '',
    name: '',
    email: '',
    password: '',
    role: '',
    tookKartCourse: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(form));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Регистрация</h2>

      <label className="block">
        Страна:
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        >
          <option value="">Выберите страну</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label className="block">
        Имя:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block">
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <label className="block">
        Пароль:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </label>

      <fieldset className="block">
        <legend className="mb-2 font-medium">Выберите роль:</legend>
        {roles.map((r) => (
          <label key={r} className="block">
            <input
              type="radio"
              name="role"
              value={r}
              checked={form.role === r}
              onChange={handleChange}
              required
              className="mr-2"
            />
            {r}
          </label>
        ))}
      </fieldset>

      <label className="block">
        <input
          type="checkbox"
          name="tookKartCourse"
          checked={form.tookKartCourse}
          onChange={handleChange}
          className="mr-2"
        />
        Проходили курс педикюра KART
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {isRegistered && <p className="text-green-500 text-sm">Успешная регистрация!</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Загрузка...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
};

export default RegisterForm;
