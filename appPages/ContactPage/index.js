"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { MapPin, Phone, Send } from "lucide-react";
import { ButtonWithCircleLink } from "../../shared/ui/button/ButtonWithCircleLink";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import Field from "../../shared/ui/Field/Field";
import { useInput } from "../../hooks/useInput";
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput";

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  // Using your useInput hook for all fields with validation
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
    reset: resetName,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
    reset: resetEmail,
  } = useInput("", (value) => /\S+@\S+\.\S+/.test(value));

  const [countryCode, setCountryCode] = useState('+380');
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
  } = useInput('', (val) => /^\d{6,14}$/.test(val));


  const {
    value: messageValue,
    handleInputChange: handleMessageChange,
    handleInputBlur: handleMessageBlur,
    hasError: messageError,
    reset: resetMessage,
  } = useInput("", (value) => value.trim() !== "");

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");

    // Trigger blur handlers
    handleNameBlur();
    handleEmailBlur();
    handlePhoneBlur();
    handleMessageBlur();

    if (nameError || emailError || phoneError || messageError) {
      setSubmitError(t("errors.fixForm"));
      return;
    }

    if (!nameValue.trim()) {
      setSubmitError(t("errors.nameRequired"));
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setSubmitError(t("errors.emailInvalid"));
      return;
    }
    if (messageValue.trim() === "") {
      setSubmitError(t("errors.messageRequired"));
      return;
    }

    alert(t("messages.formSent"));

    resetName();
    resetEmail();
    resetPhone();
    resetMessage();
  };

  return (
    <>
      <div className="flex justify-center">
        <HintNavigation
          links={[
            { label: t("navigation.home"), href: "/" },
            { label: t("navigation.contacts"), href: "/contacts" },
          ]}
        />
      </div>

      <section className="bg-[#F5F5F5] py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-8 rounded-xl">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="order-1 md:order-2 space-y-4 bg-[#FFFFFF] p-4 sm:p-6 rounded-xl"
            noValidate
          >
            <Field
              label={t("fields.name") + " *"}
              name="name"
              type="text"
              value={nameValue}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              error={nameError}
              placeholder="Anna Kowalska"
              className="mt-2"
              labelBgColor="bg-white"
            />
            <Field
              label={t("fields.email") + " *"}
              name="email"
              type="email"
              value={emailValue}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={emailError}
              placeholder="example@email.com"
              className="mt-2"
              labelBgColor="bg-white"
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
              labelBgStyle="bg-white"
            />
            <div className="relative w-full">
              <label
                htmlFor="message"
                className="absolute -top-1 left-2 bg-white px-1 text-sm text-[#272727]"
              >
                {t("fields.message") + " *"}
              </label>
              <textarea
                id="message"
                name="message"
                value={messageValue}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                placeholder={t("fields.messagePlaceholder") || "Напишите ваше сообщение здесь..."}
                className={`w-full border-2 border-[#E2E2E2]  rounded-md px-4 py-2 mt-2 h-24 resize-none focus:outline-none  ${messageError ? "border-red-500" : " focus:border-black  "
                  }`}
              />
              {messageError && (
                <p className="text-red-500 text-xs mt-1">
                  {t("errors.messageRequired")}
                </p>
              )}
            </div>

            {submitError && (
              <p className="text-red-500 text-sm text-center">{submitError}</p>
            )}

            <ButtonWithCircleLink
              type="submit"
              buttonClassName="w-[90%]"
              buttonText={t("buttons.send")}
            />
          </form>


          {/* Contact Info */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl mb-1">
              <span className="font-semibold">{t("contactForm.titlePart1")}</span>{" "}
              {t("contactForm.titlePart2")}
            </h2>
            <h3 className="text-xl mb-4">{t("contactForm.subtitle")}</h3>
            <p className="text-[#848484] mb-6">{t("contactForm.description")}</p>

            <div className="space-y-4 text-sm">
              <div className="flex gap-2 items-center">
                <MapPin className="text-[#96B87D] mt-1" />
                <div>
                  <p className="font-sm text-[#848484]">{t("contactForm.addressLabel")}</p>
                  <p>{t("contactForm.address")}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="text-[#96B87D]" />
                <div>
                  <p className="font-sm text-[#848484]">{t("contactForm.phoneLabel")}</p>
                  <p>{t("contactForm.phone")}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Send className="text-[#96B87D]" />
                <div>
                  <p className="font-sm text-[#848484]">{t("contactForm.messengerLabel")}</p>
                  <p>{t("contactForm.messengerPhones")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto mt-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title={t("map.title")}
            src={t("map.src")}
            className="w-full h-[400px] border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

