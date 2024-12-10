import { motion } from "motion/react";
import { fadeInUp } from "../utils/motionConfig";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className={`h-full w-full flex flex-col items-end justify-end ${
      isMobile ? "fixed bottom-0 left-0 p-8 pl-20 z-10" : ""
    }`}>
      <motion.div {...fadeInUp}>
        <div className=" p text-end md:mb-20 md:mr-20 md:w-[300px] space-y-4">
          <p>
            {t("hero.sentences.0")}
            <span className="font-bold text-sm">{t("hero.sentences.1")}</span>
            {t("hero.sentences.2")}
            <span className="font-bold text-sm ">React</span>
            {t("hero.sentences.3")}
          </p>
          <p>{t("hero.sentences.4")}</p>
          <div className=" flex items-center justify-end gap-1">
            <p className="tracking-normal">{t("hero.sentences.5")}</p>

            <Link
              to="/portfolio/projects"
              className="font-medium tracking-normal underline hover:text-accent dark:hover:text-darkAccent"
            >
              {t("hero.links.portfolio")}
            </Link>
            <FaArrowRight />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
