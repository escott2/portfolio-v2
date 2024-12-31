import styles from "./BackgroundImage.module.scss";

interface BackgroundImageProps {
  imgSrc: string;
  imgAltText: string;
  customClasses?: string;
}

function BackgroundImage({
  imgSrc,
  imgAltText,
  customClasses = "",
}: BackgroundImageProps) {
  return (
    <img
      className={`${styles.backgroundLogo} ${customClasses}`}
      src={imgSrc}
      alt={imgAltText}
    />
  );
}

export default BackgroundImage;
