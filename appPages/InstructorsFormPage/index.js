"use client"

import React, { useState } from 'react';
import TextAreaField from '../../shared/ui/Field/TextAreaField';
import Field from '../../shared/ui/Field/Field';
import RadioGroup from '../../shared/ui/RadioGroup/RadioGroup';
import { useInput } from '../../hooks/useInput';
import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Title from '../../shared/ui/title/Title';
import FormSection from '../../shared/ui/FormSection/FormSection';
import PhoneInput from '../../shared/ui/PhoneInput/PhoneInput';
import { useTranslations } from 'next-intl';
import { ButtonWithCircleLink } from '../../shared/ui/button/ButtonWithCircleLink';


export default function InstructorsFormPage() {
  const t = useTranslations("InstructorsFormPage");
  const [socials, setSocials] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [error, setError] = useState("");

  const [countryCode, setCountryCode] = useState("+90");

  const handleAddSocial = () => {
    if (currentInput.trim() === "") return;
    setSocials((prev) => [...prev, currentInput.trim()]);
    setCurrentInput("");
  };

  const handleChangeSocial = (index, value) => {
    const updated = [...socials];
    updated[index] = value;
    setSocials(updated);
  };

  const {
    value: fullName,
    handleInputChange: handleFullNameChange,
    handleInputBlur: handleFullNameBlur,
    hasError: fullNameError,
  } = useInput("", (v) => v.trim().length > 3);

  const {
    value: birthDate,
    handleInputChange: handleBirthDateChange,
    handleInputBlur: handleBirthDateBlur,
    hasError: birthDateError,
  } = useInput("", (v) => {
    if (!v.trim()) return false; // required
    return /^\d{4}-\d{2}-\d{2}$/.test(v);
  });

  const {
    value: city,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
    hasError: cityError,
  } = useInput("", (v) => v.trim().length > 1);

  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailError,
  } = useInput("", (v) => /\S+@\S+\.\S+/.test(v));

  const {
    value: phoneNumber,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    hasError: phoneNumberError,
  } = useInput("", (v) => v.trim() !== "");

  const {
    value: website,
    handleInputChange: handleWebsiteChange,
    handleInputBlur: handleWebsiteBlur,
    hasError: websiteError,
  } = useInput("", (v) => {
    if (!v.trim()) return true;
    return /^https?:\/\/\S+\.\S+/.test(v);
  });

  const [isPedicureMaster, setIsPedicureMaster] = useState(null);
  const [hasMedicalEducation, setHasMedicalEducation] = useState(null);
  const [experienceYears, setExperienceYears] = useState("");
  const {
    value: educationDetail,
    handleInputChange: handleEducationDetail,
    handleInputBlur: handleEducationDetailBlur,
    hasError: educationDetailError,
  } = useInput("", (v) => v.trim() !== "");
  const {
    value: currentJob,
    handleInputChange: handleCurrentJob,
    handleInputBlur: handleCurrentJobBlur,
    hasError: currentJobError,
  } = useInput("", (v) => v.trim() !== "");
  const {
    value: techniques,
    handleInputChange: handleTechniques,
    handleInputBlur: handleTechniquesBlur,
    hasError: techniquesError,
  } = useInput("", (v) => v.trim() !== "");
  const [hasTeachingExperience, setHasTeachingExperience] = useState(null);
  const {
    value: teachingDetail,
    handleInputChange: handleTeachingDetail,
    handleInputBlur: handleTeachingDetailBlur,
    hasError: teachingDetailError,
  } = useInput("", (v) => {
    if (hasTeachingExperience === t("form.hasTeachingExperienceOptions.no") || hasTeachingExperience === null) return true;
    return v.trim().length > 10;
  });
  const [hasClassroom, setHasClassroom] = useState(null);
  const [studentsPerMonth, setStudentsPerMonth] = useState("");
  const [knowsKART, setKnowsKART] = useState(null);
  const [usesKARTPeriod, setUsesKARTPeriod] = useState("");
  const {
    value: strongSides,
    handleInputChange: handleStrongSides,
    handleInputBlur: handleStrongSidesBlur,
    hasError: strongSidesError,
  } = useInput("", (v) => v.trim() !== "");
  const {
    value: audienceExp,
    handleInputChange: handleAudienceExp,
    handleInputBlur: handleAudienceExpBlur,
    hasError: audienceExpError,
  } = useInput("", (v) => v.trim() !== "");
  const {
    value: promotionPlatforms,
    handleInputChange: handlePromotionPlatforms,
    handleInputBlur: handlePromotionPlatformsBlur,
    hasError: promotionPlatformsError,
  } = useInput("", (v) => v.trim() !== "");
  const {
    value: motivation,
    handleInputChange: handleMotivation,
    handleInputBlur: handleMotivationBlur,
    hasError: motivationError,
  } = useInput("", (v) => v.trim().length >= 10);
  const [readyToLearn, setReadyToLearn] = useState(null);
  const {
    value: comment,
    handleInputChange: handleComment,
    handleInputBlur: handleCommentBlur,
    hasError: commentError,
  } = useInput("", () => true);

  const isPedicureMasterOptions = [
    t("form.isPedicureMasterOptions.master"),
    t("form.isPedicureMasterOptions.podologist"),
  ];
  const hasMedicalEducationOptions = [
    t("form.hasMedicalEducationOptions.yes"),
    t("form.hasMedicalEducationOptions.no"),
  ];
  const experienceYearsOptions = [
    t("form.experienceYearsOptions.1-3"),
    t("form.experienceYearsOptions.4-5"),
    t("form.experienceYearsOptions.6-10"),
    t("form.experienceYearsOptions.more"),
  ];
  const hasTeachingExperienceOptions = [
    t("form.hasTeachingExperienceOptions.yes"),
    t("form.hasTeachingExperienceOptions.no"),
  ];
  const hasClassroomOptions = [
    t("form.hasClassroomOptions.yes"),
    t("form.hasClassroomOptions.no"),
    t("form.hasClassroomOptions.rent"),
  ];
  const studentsPerMonthOptions = [
    t("form.studentsPerMonthOptions.1-5"),
    t("form.studentsPerMonthOptions.6-10"),
    t("form.studentsPerMonthOptions.11-20"),
    t("form.studentsPerMonthOptions.more"),
  ];
  const knowsKARTOptions = [
    t("form.knowsKARTOptions.yes"),
    t("form.knowsKARTOptions.no"),
    t("form.knowsKARTOptions.partial"),
  ];
  const usesKARTPeriodOptions = [
    t("form.usesKARTPeriodOptions.less1"),
    t("form.usesKARTPeriodOptions.1-2"),
    t("form.usesKARTPeriodOptions.3-5"),
    t("form.usesKARTPeriodOptions.more5"),
    t("form.usesKARTPeriodOptions.notUsed"),
  ];
  const readyToLearnOptions = [
    t("form.readyToLearnOptions.yes"),
    t("form.readyToLearnOptions.no"),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredTextInputs = [
      fullName,
      birthDate,
      city,
      email,
      phoneNumber,
      educationDetail,
      currentJob,
      techniques,
      strongSides,
      audienceExp,
      promotionPlatforms,
      motivation,
      comment,
    ];

    const requiredRadios = [
      isPedicureMaster,
      hasMedicalEducation,
      experienceYears,
      hasTeachingExperience,
      hasClassroom,
      studentsPerMonth,
      knowsKART,
      usesKARTPeriod,
      readyToLearn,
    ];

    const hasEmptyText = requiredTextInputs.some((val) => !val || val.trim() === "");
    const hasEmptyRadio = requiredRadios.some((val) => val === null || val === "");

    const hasTextErrors =
      fullNameError ||
      birthDateError ||
      cityError ||
      emailError ||
      phoneNumberError ||
      educationDetailError ||
      currentJobError ||
      techniquesError ||
      strongSidesError ||
      audienceExpError ||
      promotionPlatformsError ||
      motivationError ||
      commentError;

    if (hasEmptyText || hasEmptyRadio || hasTextErrors) {
      setError(t("form.errorFillAll"));
      return;
    }

    setError(null);

    const data = {
      fullName,
      birthDate,
      city,
      email,
      phone: countryCode + phoneNumber,
      website,
      socials,
      isPedicureMaster,
      hasMedicalEducation,
      experienceYears,
      educationDetail,
      currentJob,
      techniques,
      hasTeachingExperience,
      teachingDetail,
      hasClassroom,
      studentsPerMonth,
      knowsKART,
      usesKARTPeriod,
      strongSides,
      audienceExp,
      promotionPlatforms,
      motivation,
      readyToLearn,
      comment,
    };

    console.log("Заявка на инструктора:", data);

    setSocials([]);
    setCurrentInput("");
    handleFullNameChange({ target: { value: "" } });
    handleBirthDateChange({ target: { value: "" } });
    handleCityChange({ target: { value: "" } });
    handleEmailChange({ target: { value: "" } });
    handlePhoneNumberChange({ target: { value: "" } });
    handleWebsiteChange({ target: { value: "" } });
    handleEducationDetail({ target: { value: "" } });
    handleCurrentJob({ target: { value: "" } });
    handleTechniques({ target: { value: "" } });
    handleTeachingDetail({ target: { value: "" } });
    handleStrongSides({ target: { value: "" } });
    handleAudienceExp({ target: { value: "" } });
    handlePromotionPlatforms({ target: { value: "" } });
    handleMotivation({ target: { value: "" } });
    handleComment({ target: { value: "" } });
    setIsPedicureMaster(null);
    setHasMedicalEducation(null);
    setExperienceYears("");
    setHasTeachingExperience(null);
    setHasClassroom(null);
    setStudentsPerMonth("");
    setKnowsKART(null);
    setUsesKARTPeriod("");
    setReadyToLearn(null);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-center">
        <HintNavigation
          links={[
            { label: t("navigation.home"), href: "/" },
            { label: t("navigation.instructors"), href: "/instructors-form" },
          ]}
        />
      </div>
      <Title color="green" className="text-center">
        {t("title")}
      </Title>
      <p className="text-center text-[#404040]! max-w-[603px] mx-auto">{t("hint")}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[830px] mx-auto w-full">
        <FormSection>
          <Title>{t("form.personalInfo")}</Title>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Field label={t("form.fullName")} value={fullName} onChange={handleFullNameChange} onBlur={handleFullNameBlur} error={fullNameError} className="w-full md:w-[48%]" />
            <Field label={t("form.birthDate")} value={birthDate} onChange={handleBirthDateChange} onBlur={handleBirthDateBlur} error={birthDateError} className="w-full md:w-[48%]" />
            <Field label={t("form.city")} value={city} onChange={handleCityChange} onBlur={handleCityBlur} error={cityError} className="w-full md:w-[48%]" />
            <Field label={t("form.email")} value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} error={emailError} className="w-full md:w-[48%]" />
            <PhoneInput
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              phoneNumber={phoneNumber}
              handlePhoneNumberChange={handlePhoneNumberChange}
              handlePhoneNumberBlur={handlePhoneNumberBlur}
              phoneNumberError={phoneNumberError}
              styles={"w-full md:w-[48%]"}
              label={t("form.phone")}
            />
            <Field label={t("form.website")} value={website} onChange={handleWebsiteChange} onBlur={handleWebsiteBlur} error={websiteError} className="w-full md:w-[48%]" />
          </div>

          {socials.map((social, index) => (
            <input
              key={index}
              value={social}
              onChange={(e) => handleChangeSocial(index, e.target.value)}
              className="w-full border border-[#E2E2E2] rounded outline-none p-2 focus:border-[#272727]"
            />
          ))}
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onBlur={handleAddSocial}
            placeholder={t("form.socialNetworksPlaceholder")}
            className="w-full p-2 rounded outline-none"
          />
        </FormSection>

        <FormSection>
          <Title>{t("form.professionalExperience")}</Title>
          <RadioGroup label={t("form.isPedicureMaster")} options={isPedicureMasterOptions} value={isPedicureMaster} onChange={setIsPedicureMaster} />
          <Field label={t("form.educationDetail")} value={educationDetail} onChange={handleEducationDetail} onBlur={handleEducationDetailBlur} error={educationDetailError} />
          <RadioGroup label={t("form.hasMedicalEducation")} options={hasMedicalEducationOptions} value={hasMedicalEducation} onChange={setHasMedicalEducation} />
          <RadioGroup label={t("form.experienceYears")} options={experienceYearsOptions} value={experienceYears} onChange={setExperienceYears} />
          <Field label={t("form.currentJob")} value={currentJob} onChange={handleCurrentJob} onBlur={handleCurrentJobBlur} error={currentJobError} />
          <Field label={t("form.techniques")} value={techniques} onChange={handleTechniques} onBlur={handleTechniquesBlur} error={techniquesError} />
        </FormSection>

        <FormSection>
          <Title>{t("form.teachingActivity")}</Title>
          <RadioGroup label={t("form.hasTeachingExperience")} options={hasTeachingExperienceOptions} value={hasTeachingExperience} onChange={setHasTeachingExperience} />
          <Field label={t("form.teachingDetail")} value={teachingDetail} onChange={handleTeachingDetail} onBlur={handleTeachingDetailBlur} error={teachingDetailError} />
          <RadioGroup label={t("form.hasClassroom")} options={hasClassroomOptions} value={hasClassroom} onChange={setHasClassroom} />
          <RadioGroup label={t("form.studentsPerMonth")} options={studentsPerMonthOptions} value={studentsPerMonth} onChange={setStudentsPerMonth} />
        </FormSection>

        <FormSection>
          <Title>{t("form.knowledgeAndUse")}</Title>
          <RadioGroup label={t("form.knowsKART")} options={knowsKARTOptions} value={knowsKART} onChange={setKnowsKART} />
          <RadioGroup label={t("form.usesKARTPeriod")} options={usesKARTPeriodOptions} value={usesKARTPeriod} onChange={setUsesKARTPeriod} />
        </FormSection>

        <FormSection>
          <Title>{t("form.communicationAndPromotion")}</Title>
          <TextAreaField label={t("form.strongSides")} value={strongSides} onChange={handleStrongSides} onBlur={handleStrongSidesBlur} error={strongSidesError} />
          <TextAreaField label={t("form.audienceExp")} value={audienceExp} onChange={handleAudienceExp} onBlur={handleAudienceExpBlur} error={audienceExpError} />
          <TextAreaField label={t("form.promotionPlatforms")} value={promotionPlatforms} onChange={handlePromotionPlatforms} onBlur={handlePromotionPlatformsBlur} error={promotionPlatformsError} />
        </FormSection>

        <FormSection>
          <Title>{t("form.additionalInfo")}</Title>
          <TextAreaField label={t("form.motivation")} value={motivation} onChange={handleMotivation} onBlur={handleMotivationBlur} error={motivationError} />
          <RadioGroup label={t("form.readyToLearn")} options={readyToLearnOptions} value={readyToLearn} onChange={setReadyToLearn} />
          <TextAreaField label={t("form.comment")} value={comment} onChange={handleComment} onBlur={handleCommentBlur} error={commentError} />
        </FormSection>

        {error && <p className="text-red-500">{error}</p>}
        <div className="mx-auto">
          <ButtonWithCircleLink buttonText={t("form.submit")} type="submit" className="px-4 py-2   text-white rounded">

          </ButtonWithCircleLink>
        </div>

      </form>
    </section>
  );
}




