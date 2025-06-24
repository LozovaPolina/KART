"use client"

import { useState } from "react";

import Field from "../../shared/ui/Field/Field";
import Button from "../../shared/ui/button/Button";
import { useInput } from "../../hooks/useInput";
import { MultiSelect } from "../../shared/ui/MultiSelect/MultiSelect";
import RadioGroup from "../../shared/ui/RadioGroup/RadioGroup";
import TextAreaField from "../../shared/ui/Field/TextAreaField";
import Title from "../../shared/ui/title/Title";
import HintNavigation from "../../shared/hint-navigation/HintNavigation";
import FormSection from "../../shared/ui/FormSection/FormSection";
import { useTranslations } from "next-intl";


export default function DilersFormPage() {
  const t = useTranslations("DilersFormPage");
  const mainActivityArray = [
    t("mainActivity.marketing"),
    t("mainActivity.development"),
    t("mainActivity.design"),
    t("mainActivity.sales"),
  ];

  const promotionChannelsArray = [
    t("promotionChannels.instagram"),
    t("promotionChannels.tiktok"),
    t("promotionChannels.telegram"),
    t("promotionChannels.website"),
    t("promotionChannels.contextAds"),
    t("promotionChannels.offlineEvents"),
    t("promotionChannels.recommendations"),
  ];

  const distributionMethodsArray = [
    t("distributionMethods.offlineSales"),
    t("distributionMethods.marketplaces"),
    t("distributionMethods.socialNetworks"),
    t("distributionMethods.wholesale"),
    t("distributionMethods.events"),
  ];
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
      setError(t("errors.fillAllRequired"));
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
            { label: t("navigation.home"), href: "/" },
            { label: t("navigation.form"), href: "/dilers-form" },
          ]}
        />
      </div>
      <Title color="green" className="text-center">{t("title")}</Title>
      <form
        className="flex flex-col gap-4 max-w-[830px] mx-auto w-full"
        onSubmit={handleSubmit}
      >
        <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.1)]">
          <Title className="mb-4">{t("sections.generalInfo")}</Title>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Field
              label={t("fields.companyName")}
              value={nameCompanyValue}
              onChange={handleNameCompanyChange}
              onBlur={handleNameCompanyBlur}
              error={nameCompanyError}
              name="company"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.address")}
              value={adressValue}
              onChange={handleAdressChange}
              onBlur={handleAdressBlur}
              error={adressError}
              name="adress"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.contactPerson")}
              value={contactNameValue}
              onChange={handleContactNameChange}
              onBlur={handleContactNameBlur}
              error={contactNameError}
              name="contact"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.jobTitle")}
              value={jobTitleValue}
              onChange={jobTitleChange}
              onBlur={jobTitleBlur}
              error={jobTitleError}
              name="jobTitle"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.phone")}
              value={phoneValue}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              error={phoneError}
              name="phone"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.email")}
              value={emailValue}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={emailError}
              name="email"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.website")}
              value={websiteValue}
              onChange={handleWebsiteChange}
              onBlur={handleWebsiteBlur}
              error={websiteError}
              name="website"
              className="w-full md:w-[48%]"
            />
            <Field
              label={t("fields.instagram")}
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
              placeholder={t("fields.addSocialPlaceholder")}
              className="text-sm text-[#4A4A4A] px-3 py-2 rounded outline-none w-full"
            />
          </div>
        </div>

        <FormSection>
          <Title>{t("sections.activityProfile")}</Title>
          <RadioGroup
            label={t("fields.experience")}
            name="experience"
            options={[
              t("options.experience.lessThan1"),
              t("options.experience.from1To3"),
              t("options.experience.from3To5"),
              t("options.experience.moreThan5"),
            ]}
            value={experience}
            onChange={setExperience}
          />
          <MultiSelect
            label={t("fields.mainActivity")}
            options={mainActivityArray}
            selected={mainActivity}
            setSelected={setMainActivity}
          />
          <RadioGroup
            label={t("fields.license")}
            name="license"
            options={[
              t("options.license.yes"),
              t("options.license.no"),
              t("options.license.inProcess"),
            ]}
            value={license}
            onChange={setLicense}
          />
        </FormSection>

        <FormSection>
          <Title>{t("sections.education")}</Title>
          <RadioGroup
            label={t("fields.training")}
            name="training"
            options={[
              t("options.training.yes"),
              t("options.training.no"),
              t("options.training.planning"),
            ]}
            value={training}
            onChange={setTraining}
          />
          <RadioGroup
            label={t("fields.classroom")}
            name="classroom"
            options={[t("options.classroom.yes"), t("options.classroom.no")]}
            value={classroom}
            onChange={setClassroom}
          />
          <RadioGroup
            label={t("fields.seats")}
            name="seats"
            options={[
              t("options.seats.none"),
              t("options.seats.moreThan3"),
              t("options.seats.moreThan10"),
            ]}
            value={seats}
            onChange={setSeats}
          />
          <RadioGroup
            label={t("fields.teachers")}
            name="teachers"
            options={[
              t("options.teachers.yes"),
              t("options.teachers.no"),
              t("options.teachers.readyToTrain"),
            ]}
            value={teachers}
            onChange={setTeachers}
          />
        </FormSection>

        <FormSection>
          <Title>{t("sections.infrastructure")}</Title>
          <RadioGroup
            label={t("fields.physicalPresence")}
            name="physicalPresence"
            options={[t("options.yes"), t("options.no")]}
            value={physicalPresence}
            onChange={setPhysicalPresence}
          />
          <MultiSelect
            label={t("fields.distributionMethods")}
            options={distributionMethodsArray

            }
            selected={distributionMethods}
            setSelected={setDistributionMethods}
          />
          <RadioGroup
            label={t("fields.storageAndDelivery")}
            name="storageAndDelivery"
            options={[t("options.yes"), t("options.no")]}
            value={storageAndDelivery}
            onChange={setStorageAndDelivery}
          />
        </FormSection>

        <FormSection>
          <Title>{t("sections.marketing")}</Title>
          <MultiSelect
            label={t("fields.promotionChannels")}
            options={promotionChannelsArray}
            selected={promotionChannels}
            setSelected={setPromotionChannels}
          />
          <RadioGroup
            label={t("fields.brandAgreement")}
            name="brandAgreement"
            options={[t("options.yes"), t("options.no")]}
            value={brandAgreement}
            onChange={setBrandAgreement}
          />
        </FormSection>

        <FormSection>
          <Title>{t("sections.regionAndScale")}</Title>
          <RadioGroup
            label={t("fields.clientBaseSize")}
            name="clientBaseSize"
            options={[
              t("options.clientBaseSize.upTo50"),
              t("options.clientBaseSize.between50And100"),
              t("options.clientBaseSize.moreThan100"),
              t("options.clientBaseSize.moreThan200"),
            ]}
            value={clientBaseSize}
            onChange={setClientBaseSize}
          />
          <Field
            label={t("fields.region")}
            value={regionValue}
            onChange={handleRegionChange}
            onBlur={handleRegionBlur}
            error={regionError}
            name="region"
            className="w-full"
          />
        </FormSection>

        <FormSection>
          <Title>{t("sections.additionalInfo")}</Title>
          <TextAreaField
            label={t("fields.brandsRepresented")}
            value={brandsValue}
            onChange={handleBrandsChange}
            onBlur={handleBrandsBlur}
            error={brandsError}
            name="brands"
          />
          <TextAreaField
            label={t("fields.cooperationInterest")}
            value={interestValue}
            onChange={handleInterestChange}
            onBlur={handleInterestBlur}
            error={interestError}
            name="interest"
          />
          <TextAreaField
            label={t("fields.additionalComments")}
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
          {t("buttons.save")}
        </Button>
      </form>
    </section>
  );
}


