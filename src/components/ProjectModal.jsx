import { motion } from "framer-motion";
import { useRef } from "react";
import useCloseOnClickOrEsc from "../hooks/useCloseOnClickOrEsc";
import CloseButton from "./CloseButton";
import { modalTransition, modalVariants } from "../utils/motionConfig";
import { FaRegEye } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ProjectModal = ({ project, isOpen, onClose, currentLanguage }) => {
  const modalRef = useRef(null); 
  useCloseOnClickOrEsc(modalRef, onClose); 

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex bg-overlay-light backdrop-blur-sm overflow-hidden">
      {/* Animated Modal */}
      <motion.div
        ref={modalRef}
        className="bg-white dark:bg-darkPrimary pl-24 p-8 shadow-lg w-[70vh] h-full flex flex-col"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={modalTransition}
      >
        {/* Close Button */}
        <CloseButton onClick={onClose} />

        {/* Project Content */}
        <div className="mt-16 pr-8 overflow-auto scrollbar-hide">
          <h3 className="h3 mb-4">
            {project.title[currentLanguage]}
          </h3>
          <p className="p py-4">
            {project.description[currentLanguage]}
          </p>

          {/* Links */}
          <div className="flex space-x-4 mb-6">
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
              <p className="text-sm text-accent dark:text-darkAccent">* Code cannot be shared at this stage to maintain client confidentiality.</p>
            )}
            {project.repoLink && (
            <a
              href={project.repoLink}
              className="link flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub/>
              REPO
            </a>
            )}
          </div>

          <h6 className="h6 mb-2">SCOPE</h6>
          <p className="p mb-4">
            {project.scope[currentLanguage]}
          </p>
          <h6 className="h6 mb-2">TECH</h6>
          <p className="p mb-4">
            {project.tech}
          </p>

          {/* Image */}
          {project.image && (
            <img src={project.image} alt={project.name} className="py-4" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
