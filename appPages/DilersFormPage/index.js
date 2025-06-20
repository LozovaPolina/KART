"use client"

import { useState } from "react";

import Field from "../../shared/ui/field/Feild";
import Button from "../../shared/ui/button/Button";
import { useInput } from "../../hooks/useInput";
import { MultiSelect } from "../../shared/ui/multi-select/MultiSelect";
import RadioGroup from "../../shared/ui/radio-group/RadioGroup";
import TextAreaField from "../../shared/ui/field/TextAreaField";
import Title from "../../shared/ui/title/Title";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import FormSection from "../../shared/ui/form-section/FormSection";
const mainActivityArray = ["Маркетинг", "Разработка", "Дизайн", "Продажи"];
const promotionChannelsArray = [
  "Instagram",
  "TikTok",
  "Telegram",
  "Сайт",
  "Контекстная реклама",
  "Оффлайн мероприятия",
  "Рекомендации / Сарафанное радио",
];

const distributionMethodsArray = [
  "Продажа в оффлайн-точке",
  "Через маркетплейсы",
  "Через соцсети",
  "Оптовая торговля",
  "Выставки / мероприятия",
];
export default function DilersFormPage() {
  const [error, setError] = useState(null);
  const [socials, setSocials] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

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
    value: contactNameValue,
    handleInputChange: handleContactNameChange,
    handleInputBlur: handleContactNameBlur,
    hasError: contactNameError,
  } = useInput("", (v) => v.trim().length > 1);



  const {
    value: nameCompanyValue,
    handleInputChange: handleNameCompanyChange,
    handleInputBlur: handleNameCompanyBlur,
    hasError: nameCompanyError,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: jobTitleValue,
    handleInputChange: jobTitleChange,
    handleInputBlur: jobTitleBlur,
    hasError: jobTitleError,
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
    value: websiteValue,
    handleInputChange: handleWebsiteChange,
    handleInputBlur: handleWebsiteBlur,
    hasError: websiteError,
  } = useInput("", (v) => v.trim().length >= 3);

  const {
    value: instagramValue,
    handleInputChange: handleInstagramChange,
    handleInputBlur: handleInstagramBlur,
    hasError: instagramError,
  } = useInput("", (v) => v.length >= 5);

  const {
    value: phoneValue,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhoneBlur,
    hasError: phoneError,
  } = useInput("", (v) => /^\d{10,}$/.test(v.replace(/\D/g, "")));

  const {
    value: regionValue,
    handleInputChange: handleRegionChange,
    handleInputBlur: handleRegionBlur,
    hasError: regionError,
  } = useInput("", (v) => v.length >= 5);
  const {
    value: brandsValue,
    handleInputChange: handleBrandsChange,
    handleInputBlur: handleBrandsBlur,
    hasError: brandsError,
  } = useInput("", (v) => v.trim().length >= 5);
  const {
    value: interestValue,
    handleInputChange: handleInterestChange,
    handleInputBlur: handleInterestBlur,
    hasError: interestError,
  } = useInput("", (v) => v.trim().length >= 10);

  const {
    value: commentsValue,
    handleInputChange: handleCommentsChange,
    handleInputBlur: handleCommentsBlur,
    hasError: commentsError,
  } = useInput("", () => true);

  const [experience, setExperience] = useState("");
  const [license, setLicense] = useState("");
  const [training, setTraining] = useState("");
  const [classroom, setClassroom] = useState("");
  const [seats, setSeats] = useState("");
  const [teachers, setTeachers] = useState("");

  const [physicalPresence, setPhysicalPresence] = useState("");
  const [storageAndDelivery, setStorageAndDelivery] = useState("");


  const [brandAgreement, setBrandAgreement] = useState("");


  const [mainActivity, setMainActivity] = useState([]);
  const [promotionChannels, setPromotionChannels] = useState([]);
  const [distributionMethods, setDistributionMethods] = useState([]);

  const [clientBaseSize, setClientBaseSize] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const required = [
      contactNameValue,
      emailValue,
      adressValue,
      phoneValue,
    ];

    const radioRequired = [
      experience,
      license,
      training,
      classroom,
      seats,
      teachers,
      physicalPresence,
      storageAndDelivery,
      brandAgreement,
      clientBaseSize,
    ];

    const hasTextErrors =
      contactNameError || emailError || adressError || websiteError || phoneError;

    const hasRadioErrors = radioRequired.some((val) => val.trim() === "");

    if (hasTextErrors || hasRadioErrors || required.some((val) => !val.trim())) {
      setError("Пожалуйста, заполните все обязательные поля правильно.");
      return;
    }

    const data = {
      name: contactNameValue,
      email: emailValue,
      phone: phoneValue,
      adress: adressValue,
      postalCode: websiteValue,
      socials,
      experience,
      license,
      training,
      classroom,
      seats,
      teachers,
      physicalPresence,
      storageAndDelivery,
      brandAgreement,
      clientBaseSize,
      mainActivity,
      promotionChannels,
      distributionMethods,
      // add other data fields as needed
    };

    console.log("Форма отправлена:", data);
    setError(null);

    // Clear form fields
    setSocials([]);
    setCurrentInput("");

    handleContactNameChange({ target: { value: "" } });
    handleEmailChange({ target: { value: "" } });
    handleAdressChange({ target: { value: "" } });
    handlePhoneChange({ target: { value: "" } });
    handleWebsiteChange({ target: { value: "" } });
    handleInstagramChange({ target: { value: "" } });
    handleRegionChange({ target: { value: "" } });
    handleBrandsChange({ target: { value: "" } });
    handleInterestChange({ target: { value: "" } });
    handleCommentsChange({ target: { value: "" } });

    // Clear radios
    setExperience("");
    setLicense("");
    setTraining("");
    setClassroom("");
    setSeats("");
    setTeachers("");
    setPhysicalPresence("");
    setStorageAndDelivery("");
    setBrandAgreement("");
    setClientBaseSize("");

    // Clear multi-select arrays
    setMainActivity([]);
    setPromotionChannels([]);
    setDistributionMethods([]);
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
      <form
        className="flex flex-col gap-4 max-w-[830px] mx-auto w-full"
        onSubmit={handleSubmit}
      >
        <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
          <Title className="mb-4">Общая информация</Title>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Field
              label="Название компании / ИП:"
              value={nameCompanyValue}
              onChange={handleNameCompanyChange}
              onBlur={handleNameCompanyBlur}
              error={nameCompanyError}
              name="company"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Адрес"
              value={adressValue}
              onChange={handleAdressChange}
              onBlur={handleAdressBlur}
              error={adressError}
              name="adress"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Контактное лицо (Имя и фамилия):"
              value={contactNameValue}
              onChange={handleContactNameChange}
              onBlur={handleContactNameBlur}
              error={contactNameError}
              name="contact"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Должность:"
              value={jobTitleValue}
              onChange={jobTitleChange}
              onBlur={jobTitleBlur}
              error={jobTitleError}
              name="jobTitle"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Телефон"
              value={phoneValue}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              error={phoneError}
              name="phone"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Email"
              value={emailValue}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={emailError}
              name="email"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Сайт:"
              value={websiteValue}
              onChange={handleWebsiteChange}
              onBlur={handleWebsiteBlur}
              error={websiteError}
              name="website"
              className="w-full md:w-[48%]"
            />

            <Field
              label="Инстаграм:"
              value={instagramValue}
              onChange={handleInstagramChange}
              onBlur={handleInstagramBlur}
              error={instagramError}
              name="instagram"
              className="w-full md:w-[48%]"
            />

            {socials.map((social, index) => (
              <input
                key={index}
                name={`socials[${index}]`}
                type="text"
                value={social}
                onChange={(e) => handleChangeSocial(index, e.target.value)}
                className="text-sm px-3 py-2 border border-[#E2E2E2] focus:border-black rounded w-full md:w-[48%] outline-none"
              />
            ))}

            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onBlur={handleAddSocial}
              placeholder="+ Добавить Соцсети"
              className="text-sm text-[#4A4A4A] px-3 py-2 rounded outline-none w-full"
            />
          </div>
        </div>



        <FormSection>
          <Title>Профиль деятельности</Title>
          <RadioGroup
            label="Сколько лет вы работаете в сфере педикюра / подологии / косметологии?"
            name="experience"
            options={["Менее 1 года", "1–3 года", "3–5 лет", "Более 5 лет"]}
            value={experience}
            onChange={setExperience}
          />


          <MultiSelect
            label="Основное направление деятельности:"
            options={mainActivityArray}
            selected={mainActivity}
            setSelected={setMainActivity}
          />
          <RadioGroup
            label="Наличие лицензии (если требуется в вашем регионе):"
            name="license"
            options={["Да", "Нет", "В процессе получения"]}
            value={license}
            onChange={setLicense}
          />
        </FormSection>


        <FormSection>
          <Title>Образовательная деятельность</Title>
          <RadioGroup
            label="Проводите ли вы обучение мастеров?"
            name="training"
            options={["Да", "Нет", "Планируем начать"]}
            value={training}
            onChange={setTraining}
          />


          <RadioGroup
            label="Наличие собственного учебного класса / центра:"
            name="classroom"
            options={["Да", "Нет"]}
            value={classroom}
            onChange={setClassroom}
          />

          <RadioGroup
            label="Количество посадочных мест в учебном зале:"
            name="seats"
            options={["Нет", "Более 3", "Более 10"]}
            value={seats}
            onChange={setSeats}
          />

          <RadioGroup
            label="Есть ли у вас сертифицированные преподаватели?"
            name="teachers"
            options={["Да", "Нет", "Готовы пройти обучение у KART"]}
            value={teachers}
            onChange={setTeachers}
          />
        </FormSection>
        <FormSection>
          <Title>Коммерческая инфраструктура</Title>
          <RadioGroup
            label="Наличие физической торговой точки / офиса / шоурума:"
            name="physicalPresence"
            options={["Да", "Нет"]}
            value={physicalPresence}
            onChange={setPhysicalPresence}
          />

          <MultiSelect
            label="Способ распространения продукции:"
            options={distributionMethodsArray}
            selected={distributionMethods}
            setSelected={setDistributionMethods}
          />

          <RadioGroup
            label="Имеете ли вы возможность хранить и транспортировать продукцию?"
            name="storageAndDelivery"
            options={["Да", "Нет"]}
            value={storageAndDelivery}
            onChange={setStorageAndDelivery}
          />



        </FormSection>

        <FormSection>
          <Title>Продвижение и маркетинг</Title>
          <MultiSelect
            label="Какие каналы продвижения вы используете?"
            options={promotionChannelsArray}
            selected={promotionChannels}
            setSelected={setPromotionChannels}
          />
          <RadioGroup
            label="Готовы ли вы использовать фирменные маркетинговые материалы KART и следовать стандартам бренда?"
            name="brandAgreement"
            options={["Да", "Нет"]}
            value={brandAgreement}
            onChange={setBrandAgreement}
          />
        </FormSection>

        <FormSection>
          <Title>Регион и масштабы деятельности</Title>
          <RadioGroup
            label="Количество активных клиентов в вашей базе (примерно):"
            name="clientBaseSize"
            options={["До 50", "50-100", "Более 100", "Более 200"]}
            value={clientBaseSize}
            onChange={setClientBaseSize}
          />


          <Field
            label="Регион, в котором вы планируете представлять продукцию KART:"
            value={regionValue}
            onChange={handleRegionChange}
            onBlur={handleRegionBlur}
            error={regionError}
            name="region"
            className="w-full"
          />
        </FormSection>
        <FormSection>
          <Title>Дополнительная информация</Title>
          <TextAreaField
            label="Какие бренды вы представляете в настоящее время (если есть)?"
            value={brandsValue}
            onChange={handleBrandsChange}
            onBlur={handleBrandsBlur}
            error={brandsError}
            name="brands"
          />

          <TextAreaField
            label="Почему вы заинтересованы в сотрудничестве с KART PODOLOGY?"
            value={interestValue}
            onChange={handleInterestChange}
            onBlur={handleInterestBlur}
            error={interestError}
            name="interest"
          />

          <TextAreaField
            label="Дополнительные комментарии или предложения:"
            value={commentsValue}
            onChange={handleCommentsChange}
            onBlur={handleCommentsBlur}
            error={commentsError}
            name="comments"
          />
        </FormSection>

        {error && <p className="text-red-500">{error}</p>}

        <Button
          type="submit"
          className="bg-[#49BA4A] text-white px-6 py-2 rounded-md hover:bg-[#3ba83c] transition"
        >
          Сохранить
        </Button>
      </form>
    </section>

  );
}


