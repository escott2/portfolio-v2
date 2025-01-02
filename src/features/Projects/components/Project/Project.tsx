import styles from "./Project.module.scss";

interface ProjectProps {
  children: React.ReactNode;
}

function Project({ children }: ProjectProps) {
  return <section className={styles.projectContainer}>{children}</section>;
}

export default Project;
