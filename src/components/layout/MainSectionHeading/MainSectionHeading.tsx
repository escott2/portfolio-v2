import styles from "./MainSectionHeading.module.scss";

interface MainSectionHeadingProps {
  sectionName: string;
}

function MainSectionHeading({ sectionName }: MainSectionHeadingProps) {
  return (
    <div className={styles.mainSectionTitleContianer}>
      <h2 className={styles.sectionTitle}>{sectionName}</h2>
    </div>
  );
}

export default MainSectionHeading;
