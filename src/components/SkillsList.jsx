import Skill from "./Skill";

import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiFigma, SiReactrouter } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { PiShareNetwork } from "react-icons/pi";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

const skills = [
  { name: "HTML5", Icon: PiFileHtmlLight },
  { name: "CSS3", Icon: PiFileCssLight },
  { name: "JavaScript (ES6+)", Icon: AiOutlineJavaScript },
  { name: "React", Icon: FaReact },
  { name: "React Router", Icon: SiReactrouter },
  { name: "Redux", Icon: BiLogoRedux },
  { name: "Material-UI (MUI)", Icon: SiMui },
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "Git", Icon: FaGitAlt },
  { name: "Vite", Icon: SiVite },
  { name: "REST APIs", Icon: PiShareNetwork },
  { name: "Figma", Icon: SiFigma },
  { name: "Illustrator", Icon: DiIllustrator },
  { name: "Photoshop", Icon: DiPhotoshop },
];

const SkillsList = () => {

  return (
    <div className="flex items-center flex-wrap gap-3 md:gap-4">
      {skills.map((skill, i) => (
         <Skill key={i} name={skill.name} Icon={skill.Icon} />
      ))}
    </div>
  );
};

export default SkillsList;
