"use client"

import { useInput } from '../../hooks/useInput';
import Field from '../../shared/ui/Field/Feild';
import React, { useState } from 'react';
const countryCodes = [
  { code: "+90", label: "🇹🇷 TR" },
  { code: "+380", label: "🇺🇦 UA" },
  { code: "+7", label: "🇷🇺 RU" },
  { code: "+48", label: "🇵🇱 PL" },
  { code: "+1", label: "🇺🇸 US" },
];
function DeliverForm() {
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
    value: nameCompanyValue,
    handleInputChange: handleNameCompanyChange,
    handleInputBlur: handleNameCompanyBlur,
    hasError: nameCompanyError,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: VATNumValue,
    handleInputChange: VATNumChange,
    handleInputBlur: VATNumBlur,
    hasError: VATNumError,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: countryValue,
    handleInputChange: handleCountryChange,
    handleInputBlur: handleCountryBlur,
    hasError: countryError,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: adressValue,
    handleInputChange: handleAdressChange,
    handleInputBlur: handleAdressBlur,
    hasError: adressError,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: houseValue,
    handleInputChange: handleHouseChange,
    handleInputBlur: handleHouseBlur,
    hasError: houseError,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: postalCodeValue,
    handleInputChange: handlePostalCodeChange,
    handleInputBlur: handlePostalCodeBlur,
    hasError: postalCodeError,
  } = useInput("", (v) => v.trim().length >= 3);
  const {
    value: EORINumber,
    handleInputChange: handleEORINumberChange,
    handleInputBlur: handleEORINumberBlur,
    hasError: EORINumberError,
  } = useInput("", (v) => v.length >= 5);

  const [countryCode, setCountryCode] = useState("+380");
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
  } = useInput("", (val) => /^\d{6,14}$/.test(val));

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
      setError("Пожалуйста, заполните все обязательные поля правильно.");
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

    // Добавляем эти поля, только если они заполнены
    if (nameCompanyValue.trim()) data.companyName = nameCompanyValue;
    if (VATNumValue.trim()) data.VATNumber = VATNumValue;
    if (EORINumber.trim()) data.EORINumber = EORINumber;

    console.log("Форма отправлена:", data);
    setError(null);
  };

  return (
    <form className="space-y-4 h-[503px] hide-scrollbar" onSubmit={handleSubmit}>
      <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">

        <h3 className="text-lg font-semibold">Контактные данные</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">

          <Field
            label="Фамилия"
            value={surnameValue}
            onChange={handleSurnameChange}
            onBlur={handleSurnameBlur}
            error={surnameError}
            name="surname"
          />

          <Field
            label="Имя"
            value={nameValue}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            error={nameError}
            name="name"
          />

          <Field
            label="Название компании (необязательно)"
            value={nameCompanyValue}
            onChange={handleNameCompanyChange}
            onBlur={handleNameCompanyBlur}
            error={nameCompanyError}
            name="name_company"
            className="col-span-2"
          />
          <Field
            label="ID / VAT Number (необязательно)"
            value={VATNumValue}
            onChange={VATNumChange}
            onBlur={VATNumBlur}
            error={VATNumError}
            name="VATNum"
            className="col-span-2"
          />

          <Field
            label="Страна/регион *"
            value={countryValue}
            onChange={handleCountryChange}
            onBlur={handleCountryBlur}
            error={countryError}
            name="country"
            className="col-span-2"
          />
          <Field
            label="Адрес *"
            value={adressValue}
            onChange={handleAdressChange}
            onBlur={handleAdressBlur}
            error={adressError}
            name="adress"
            className=""
          />
          <Field
            label="Номер дома, квартиры*"
            value={houseValue}
            onChange={handleHouseChange}
            onBlur={handleHouseBlur}
            error={houseError}
            name="adress"
            className=""
          />
          <Field
            label="Почтовый индекс *"
            value={postalCodeValue}
            onChange={handlePostalCodeChange}
            onBlur={handlePostalCodeBlur}
            error={postalCodeError}
            name="adress"
            className="col-span-2"
          />
          <Field
            label="Email"
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            name="email"
            className="col-span-2"
          />

          <div className="w-full col-span-2">
            <div className="flex gap-2 relative w-[115px">
              <label htmlFor="countryCode" className="text-sm text-[#272727] bg-[#F5F5F5]  mb-1 absolute left-4 -top-2">
                Код страны
              </label>
              <select
                value={countryCode}
                name='countryCode'
                onChange={(e) => setCountryCode(e.target.value)}
                className="border-2 border-[#E2E2E2] bg-[#F5F5F5] rounded p-2 w-[125px] focus:border-black"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code} className='w-[115px] flex gap-2' >
                    <span>{c.label} </span>  <span>{c.code} </span>
                  </option>
                ))}
              </select>
              <label htmlFor="countryCode" className="text-sm  mb-1 text-[#272727] bg-[#F5F5F5] absolute left-36 -top-2">
                Номер телефона
              </label>
              <input
                type="text"
                placeholder=""
                value={phoneNumberValue}
                onChange={handlePhoneNumberChange}
                onBlur={handlePhoneNumberBlur}
                className={`flex-1 p-2 border-2 rounded focus:border-black ${phoneError ? "border-red-500" : "border-[#E2E2E2]"
                  }`}
              />
            </div>
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">Введите корректный номер</p>
            )}
          </div>

          <Field
            label="Почтовый индекс *"
            value={postalCodeValue}
            onChange={handlePostalCodeChange}
            onBlur={handlePostalCodeBlur}
            error={postalCodeError}
            name="adress"
            className="col-span-2"
          />
          <Field
            label="EORI number (необязательно)"
            value={EORINumber}
            onChange={handleEORINumberChange}
            onBlur={handleEORINumberBlur}
            error={EORINumberError}
            name="EORINumber"
            className="col-span-2"
          />

        </div>

      </div>

      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-[#49BA4A] text-white px-6 py-2 rounded-md hover:bg-[#3ba83c] transition"
      >
        Сохранить
      </button>
    </form >
  );
}


export default DeliverForm;