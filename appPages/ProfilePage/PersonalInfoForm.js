"use client";

import { useInput } from "../../hooks/useInput";
import Button from "../../shared/ui/button/Button";
import Field from "../../shared/ui/Field/Field";
import { use, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SquarePen } from "lucide-react";
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getPersonalProfileAction,
  patchPersonalProfileAction,
} from "../../redux/reducer/authSlice";
import updatePersonalDetails from "../../util/updatePersonalDetails";

export default function PersonalInfoForm() {
  const t = useTranslations("PersonalInfoForm");

  const locale = useLocale();
  const [error, setError] = useState();
  const [successMessage, setSuccessMessage] = useState("");

  const {
    data: profileData,
    loading,
    error: reduxError,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
    setInputState: setNameValue,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: surnameValue,
    handleInputChange: handleSurnameChange,
    handleInputBlur: handleSurnameBlur,
    hasError: surnameError,
    setInputState: setSurnameValue,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: nicknameValue,
    handleInputChange: handleNicknameChange,
    handleInputBlur: handleNicknameBlur,
    hasError: nicknameError,
    setInputState: setNicknameValue,
  } = useInput("", (v) => v.trim().length >= 3);

  const [countryCode, setCountryCode] = useState("+380");
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
    setInputState: setPhoneNumberValue,
  } = useInput("", (val) => /^\d{6, 14}$/.test(val));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
    setInputState: setEmailValue,
  } = useInput("", (v) => /\S+@\S+\.\S+/.test(v));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {};

    if (nameValue.trim() && nameValue !== profileData?.first_name) {
      payload.first_name = nameValue.trim();
    }

    if (surnameValue.trim() && surnameValue !== profileData?.last_name) {
      payload.last_name = surnameValue.trim();
    }

    if (nicknameValue.trim() && nicknameValue !== profileData?.display_name) {
      payload.display_name = nicknameValue.trim();
    }

    if (
      phoneNumberValue.trim() &&
      phoneNumberValue !== profileData?.phone_number
    ) {
      payload.phone_number = phoneNumberValue.trim();
    }

    if (countryCode !== profileData?.country_code) {
      payload.country_code = countryCode;
    }

    if (Object.keys(payload).length === 0) {
      setError(t("nothingToUpdate"));
      return;
    }

    try {
      const resultAction = await dispatch(
        patchPersonalProfileAction({ locale, payload })
      );

      if (patchPersonalProfileAction.rejected.match(resultAction)) {
        setError(resultAction.payload || resultAction.error.message);
      } else {
        setSuccessMessage(t("successMessage"));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    dispatch(getPersonalProfileAction(locale));
  }, [locale]);

  useEffect(() => {
    if (!reduxError && profileData) {
      setNameValue((p) => {
        return {
          ...p,
          value: profileData.first_name || "",
          error:
            !profileData.first_name || profileData.first_name.trim().length < 2,
        };
      });
      setSurnameValue((p) => {
        return {
          ...p,
          value: profileData.last_name || "",
          error:
            !profileData.last_name || profileData.last_name.trim().length < 2,
        };
      });
      setNicknameValue((p) => {
        return {
          ...p,
          value: profileData.display_name || "",
          error:
            !profileData.display_name ||
            profileData.display_name.trim().length < 3,
        };
      });
      setCountryCode(profileData.country_code || "+380");
      setPhoneNumberValue((p) => {
        return {
          ...p,
          value: profileData.phone_number || "",
          error:
            !profileData.phone_number ||
            !/^\d{6,14}$/.test(profileData.phone_number),
        };
      });
      setEmailValue((p) => {
        return {
          ...p,
          value: profileData.email || "",
          error: !profileData.email || !/\S+@\S+\.\S+/.test(profileData.email),
        };
      });
    }
  }, [profileData]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl text-color  p-4 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
        <h3 className="text-lg font-semibold col-span-2">{t("title")}</h3>

        <Field
          label={t("name")}
          value={nameValue}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={nameError}
          name="name"
          placeholder={t("placeholders.name") || "Иван"}
          className="col-span-2 md:col-span-1"
        />
        <Field
          label={t("surname")}
          value={surnameValue}
          onChange={handleSurnameChange}
          onBlur={handleSurnameBlur}
          error={surnameError}
          name="surname"
          placeholder={t("placeholders.surname") || "Иванов"}
          className="col-span-2 md:col-span-1"
        />

        <Field
          label={t("nickname")}
          value={nicknameValue}
          onChange={handleNicknameChange}
          onBlur={handleNicknameBlur}
          error={nicknameError}
          name="nickname"
          placeholder={t("placeholders.nickname") || "ivan123"}
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
            label={t("email")}
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            error={emailError}
            name="email"
            placeholder={t("placeholders.email") || "example@mail.com"}
            className="w-full"
          />
          <button
            type="button"
            className="flex gap-2 items-center text-sm cursor-pointer mt-1"
          >
            Изменить <SquarePen size={15} />
          </button>
        </div>
      </div>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {error ||
        (reduxError && <p className="text-red-500">{error || reduxError}</p>)}
      <Button type="submit">{t("save")}</Button>
    </form>
  );
}
