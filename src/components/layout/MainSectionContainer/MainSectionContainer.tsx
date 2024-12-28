import styles from "./MainSectionContainer.module.scss";
import { Element } from "react-scroll";

interface MainSectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
  customClasses?: string;
}

function MainSectionContainer({
  children,
  sectionName,
  customClasses = "",
}: MainSectionContainerProps) {
  return (
    <Element name={sectionName}>
      <section className={`${styles.sectionContainer} ${customClasses}`}>
        <div className={styles.sectionContent}>{children}</div>
      </section>
    </Element>
  );
}

export default MainSectionContainer;
