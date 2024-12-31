import styles from "./Project.module.scss";
import { Link } from "../../../../components";
import widgetsThumbnail from "../../../../assets/widgets-thumbnail.png";
import githubIcon from "../../../../assets/githubIcon.svg";
import internetIcon from "../../../../assets/internetIcon.svg";

function Project() {
  return (
    <section className={styles.projectContainer}>
      <h3 className={styles.projectTitle}>Widgets</h3>
      <div className={styles.projectPreview}>
        <Link
          href="https://widgets-es.netlify.app/"
          customClasses={styles.linkContainer}
          newWindow={true}
        >
          <img
            src={widgetsThumbnail}
            alt="screenshot of widgets website"
            className={styles.linkImg}
          />
        </Link>
        <div className={styles.projectInfo}>
          <p>
            A collection of widgets designed to enhance productivity. This
            dashboard provides users with quick access to weather and sun
            information, a convenient clock, and a helpful Pomodoro timer to
            optimize focus and efficiency. Experience a simulated workplace
            conversation with me in the 'Water Cooler Chat' widget.
          </p>
          <ul className={styles.projectSkills}>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS Modules</li>
            <li>Sass</li>
            <li>REST API Integration</li>
            <li>React Context API</li>
            <li>Form Validation</li>
            <li>Mobile First Design</li>
            <li>Responsive UI</li>
            <li>CSS Grid</li>
            <li>CSS Flexbox</li>
          </ul>
          <ul className={styles.projectLinks}>
            <li>
              <a
                href="https://github.com/escott2/widgets"
                target="_blank"
                aria-label="GitHub repository"
              >
                <img src={githubIcon} alt="GitHub icon" />
              </a>
            </li>
            <li>
              <a
                href="https://widgets-es.netlify.app/"
                target="_blank"
                aria-label="Live website"
              >
                <img src={internetIcon} alt="Internet icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Project;
