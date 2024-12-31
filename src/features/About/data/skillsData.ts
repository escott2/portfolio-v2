import { Skill } from "../types";

import htmlIcon from "../../../assets/skillsIcons/htmlIcon.svg";
import cssIcon from "../../../assets/skillsIcons/cssIcon.svg";
import javascriptIcon from "../../../assets/skillsIcons/javascriptIcon.svg";
import typescriptIcon from "../../../assets/skillsIcons/typescriptIcon.svg";

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

export { languageSkillData };
