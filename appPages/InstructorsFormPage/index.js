"use client"

import React, { useState } from 'react';
import TextAreaField from '../../shared/ui/Field/TextAreaField';
import Field from '../../shared/ui/Field/Field';
// import { MultiSelect } from '@/shared/multi-select/MultiSelect';
import RadioGroup from '../../shared/ui/RadioGroup/RadioGroup';
// import HintNavigation from '@/shared/hint-navigation/HintNavigation';
// import Title from '../../shared/ui/title/Title';
import { useInput } from '../../hooks/useInput';
import Button from '../../shared/ui/button/Button';
import HintNavigation from '../../shared/hint-navigation/HintNavigation';
import Title from '../../shared/ui/title/Title';
import Text from '../../shared/ui/text/Text';
import FormSection from '../../shared/ui/FormSection/FormSection';
import PhoneInput from '../../shared/ui/PhoneInput/PhoneInput/PhoneInput';



function InstructorsFormPage() {
  const [socials, setSocials] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [error, setError] = useState('');

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
    // Simple date format check (YYYY-MM-DD), adjust if needed
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
    if (!v.trim()) return true; // optional field
    // Simple URL validation (optional)
    return /^https?:\/\/\S+\.\S+/.test(v);
  });

  const [isPedicureMaster, setIsPedicureMaster] = useState(null);
  const [hasMedicalEducation, setHasMedicalEducation] = useState(null);

  const [experienceYears, setExperienceYears] = useState(""); // validate in submit

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
    if (hasTeachingExperience === "Нет" || hasTeachingExperience === null) return true; // not required if no experience
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
  } = useInput("", () => true); // optional field, no validation


  const handleSubmit = (e) => {
    e.preventDefault();

    // Required text inputs values
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

    // Radios/select required values
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

    // Check for empty text fields (trimmed)
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
      setError("Пожалуйста, заполните все обязательные поля правильно.");
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
      <div className='flex justify-center'>
        <HintNavigation
          links={[
            { label: "Главная", href: "/" },
            { label: "Форма дилерства", href: "/dilers-form" },
          ]}
        />
      </div>
      <Title color="green" className="text-center">Форма для запроса статуса Дилера</Title>
      <Text className="text-center text-[#404040]! max-w-[603px] mx-auto" >Уважаемый кандидат! Просим вас внимательно заполнить анкету. Предоставленные данные помогут нам оценить ваш опыт, профессиональные компетенции и возможность представлять бренд KART PODOLOGY в роли инструктора.</Text>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[830px] mx-auto w-full" >

        <FormSection>
          <Title >Персональная информация</Title>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Field label="Фамилия, имя, отчество" value={fullName} onChange={handleFullNameChange} onBlur={handleFullNameBlur} error={fullNameError} className="w-full md:w-[48%]" />
            <Field label="Дата рождения" value={birthDate} onChange={handleBirthDateChange} onBlur={handleBirthDateBlur} error={birthDateError} className="w-full md:w-[48%]" />
            <Field label="Город проживания" value={city} onChange={handleCityChange} onBlur={handleCityBlur} error={cityError} className="w-full md:w-[48%]" />
            <Field label="E-mail" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} error={emailError} className="w-full md:w-[48%]" />
            {/* <div className="w-full h-full"> */}

            <PhoneInput countryCode={countryCode} setCountryCode={setCountryCode} phoneNumber={phoneNumber} handlePhoneNumberChange={handlePhoneNumberChange} handlePhoneNumberBlur={handlePhoneNumberBlur} phoneNumberError={phoneNumberError} styles={'w-full md:w-[48%]'} />


            {/* </div> */}
            <Field label="Сайт" value={website} onChange={handleWebsiteChange} onBlur={handleWebsiteBlur} error={websiteError} className="w-full md:w-[48%]" />
          </div>

          {socials.map((social, index) => (
            <input
              key={index}
              value={social}
              onChange={(e) => handleChangeSocial(index, e.target.value)}
              className="w-full border border-[#E2E2E2] rounded  outline-none  p-2 focus:border-[#272727]"
            />
          ))}
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onBlur={handleAddSocial}
            placeholder="+ Добавить Соцсети"
            className="w-full  p-2 rounded outline-none"
          />
        </FormSection>
        <FormSection>
          <Title >Профессиональный опыт</Title>
          <RadioGroup label="Вы являетесь:" options={["Мастер педикюра", "Практикующий подолог"]} value={isPedicureMaster} onChange={setIsPedicureMaster} />
          <Field label="Образование (указать профиль и уровень)" value={educationDetail} onChange={handleEducationDetail} onBlur={handleEducationDetailBlur} error={educationDetailError} />
          <RadioGroup label="Наличие медицинского образования" options={["Да", "Нет"]} value={hasMedicalEducation} onChange={setHasMedicalEducation} />
          <RadioGroup label="Стаж работы в сфере педикюра / подологии:" options={["1-3 года", "4-5 лет", "6-10 лет", "Больше 10 лет"]} value={experienceYears} onChange={setExperienceYears} />
          <Field label="Текущее место работы и должность" value={currentJob} onChange={handleCurrentJob} onBlur={handleCurrentJobBlur} error={currentJobError} />
          <Field label="Какими техниками и подходами владеете (кратко)" value={techniques} onChange={handleTechniques} onBlur={handleTechniquesBlur} error={techniquesError} />
        </FormSection>

        <FormSection>
          <Title>Обучающая деятельность</Title>
          <RadioGroup label="Имеется ли опыт преподавания (курсы, мастер-классы, семинары)?" options={["Да", "Нет"]} value={hasTeachingExperience} onChange={setHasTeachingExperience} />
          <Field label="Если да, опишите кратко ваш опыт, тематику и период проведения" value={teachingDetail} onChange={handleTeachingDetail} onBlur={handleTeachingDetailBlur} error={teachingDetailError} />
          <RadioGroup label="Наличие или доступ к учебной площадке" options={["Да", "Нет", "Могу арендовать при необходимости"]} value={hasClassroom} onChange={setHasClassroom} />
          <RadioGroup label="Сколько студентов вы обучаете в месяц" options={["1-5", "6-10", "11-20", "Более 20"]} value={studentsPerMonth} onChange={setStudentsPerMonth} />
        </FormSection>
        <FormSection>
          <Title>Знание и использование продукции KART</Title>
          <RadioGroup label="Знакомы ли вы с брендом KART и нашей продукцией?" options={["Да", "Нет", "Частично"]} value={knowsKART} onChange={setKnowsKART} />
          <RadioGroup label="Какой период вы используете продукцию KART в своей практике?" options={["Менее 1 года", "1-2 года", "3-5 лет", "Более 5 лет", "Не использую"]} value={usesKARTPeriod} onChange={setUsesKARTPeriod} />
        </FormSection>
        <FormSection>
          <Title>Коммуникационные навыки и продвижение</Title>
          <TextAreaField label="Ваши сильные стороны как преподавателя (по вашему мнению)" value={strongSides} onChange={handleStrongSides} onBlur={handleStrongSidesBlur} error={strongSidesError} />
          <TextAreaField label="Опыт работы с аудиторией (оффлайн / онлайн)" value={audienceExp} onChange={handleAudienceExp} onBlur={handleAudienceExpBlur} error={audienceExpError} />
          <TextAreaField label="Какие платформы/каналы вы используете для продвижения себя как специалиста (Instagram, YouTube и пр.)" value={promotionPlatforms} onChange={handlePromotionPlatforms} onBlur={handlePromotionPlatformsBlur} error={promotionPlatformsError} />

          <Title>Дополнительная информация</Title>
          <TextAreaField label="Почему вы хотите стать инструктором KART?" value={motivation} onChange={handleMotivation} onBlur={handleMotivationBlur} error={motivationError} />
          <RadioGroup label="Готовы ли вы пройти обучение в рамках программы инструкторов KART?" options={["Да", "Нет"]} value={readyToLearn} onChange={setReadyToLearn} />
          <TextAreaField label="Дополнительные комментарии или предложения" value={comment} onChange={handleComment} onBlur={handleCommentBlur} error={commentError} />
        </FormSection>
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Отправить</Button>
      </form>

    </section>
  );
}




export default InstructorsFormPage;