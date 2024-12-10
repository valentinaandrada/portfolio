import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Logo = () => {

  const {t} = useTranslation();

  return (
    <div className="text-end">
      <Link to="/" className="block">
        {/* Name */}
        <h1 className="sm:text-2xl font-light tracking-wide dark:text-darkSecondary">
          <span className="font-medium tracking-wide">VALENTINA</span> ANDRADA
        </h1>
        {/* Subtitle */}
        <p className="text-sm sm:text-lg font-light tracking-wide text-neutral-500">
          {t('logo.subtitle')}
        </p>
      </Link>
    </div>
  );
};

export default Logo;
