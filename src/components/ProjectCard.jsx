const ProjectCard = ({title, subtitle, onClick}) => {
  return (
    <div onClick={onClick} 
    role="button"
    className="clickable"
    >
      <h2 className="text-lg font-medium tracking-normal mb-1 dark:text-darkSecondary">
        {title}
      </h2>
      <p className="p">{subtitle}</p>
    </div>
  );
};

export default ProjectCard;
