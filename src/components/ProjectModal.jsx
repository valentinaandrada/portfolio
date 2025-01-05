import { motion } from "framer-motion";
import { useRef } from "react";
import useCloseOnClickOrEsc from "../hooks/useCloseOnClickOrEsc";
import CloseButton from "./CloseButton";
import { modalTransition, modalVariants } from "../utils/motionConfig";
import { FaRegEye } from "react-icons/fa";
import { FiGithub, FiTerminal } from "react-icons/fi";
import useScrollDetection from "../hooks/useScrollDetection";
import ScrollIndicator from "./ScrollIndicator";
import useIsMobile from "../hooks/useIsMobile";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ project, isOpen, onClose, currentLanguage }) => {
  const isMobile = useIsMobile();
  const modalRef = useRef(null);
  const scrollableRef = useRef(null);
  const { i18n, t } = useTranslation();
  const { isAtTop, isAtBottom } = useScrollDetection(scrollableRef, 20);
  useCloseOnClickOrEsc(modalRef, onClose);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex bg-overlay-light backdrop-blur-sm ">
      <motion.div
        ref={modalRef}
        className="bg-white dark:bg-darkPrimary pl-16 md:pl-24 p-8 shadow-lg md:w-[50vw] h-full flex flex-col overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={modalTransition}
      >
        <CloseButton onClick={onClose} />
        {/* Project Content */}
        <h3 className="h3 mt-16 my-8">{project.title[currentLanguage]}</h3>
        <div
          ref={scrollableRef}
          className="flex-1 pr-8 mb-4 overflow-auto scrollbar-hide"
        >
        <p className="p py-4">{project.project[currentLanguage].description}</p>
          <img src={project.images[0]} alt={project.name} />

          {/* Links */}
          <div className="flex space-x-4 my-6">
            {project.demoLink ? (
              <a
                href={project.demoLink}
                className="link flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRegEye />
                DEMO
              </a>
            ) : (
              <p className="text-sm text-accent dark:text-darkAccent">
                * {t("projects.wip-project-message")}
              </p>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                className="link flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
                REPO
              </a>
            )}
          </div>

          {/* Overview */}
          <h6 className="h6 mb-2  text-accent dark:text-darkAccent">GOAL</h6>
          <p className="p mb-4">
            {project.project[currentLanguage].overview.goal}
          </p>
          <h6 className="h6 mb-2  text-accent dark:text-darkAccent">SCOPE</h6>
          <p className="p mb-4">
            {project.project[currentLanguage].overview.scope}
          </p>

          {/* Technical Details */}

          <h6 className="h6 mb-4 text-accent dark:text-darkAccent">TECH</h6>
          <ul className=" p mb-4 ">
            {project.project[currentLanguage].tech.map((tech, i) => (
              <li key={i}>
                <div className="flex items-center gap-2 ">
                  <FiTerminal size={16}/>
                  <p className="text-secondary dark:text-primary">{tech}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Features */}

          <h6 className="h6 mb-4 text-accent dark:text-darkAccent">FEATURES</h6>
          <ul className=" p mb-4">
            {project.project[currentLanguage].features.map((feature, i) => (
              <li key={i}>
                <div className="flex items-center gap-2 ">
                  <svg
                    width="16px"
                    height="16px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <p className="text-secondary">{feature.title}</p>
                </div>
                <p className="mb-2">{feature.desc}</p>
              </li>
            ))}
          </ul>

          <img src={project.images[1]} alt={project.name} />

        </div>
          { !isMobile && 
          
        <ScrollIndicator isAtTop={isAtTop} isAtBottom={isAtBottom} />
          }
      </motion.div>
    </div>
  );
};

export default ProjectModal;
