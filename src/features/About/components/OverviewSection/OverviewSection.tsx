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
        I’m an experienced front-end engineer with Bachelor’s degrees in
        Computer Information Systems and Psychology. I enjoy blending
        human-centered thinking with technical expertise to create intuitive,
        impactful products in collaboration with cross-functional teams. I value
        the entire development process, from ideation to launch, and
        continuously adapt and learn as I take on new challenges with a growth
        mindset.
      </p>
    </section>
  );
}

export default OverviewSection;
