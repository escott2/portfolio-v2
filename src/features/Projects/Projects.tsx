import styles from "./Projects.module.scss";
import { MainSectionContainer, MainSectionHeading } from "../../components";

function Projects() {
  return (
    <MainSectionContainer sectionName="projects">
      <MainSectionHeading sectionName="Projects" />
      <section className={styles.projectSection}>
        <h3 className={styles.projectTitle}>Widgets</h3>
      </section>
      <section className={styles.projectSection}></section>
    </MainSectionContainer>
  );
}

export default Projects;
