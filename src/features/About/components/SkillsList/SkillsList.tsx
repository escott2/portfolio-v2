import { motion } from "framer-motion";
import styles from "./SkillsList.module.scss";
import { Skill } from "../../types";
import { useContext } from "react";
import { ThemeContext } from "../../../../store";

interface SkillsListProps {
  skillsData: Skill[];
  customClasses?: string;
}

function SkillsList({ skillsData, customClasses = "" }: SkillsListProps) {
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const { isDarkMode } = useContext(ThemeContext);

  const itemVariants = {
    hidden: { opacity: 0, rotate: -45, scale: 0.25, y: -10, x: -20 },
    show: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        default: { type: "tween" },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <motion.ul
      className={`${styles.skillsContainer} ${customClasses}`}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skillsData.map((skill) => (
        <motion.li
          key={skill.language}
          variants={itemVariants}
          className={`${isDarkMode && styles.moonBackground}`}
        >
          <img src={skill.iconSrc} alt={`${skill.language} Icon`} />
          {skill.language}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SkillsList;
