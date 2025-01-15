import styles from "./ContactLinkSection.module.scss";
import linkedInIcon from "../../../../assets/linkedin-icon.svg";
import { GitHubSVG } from "../../../../components/svg";

function ContactLinkSection() {
  return (
    <section className={styles.contactSubsection}>
      <ul className={styles.contactLinks}>
        <li>
          <h3>Let's connect on LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/emily-e-scott/"
            target="_blank"
            aria-label="LinkedIn profile"
          >
            <img src={linkedInIcon} alt="LinkedIn logo" />
          </a>
        </li>
        <li>
          <h3>Follow my work on GitHub</h3>
          <a
            href="https://github.com/escott2"
            target="_blank"
            aria-label="GitHub profile"
          >
            <GitHubSVG className={styles.gitHubIcon} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default ContactLinkSection;
