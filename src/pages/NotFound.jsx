import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center pt-20 gap-4 min-h-screen bg-primary dark:bg-darkPrimary">
      <h1 className="text-6xl font-semibold text-accent dark:text-darkAccent ">404</h1>
      <p className="tracking-tight">{t("not-found.text")}</p>
      <Link to="/" className="font-medium hover:text-accent hover:dark:text-darkAccent">
        {t("not-found.link")}
      </Link>
    </div>
  );
};

export default NotFound;
