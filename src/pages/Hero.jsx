import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fadeInUp } from "../utils/motionConfig";
import useIsMobile from "../hooks/useIsMobile";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      {...fadeInUp}
      className="h-full flex flex-col justify-end items-end md:mr-12 pb-20"
    >
      <div className="max-w-[320px] space-y-8 mt-24">
        <div className="p text-end">
          <p>
            {t("hero.sentences.0")}
            <span className="font-bold text-sm">{t("hero.sentences.1")}</span>
            {t("hero.sentences.2")}
            <span className="font-bold text-sm ">React</span>
            {t("hero.sentences.3")}
          </p>
          <p>{t("hero.sentences.4")}</p>
        </div>
        <div className="flex flex-col justify-end gap-4 items-end">
          <Link
            to="/projects"
            className="font-medium tracking-normal uppercase hover:font-semibold  text-accent dark:text-darkAccent"
            aria-label="View work"
          >
            {t("hero.links.portfolio")}
          </Link>

          <Link
            to={t("about.resume-path")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium tracking-normal uppercase hover:font-semibold  text-accent dark:text-darkAccent"
            aria-label="Download resume"
          >
            {t("buttons.download-resume")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
