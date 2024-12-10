import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    if (savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);
  
  return (
    <div className={`text-sm font-light tracking-normal`}>
      <span
        className={`cursor-pointer ${
          currentLanguage === "en" ? "font-bold" : "text-secondary dark:text-darkSecondary"
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </span>
      <span className="mx-1">/</span>
      <span
        className={`cursor-pointer hover:font-medium ${
          currentLanguage === "es" ? "font-bold" : "font-light"
        }`}
        onClick={() => handleLanguageChange("es")}
      >
        ES
      </span>
    </div>
  );
};

export default LanguageSwitcher;
