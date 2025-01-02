import { Project } from "../types";
import widgetsThumbnail from "../../../assets/widgets-thumbnail.png";

const projectData: Project[] = [
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
      "CSS Grid",
      "CSS Flexbox",
    ],
    githubURL: "https://github.com/escott2/widgets",
    projectURL: "https://widgets-es.netlify.app/",
  },
];

export { projectData };
