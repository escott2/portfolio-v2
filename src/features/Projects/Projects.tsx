import styles from "./Projects.module.scss";
import { MainSectionContainer, MainSectionHeading } from "../../components";
import { Project } from "./components/Project";

function Projects() {
  return (
    <MainSectionContainer sectionName="projects">
      <MainSectionHeading sectionName="Projects" />
      <Project />
    </MainSectionContainer>
  );
}

export default Projects;
