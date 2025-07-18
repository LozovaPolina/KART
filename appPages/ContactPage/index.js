"use client";

import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { MapPin, Phone, Send } from "lucide-react";
import { ButtonWithCircleLink } from "../../shared/ui/button/ButtonWithCircleLink";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import Field from "../../shared/ui/Field/Field";
import { useInput } from "../../hooks/useInput";
import PhoneInput from "../../shared/ui/PhoneInput/PhoneInput";

import { API_URL } from "../../data/url";
import Text from "../../shared/ui/text/Text";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const formRef = useRef(null);

  // Using your useInput hook for all fields with validation
  const {
    value: nameValue,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
    hasError: nameError,
  } = useInput("", (value) => value.trim() !== "");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (value) => /\S+@\S+\.\S+/.test(value));

  const [countryCode, setCountryCode] = useState("+380");
  const {
    value: phoneNumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneError,
  } = useInput("", (val) => /^\d{6,14}$/.test(val));

  const {
    value: messageValue,
    handleInputChange: handleMessageChange,
    handleInputBlur: handleMessageBlur,
    hasError: messageError,
  } = useInput("", (value) => value.trim() !== "");

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Trigger blur handlers
    handleNameBlur();
    handleEmailBlur();
    handlePhoneNumberBlur();
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
    const data = {
      name: nameValue,
      email: emailValue,
      phone_number: countryCode + phoneNumberValue,
      message: messageValue,
    };

    const res = await fetch(`${API_URL}/forms/application/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response status:", res.status);

    if (res.status == 201) {
      console.log("Form submitted successfully");
      handleNameChange({ target: { value: "" } });
      handleEmailChange({ target: { value: "" } });
      handlePhoneNumberChange({ target: { value: "" } });
      handleMessageChange({ target: { value: "" } });
    }
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

      <section className=" py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid text-color  md:grid-cols-2 gap-8 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-8 rounded-xl">
          {/* Form */}
          <form
            ref={formRef}
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
              className="w-full col-span-2 text-color"
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              phoneNumber={phoneNumberValue}
              handlePhoneNumberChange={handlePhoneNumberChange}
              handlePhoneNumberBlur={handlePhoneNumberBlur}
              phoneNumberError={phoneError}
              styles="col-span-2"
              labelBgStyle="bg-white"
            />
            <div className="relative w-full text-color">
              <label
                htmlFor="message"
                className="absolute -top-1 left-2 bg-white px-1 text-sm text-color "
              >
                {t("fields.message") + " *"}
              </label>
              <textarea
                id="message"
                name="message"
                value={messageValue}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                placeholder={
                  t("fields.messagePlaceholder") ||
                  "Напишите ваше сообщение здесь..."
                }
                className={`w-full border-2 border-[#E2E2E2]  rounded-md px-4 py-2 mt-2 h-24 resize-none focus:outline-none  ${
                  messageError ? "border-red-500" : " focus:border-black  "
                }`}
              />
              {messageError && (
                <Text className="text-red-500 text-xs mt-1">
                  {t("errors.messageRequired")}
                </Text>
              )}
            </div>

            {submitError && (
              <Text className="text-red-500 text-sm text-center">
                {submitError}
              </Text>
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
              <span className="font-semibold">
                {t("contactForm.titlePart1")}
              </span>{" "}
              {t("contactForm.titlePart2")}
            </h2>
            <h3 className="text-xl mb-4">{t("contactForm.subtitle")}</h3>
            <Text className="text-[#848484] mb-6">
              {t("contactForm.description")}
            </Text>

            <div className="space-y-4 text-sm">
              <div className="flex gap-2 items-center">
                <MapPin className="text-[#96B87D] mt-1" />
                <div>
                  <Text className="font-sm text-color ">
                    {t("contactForm.addressLabel")}
                  </Text>
                  <Text>{t("contactForm.address")}</Text>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="text-[#96B87D]" />
                <div>
                  <Text className="font-sm text-color ">
                    {t("contactForm.phoneLabel")}
                  </Text>
                  <Text>{t("contactForm.phone")}</Text>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Send className="text-[#96B87D]" />
                <div>
                  <Text className="font-sm text-color ">
                    {t("contactForm.messengerLabel")}
                  </Text>
                  <Text>{t("contactForm.messengerPhones")}</Text>
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
