import {
  Project,
  ProjectThumbnail,
  ProjectDescription,
  ProjectSkills,
  ProjectLinks,
} from "../Project";
import styles from "./ProjectsDisplay.module.scss";
import { projectData } from "../../data";

function ProjectsDisplay() {
  return (
    <>
      {projectData.map((project) => (
        <Project key={project.title}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.projectPreview}>
            <ProjectThumbnail
              url={project.thumbnailURL}
              imgSrc={project.thumbnailImgSrc}
              imgAltText={project.thumbnailImgAltText}
            />
            <div className={styles.projectInfo}>
              <ProjectDescription description={project.description} />
              <ProjectSkills skills={project.skills} />
              <ProjectLinks
                githubURL={project.githubURL}
                projectURL={project.projectURL}
              />
            </div>
          </div>
        </Project>
      ))}
    </>
  );
}

export default ProjectsDisplay;
