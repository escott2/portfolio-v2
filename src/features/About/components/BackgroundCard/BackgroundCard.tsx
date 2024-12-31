import styles from "./BackgroundCard.module.scss";
import { combineClasses } from "../../../../utils";

interface BackgroundCardProps {
  children: React.ReactNode;
}

function BackgroundCard({ children }: BackgroundCardProps) {
  return (
    <div className={styles.backgroundCardContainer}>
      {children}
      {/* <img
        className={combineClasses(
          styles,
          "backgroundLogo",
          "experienceBackgroundLogo"
        )}
        src={mPulseLogo}
        alt="mPulse Logo"
      />
      <div>
        <p className={styles.backgroundLocation}>
          mPulse, Los Angeles, CA (Remote)
        </p>
        <p>Front-End Engineer</p>
        <p>June 2021 - June 2024</p>
      </div> */}
    </div>
  );
}

export default BackgroundCard;
