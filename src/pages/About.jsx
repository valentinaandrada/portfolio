import { motion } from "motion/react";
import { fadeInUp } from "../utils/motionConfig";
import CertificationCard from "../components/CertficationCard";
import SkillsList from "../components/SkillsList";
import photo from "../assets/VA-photo.jpeg";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    year: "2022 - 2023",
    title: {
      en: "FRONT-END WEB DEVELOPMENT COURSE",
      es: "CURSO DE DESARROLLO WEB FRONT-END"
    },
    institution: {
      en: "CoderHouse",
      es: "CoderHouse"
    }
  },
  {
    year: "2021 - 2022",
    title: {
      en: "FULL STACK WEB DEVELOPMENT",
      es: "DESARROLLO WEB FULL STACK"
    },
    institution: {
      en: "Universidad de Alcalá - Samsung Developers Scholarship",
      es: "Universidad de Alcalá - Beca de Samsung Developers"
    }
  },
  {
    year: "March 2021",
    title: {
      en: "SANTANDER TECH Prework",
      es: "Prework de SANTANDER TECH"
    },
    institution: {
      en: "Ironhack",
      es: "Ironhack"
    }
  },
  {
    year: "2013 - 2017",
    title: {
      en: "ARCHITECTURE",
      es: "ARQUITECTURA"
    },
    institution: {
      en: "Universidad Católica de Córdoba - Argentina",
      es: "Universidad Católica de Córdoba - Argentina"
    }
  }
];


const About = () => {

  const {i18n, t} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <motion.div {...fadeInUp}>
      <section className="lg:max-h-screen lg:flex overflow-hidden ">
        <div className="flex-1 flex-col justify-center md:mt-[180px] pr-8 md:pr-16 md:mb-16 overflow-auto scrollbar-hide">
          {/* About */}
          <h2 className=" h2 mb-8 md:mb-12">{t('headings.about-me')}</h2>
          <div className="flex flex-col gap-4">
            <p className="p">
              {t('about.paragraphs.0')}
            </p>
            <p className="p">
            {t('about.paragraphs.1')}
            </p>
            <p className="p">
            {t('about.paragraphs.2')}
            </p>
          </div>

          {/* Stack */}
          <h2 className=" h2 my-8 md:my-12">{t('headings.stack')}</h2>
          <SkillsList />

          {/* Certifications */}
          <h2 className=" h2 my-8 md:my-12">{t('headings.certifications')}</h2>
          {certifications.map((cert, i) => (
            <CertificationCard key={i} {...cert} currentLanguage={currentLanguage}/>
          ))}
        </div>

        {/* Image Section */}
        <div className=" md:flex justify-end my-10 md:my-20">
          <img
            src={photo}
            alt="Valentina Andrada"
            className="w-[280px] h-[430px] object-cover shadow-lg"
          />
          {/* Resume Download Link */}
          <a
            href={t('about.resume-path')}
            target="_blank" 
  rel="noopener noreferrer"
            className="lg:absolute right-60 top-8 text-accent dark:text-darkAccent -rotate-90 transform origin-right text-sm md:tracking-wide hover:font-medium"
          >
            {t('buttons.download-resume')}
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
