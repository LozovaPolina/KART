'use client';

import { useInput } from '../../hooks/useInput';
import Button from '../../shared/ui/button/Button';
import Field from '../../shared/ui/Field/Field';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SquarePen } from 'lucide-react';
import PhoneInput from '../../shared/ui/PhoneInput/PhoneInput';

export default function PersonalInfoForm() {
  const t = useTranslations('PersonalInfoForm');
  const [error, setError] = useState();

  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
  } = useInput('', (v) => v.trim().length > 1);

  const {
    value: surnameValue,
    handleInputChange: handleSurnameChange,
    handleInputBlur: handleSurnameBlur,
    hasError: surnameError,
  } = useInput('', (v) => v.trim().length > 1);

  const {
    value: nicknameValue,
    handleInputChange: handleNicknameChange,
    handleInputBlur: handleNicknameBlur,
    hasError: nicknameError,
  } = useInput('', (v) => v.trim().length >= 3);


  const [countryCode, setCountryCode] = useState('+380');
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
  } = useInput('', (val) => /^\d{6, 14}$/.test(val));





  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput('', (v) => /\S+@\S+\.\S+/.test(v));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput('', (v) => v.length >= 5);

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
      setError(t('error'));
      return;
    }

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl p-4 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
        <h3 className="text-lg font-semibold col-span-2">{t('title')}</h3>

        <Field
          label={t('surname')}
          value={surnameValue}
          onChange={handleSurnameChange}
          onBlur={handleSurnameBlur}
          error={surnameError}
          name="surname"
          placeholder={t('placeholders.surname') || "Иванов"}
          className="col-span-2 md:col-span-1"
        />

        <Field
          label={t('name')}
          value={nameValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={nameError}
          name="name"
          placeholder={t('placeholders.name') || "Иван"}
          className="col-span-2 md:col-span-1"
        />

        <Field
          label={t('nickname')}
          value={nicknameValue}
          onChange={handleNicknameChange}
          onBlur={handleNicknameBlur}
          error={nicknameError}
          name="nickname"
          placeholder={t('placeholders.nickname') || "ivan123"}
          className="col-span-2"
        />

        <PhoneInput
          className="w-full col-span-2"
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          phoneNumber={phoneNumberValue}
          handlePhoneNumberChange={handlePhoneNumberChange}
          handlePhoneNumberBlur={handlePhoneNumberBlur}
          phoneNumberError={phoneError}
          styles="col-span-2"
        />

        <div className="mb-2 col-span-2">
          <Field
            label={t('email')}
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            name="email"
            placeholder={t('placeholders.email') || "example@mail.com"}
            className="w-full"
          />
          <button type='button' className='flex gap-2 items-center text-sm cursor-pointer mt-1'>
            Изменить <SquarePen size={15} />
          </button>
        </div>

        <Field
          label={t('password')}
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordError}
          name="password"
          placeholder={t('placeholders.password') || "••••••••"}
          className="col-span-2"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" className="bg-[#49BA4A]">
        {t('save')}
      </Button>
    </form>
  );
}


