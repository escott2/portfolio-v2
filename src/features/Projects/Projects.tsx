import { MainSectionContainer, MainSectionHeading } from "../../components";
import { ProjectsDisplay } from "./components";

function Projects() {
  return (
    <MainSectionContainer sectionName="projects">
      <MainSectionHeading sectionName="Projects" />
      <ProjectsDisplay />
    </MainSectionContainer>
  );
}

export default Projects;
