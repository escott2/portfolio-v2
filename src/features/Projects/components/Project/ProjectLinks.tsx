import styles from "./ProjectLinks.module.scss";
import githubIcon from "../../../../assets/githubIcon.svg";
import internetIcon from "../../../../assets/internetIcon.svg";

interface ProjectLinks {
  githubURL: string;
  projectURL: string;
}

function ProjectLinks({ githubURL, projectURL }: ProjectLinks) {
  return (
    <ul className={styles.projectLinks}>
      <li>
        <a href={githubURL} target="_blank" aria-label="GitHub repository">
          <img src={githubIcon} alt="GitHub icon" />
        </a>
      </li>
      <li>
        <a href={projectURL} target="_blank" aria-label="Live website">
          <img src={internetIcon} alt="Internet icon" />
        </a>
      </li>
    </ul>
  );
}

export default ProjectLinks;
