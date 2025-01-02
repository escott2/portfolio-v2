import commonStyles from "../../styles/commonStyles.module.scss";
import styles from "./ExperienceSection.module.scss";
import { combineClasses } from "../../../../utils";
import {
  BackgroundCard,
  BackgroundImage,
  BackgroundInfo,
} from "../BackgroundCard";
import mPulseLogo from "../../../../assets/mPulse-logo.png";

function ExperienceSection() {
  return (
    <section
      className={combineClasses(
        commonStyles,
        "backgroundContainer",
        "aboutSubsection"
      )}
    >
      <h3>Experience</h3>
      <BackgroundCard>
        <BackgroundImage
          imgSrc={mPulseLogo}
          imgAltText="mPulse Logo"
          customClasses={styles.experienceBackgroundLogo}
        />
        <BackgroundInfo
          location="mPulse, Los Angeles, CA (Remote)"
          title="Front-End Engineer"
          timeSpan="June 2021 - June 2024"
        />
      </BackgroundCard>
    </section>
  );
}

export default ExperienceSection;
