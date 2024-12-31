import commonStyles from "../../styles/commonStyles.module.scss";
import styles from "./OverviewSection.module.scss";
import overviewImg from "../../../../assets/desk.jpeg";

function OverviewSection() {
  return (
    <section
      className={`${styles.overviewSection} ${commonStyles.aboutSubsection}`}
    >
      <img
        src={overviewImg}
        alt="Desk with laptop, monitor, and keyboard."
        className={styles.overviewImg}
      />
      <p className={styles.overviewText}>
        I’m a front-end engineer with three years of experience building and
        maintaining features for a large-scale web application at mPulse. I’m a
        people-centric software developer. I value and respect my teammates as
        we work together to create great user experiences. I embrace challenges
        with a growth mindset, eager to step outside my comfort zone to find
        innovative solutions to complex problems.
      </p>
    </section>
  );
}

export default OverviewSection;
