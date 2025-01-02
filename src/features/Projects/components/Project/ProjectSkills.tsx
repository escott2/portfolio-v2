import styles from "./ProjectSkills.module.scss";

interface ProjectSkillsProps {
  skills: string[];
}

function ProjectSkills({ skills }: ProjectSkillsProps) {
  return (
    <ul className={styles.projectSkills}>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export default ProjectSkills;
