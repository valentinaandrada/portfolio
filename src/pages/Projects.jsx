import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/motionConfig";
import projectsData from "../data/projects.json";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import useIsMobile from "../hooks/useIsMobile";
import ScrollIndicator from "../components/ScrollIndicator";
import useScrollDetection from "../hooks/useScrollDetection";

const Projects = () => {
  const scrollableRef = useRef(null)
  const isMobile = useIsMobile()
  const { isAtTop, isAtBottom } = useScrollDetection(scrollableRef, 20);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const completedProjects = projectsData.filter(
    (project) => project.status === "completed"
  );
  const workingOnProjects = projectsData.filter(
    (project) => project.status === "working-on"
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  useBodyScrollLock(isModalOpen);

  return (
    <motion.div {...fadeInUp}>
      <section className="lg:max-h-screen lg:flex overflow-hidden">
        <div ref={scrollableRef} className="flex-1 flex-col justify-center md:mt-[180px] pr-8 md:pr-16 mb-16 overflow-auto scrollbar-hide">
          {/* List of projects */}
          <h2 className="h2 mb-8">{t("headings.projects")}</h2>
          <div className="space-y-8">
            {completedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title[currentLanguage]}
                subtitle={project.subtitle[currentLanguage]}
                onClick={() => openModal(project)}
              />
            ))}
            <div>

            <h2 className="h2 pb-2 ">{t("headings.wip-projects")}</h2>
            <p className="p md:max-w-[50%]">! {t("projects.wip-message")}</p>
            </div>

            {workingOnProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title[currentLanguage]}
                subtitle={project.subtitle[currentLanguage]}
                onClick={() => openModal(project)}
              />
            ))}
          </div>

          { !isMobile && 
          <div className="absolute bottom-10">
            <ScrollIndicator isAtTop={isAtTop} isAtBottom={isAtBottom} />
          </div>
          }
     

          {/* Project Modal */}
          {isModalOpen && (
            <ProjectModal
              project={selectedProject}
              isOpen={isModalOpen}
              onClose={closeModal}
              currentLanguage={currentLanguage}
            />
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
