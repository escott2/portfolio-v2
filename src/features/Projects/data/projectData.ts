import { Project } from "../types";
import widgetsThumbnail from "../../../assets/widgets-thumbnail.png";
import portfolioThumbnail from "../../../assets/portfolio-thumbnail.png";
import dreamPhaseThumbnail from "../../../assets/dream-phase-thumbnail.png";

const projectData: Project[] = [
  {
    title: "Portfolio",
    thumbnailURL: "#",
    thumbnailImgSrc: portfolioThumbnail,
    thumbnailImgAltText: "screenshot of portfolio website",
    description:
      "This portfolio leverages React, TypeScript, and CSS Modules, with dynamic animations implemented using Framer Motion. It showcases my front-end development skills, while providing a platform for professional networking.",
    skills: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Framer Motion",
      "Sass",
      "Form Validation",
      "Mobile First Design",
      "Responsive UI",
      "CSS Flexbox",
    ],
    githubURL: "https://github.com/escott2/portfolio-v2",
    projectURL: "#",
  },
  {
    title: "Dream Phase",
    thumbnailURL: "https://escott2.github.io/dream-phase/",
    thumbnailImgSrc: dreamPhaseThumbnail,
    thumbnailImgAltText: "screenshot of dream phase website",
    description:
      "An interactive project showcasing dynamic functionality and data storage built entirely with foundational technologies—no third-party libraries. Explore a user-focused experience that highlights core web development principles through seamless, responsive interactions.",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "CSS Flexbox",
      "Local Storage",
      "Mobile First Design",
      "Responsive UI",
    ],
    githubURL: "https://github.com/escott2/dream-phase",
    projectURL: "https://escott2.github.io/dream-phase/",
  },
  {
    title: "Widgets",
    thumbnailURL: "https://widgets-es.netlify.app/",
    thumbnailImgSrc: widgetsThumbnail,
    thumbnailImgAltText: "screenshot of widgets website",
    description:
      "A collection of widgets designed to enhance productivity. This dashboard provides users with quick access to weather and sun information, a convenient clock, and a helpful Pomodoro timer to optimize focus and efficiency. Experience a simulated workplace conversation with me in the 'Water Cooler Chat' widget.",
    skills: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Sass",
      "REST API Integration",
      "React Context API",
      "Form Validation",
      "Mobile First Design",
      "Responsive UI",
      "CSS Flexbox",
    ],
    githubURL: "https://github.com/escott2/widgets",
    projectURL: "https://widgets-es.netlify.app/",
  },
];

export { projectData };
