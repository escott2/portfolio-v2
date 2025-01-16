import styles from "./ProjectLinks.module.scss";
import { GitHubSVG, InternetSVG } from "../../../../components/svg";

interface ProjectLinks {
  githubURL: string;
  projectURL: string;
}

function ProjectLinks({ githubURL, projectURL }: ProjectLinks) {
  return (
    <ul className={styles.projectLinks}>
      <li>
        <a href={githubURL} target="_blank" aria-label="GitHub repository">
          <GitHubSVG className={styles.icon} />
        </a>
      </li>
      <li>
        <a href={projectURL} target="_blank" aria-label="Live website">
          <InternetSVG className={styles.icon} />
        </a>
      </li>
    </ul>
  );
}

export default ProjectLinks;
