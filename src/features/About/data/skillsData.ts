import { Skill } from "../types";

import htmlIcon from "../../../assets/skillsIcons/htmlIcon.svg";
import cssIcon from "../../../assets/skillsIcons/cssIcon.svg";
import javascriptIcon from "../../../assets/skillsIcons/javascriptIcon.svg";
import typescriptIcon from "../../../assets/skillsIcons/typescriptIcon.svg";
import reactIcon from "../../../assets/skillsIcons/reactIcon.svg";
import reduxIcon from "../../../assets/skillsIcons/reduxIcon.svg";
import sassIcon from "../../../assets/skillsIcons/sassIcon.svg";
import cssModulesIcon from "../../../assets/skillsIcons/cssModulesIcon.svg";
import styledComponentsIcon from "../../../assets/skillsIcons/styledComponentsIcon.svg";
import framerMotionIcon from "../../../assets/skillsIcons/framerMotionIcon.svg";
import githubIcon from "../../../assets/skillsIcons/githubIcon.svg";
import jiraIcon from "../../../assets/skillsIcons/jiraIcon.svg";

const languageSkillData: Skill[] = [
  {
    language: "HTML",
    iconSrc: htmlIcon,
  },
  {
    language: "CSS",
    iconSrc: cssIcon,
  },
  {
    language: "JavaScript",
    iconSrc: javascriptIcon,
  },
  {
    language: "TypeScript",
    iconSrc: typescriptIcon,
  },
];

const technologiesSkillData: Skill[] = [
  {
    language: "React",
    iconSrc: reactIcon,
  },
  {
    language: "Redux",
    iconSrc: reduxIcon,
  },
  {
    language: "Sass",
    iconSrc: sassIcon,
  },
  {
    language: "CSS Modules",
    iconSrc: cssModulesIcon,
  },
  {
    language: "Styled Components",
    iconSrc: styledComponentsIcon,
  },
  {
    language: "Framer Motion",
    iconSrc: framerMotionIcon,
  },
  {
    language: "GitHub",
    iconSrc: githubIcon,
  },
  {
    language: "Jira",
    iconSrc: jiraIcon,
  },
];

export { languageSkillData, technologiesSkillData };
