"use client"

import { useInput } from '../../hooks/useInput';
import Button from '../../shared/ui/button/Button';
import Field from '../../shared/ui/Field/Field';
import React, { useState } from 'react';
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput"
import { useTranslations } from 'next-intl';

function DeliverForm() {
  const t = useTranslations('DeliverForm');
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
    value: nameCompanyValue,
    handleInputChange: handleNameCompanyChange,
    handleInputBlur: handleNameCompanyBlur,
    hasError: nameCompanyError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: VATNumValue,
    handleInputChange: VATNumChange,
    handleInputBlur: VATNumBlur,
    hasError: VATNumError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: countryValue,
    handleInputChange: handleCountryChange,
    handleInputBlur: handleCountryBlur,
    hasError: countryError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: adressValue,
    handleInputChange: handleAdressChange,
    handleInputBlur: handleAdressBlur,
    hasError: adressError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: houseValue,
    handleInputChange: handleHouseChange,
    handleInputBlur: handleHouseBlur,
    hasError: houseError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: postalCodeValue,
    handleInputChange: handlePostalCodeChange,
    handleInputBlur: handlePostalCodeBlur,
    hasError: postalCodeError,
  } = useInput('', (v) => v.trim().length >= 3);

  const {
    value: EORINumber,
    handleInputChange: handleEORINumberChange,
    handleInputBlur: handleEORINumberBlur,
    hasError: EORINumberError,
  } = useInput('', (v) => v.length >= 5);

  const [countryCode, setCountryCode] = useState('+380');
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
  } = useInput('', (val) => /^\d{6,14}$/.test(val));

  const handleSubmit = (e) => {
    e.preventDefault();

    const required = [
      nameValue,
      surnameValue,
      emailValue,
      adressValue,
      houseValue,
      countryValue,
      postalCodeValue,
      phoneNumberValue,
    ];

    const hasErrors =
      nameError || surnameError || emailError || adressError ||
      houseError || countryError || postalCodeError || phoneError;

    if (hasErrors || required.some((val) => !val.trim())) {
      setError(t('error'));
      return;
    }

    const data = {
      name: nameValue,
      surname: surnameValue,
      email: emailValue,
      phone: countryCode + phoneNumberValue,
      adress: adressValue,
      house: houseValue,
      postalCode: postalCodeValue,
      country: countryValue,
    };

    if (nameCompanyValue.trim()) data.companyName = nameCompanyValue;
    if (VATNumValue.trim()) data.VATNumber = VATNumValue;
    if (EORINumber.trim()) data.EORINumber = EORINumber;

    console.log('Форма отправлена:', data);
    setError(null);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="bg-[#F5F5F5] p-4 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
        <h3 className="text-lg font-semibold">{t('title')}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            label={t('surname')}
            value={surnameValue}
            onChange={handleSurnameChange}
            onBlur={handleSurnameBlur}
            error={surnameError}
            name="surname"
            placeholder="Kowalski"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t('name')}
            value={nameValue}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            error={nameError}
            name="name"
            placeholder="Anna"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t('company')}
            value={nameCompanyValue}
            onChange={handleNameCompanyChange}
            onBlur={handleNameCompanyBlur}
            error={nameCompanyError}
            name="name_company"
            placeholder="Beauty Experts Group"
            className="col-span-2"
          />
          <Field
            label={t('vat')}
            value={VATNumValue}
            onChange={VATNumChange}
            onBlur={VATNumBlur}
            error={VATNumError}
            name="VATNum"
            placeholder="PL1234567890"
            className="col-span-2"
          />
          <Field
            label={t('country')}
            value={countryValue}
            onChange={handleCountryChange}
            onBlur={handleCountryBlur}
            error={countryError}
            name="country"
            placeholder="Poland"
            className="col-span-2"
          />
          <Field
            label={t('adress')}
            value={adressValue}
            onChange={handleAdressChange}
            onBlur={handleAdressBlur}
            error={adressError}
            name="adress"
            placeholder="Krakowska Street"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t('house')}
            value={houseValue}
            onChange={handleHouseChange}
            onBlur={handleHouseBlur}
            error={houseError}
            name="house"
            placeholder="15A"
            className="col-span-2 md:col-span-1"
          />
          <Field
            label={t('postal')}
            value={postalCodeValue}
            onChange={handlePostalCodeChange}
            onBlur={handlePostalCodeBlur}
            error={postalCodeError}
            name="postal"
            placeholder="30-123"
            className="col-span-2"
          />
          <Field
            label={t('email')}
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            name="email"
            placeholder="example@email.com"
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
            label={t('form.phone')}
            placeholder="+48 600 123 456"
          />
          <Field
            label={t('eori')}
            value={EORINumber}
            onChange={handleEORINumberChange}
            onBlur={handleEORINumberBlur}
            error={EORINumberError}
            name="EORINumber"
            placeholder="PL123456789012"
            className="col-span-2"
          />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" className="bg-[#49BA4A] w-fit">
        {t('save')}
      </Button>
    </form>

  );
}

export default DeliverForm;