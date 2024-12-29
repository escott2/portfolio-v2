import styles from "./Project.module.scss";
import { Link } from "../../../../components";
import widgetsThumbnail from "../../../../assets/widgets-thumbnail.png";

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
          <span className={styles.linkText}>
            https://widgets-es.netlify.app/
          </span>
        </Link>
        <div className={styles.projectInfo}>
          <p>
            A collection of widgets designed to enhance productivity. This
            dashboard provides users with quick access to weather and sun
            information, a convenient clock, and a helpful Pomodoro timer to
            optimize focus and efficiency. Experience a simulated workplace
            conversation with me in the 'Water Cooler Chat' widget.
          </p>
          <div>
            <ul className={styles.projectStack}>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
