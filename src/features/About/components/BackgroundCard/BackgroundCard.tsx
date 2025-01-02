import styles from "./BackgroundCard.module.scss";

interface BackgroundCardProps {
  children: React.ReactNode;
}

function BackgroundCard({ children }: BackgroundCardProps) {
  return <div className={styles.backgroundCardContainer}>{children}</div>;
}

export default BackgroundCard;
