import styles from "./About.module.scss";
import { MainSectionContainer, MainSectionHeading } from "../../components";
import {
  OverviewSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
} from "./components";

function About() {
  return (
    <MainSectionContainer sectionName="about">
      <MainSectionHeading sectionName="About" />
      <div className={styles.aboutInfo}>
        <OverviewSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </MainSectionContainer>
  );
}

export default About;
