import styles from "./BackgroundInfo.module.scss";

interface BackgroundInfoProps {
  location: string;
  title: string;
  timeSpan: string;
}

function BackgroundInfo({ location, title, timeSpan }: BackgroundInfoProps) {
  return (
    <div>
      <p className={styles.backgroundLocation}>{location}</p>
      <p>{title}</p>
      <p>{timeSpan}</p>
    </div>
  );
}

export default BackgroundInfo;
