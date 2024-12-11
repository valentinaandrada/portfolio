import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const Logo = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className="text-end">
      { isMobile ? (
      <Link to="/" className="block">
        <h1 className="text-xl font-light tracking-wide dark:text-darkSecondary">
          <span className="font-medium tracking-wide">V</span>ANDRADA
        </h1>
        <p className="text-base font-light tracking-normal text-neutral-500">
          {t("logo.subtitle")}
        </p>
      </Link>
      ) : (
        <Link to="/" className="block">
        <h1 className="text-2xl font-light tracking-wide dark:text-darkSecondary">
          <span className="font-medium tracking-wide">VALENTINA</span> ANDRADA
        </h1>
        <p className="text-lg font-light tracking-wide text-neutral-500">
          {t("logo.subtitle")}
        </p>
      </Link>

      )
       }
    </div>
  );
};

export default Logo;
