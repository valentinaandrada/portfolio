import "./Projects.css";
import dbProjects from "../../db/dbProjects";

const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <div className="line"></div>
        <h1 className="title">projects</h1>

        {dbProjects.map((item, i) => (
          <div key={i} className="project">
            <p className="project-num">{item.num}</p>

            <h3 className="project-title">{item.title}</h3>
            <p>{item.description}</p>
            <div>
              <h4 className="project-subtitle">scope</h4>
              <p>{item.scope}</p>
            </div>
            <div>
              <h4 className="project-subtitle">tech</h4>
              <p class>{item.tech}</p>
            </div>
            <img src={item.img} alt="" className="project-img" />
            <a
              href={item.url}
              className="rounded-box project-link"
              target="blank"
            >
              See demo
            </a>
            <a
              href={item.github}
              className="rounded-box project-link"
              target="blank"
            >
              Github
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
