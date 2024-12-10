import { motion } from "motion/react";
import { fadeInUp } from "../utils/motionConfig";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full flex flex-col items-end justify-end">
      <motion.div {...fadeInUp}>
        <div className="p text-end md:mb-20 mr-10 md:mr-20 w-[300px] space-y-4">
          <p>
            {t("hero.sentences.0")}
            <span className="font-bold text-sm">{t("hero.sentences.1")}</span>
            {t("hero.sentences.2")}
            <span className="font-bold text-sm ">React</span>
            {t("hero.sentences.3")}
          </p>
          <p>{t("hero.sentences.4")}</p>
          <div className=" flex items-center justify-end gap-1">
            <p className="tracking-normal">
              {t("hero.sentences.5")}</p>
              
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
