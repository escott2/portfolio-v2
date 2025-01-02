import { Link } from "../../../../components";
import styles from "./ProjectThumbnail.module.scss";

interface ProjectThumbnailProps {
  url: string;
  imgSrc: string;
  imgAltText: string;
}

function ProjectThumbnail({ url, imgSrc, imgAltText }: ProjectThumbnailProps) {
  return (
    <Link href={url} customClasses={styles.linkContainer} newWindow={true}>
      <img src={imgSrc} alt={imgAltText} />
    </Link>
  );
}

export default ProjectThumbnail;
