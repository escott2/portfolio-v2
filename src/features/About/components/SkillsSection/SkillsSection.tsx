import commonStyles from "../../styles/commonStyles.module.scss";
import { SkillsList } from "../";
import { languageSkillData, technologiesSkillData } from "../../data";

function SkillsSection() {
  return (
    <section className={commonStyles.aboutSubsection}>
      <h3>Skills</h3>
      <h4>Programming Languages</h4>
      <SkillsList skillsData={languageSkillData} />
      <h4>Tools and Technologies</h4>
      <SkillsList skillsData={technologiesSkillData} />
    </section>
  );
}

export default SkillsSection;
