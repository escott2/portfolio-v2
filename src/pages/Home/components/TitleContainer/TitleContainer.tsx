import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TitleContainer.styles.module.scss";
import { SmileySVG } from "../../../../components";
import { TypeAnimation } from "react-type-animation";

interface MousePosition {
  x: number;
  y: number;
}

function TitleContainer() {
  const cursorContainerRef = useRef(null);
  const titleContainerContent = useRef(null);
  const [isMouseOverTitleContainer, setIsMouseOverTitleContainer] =
    useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [cursorPathOpacity, setCursorPathOpacity] = useState(0);

  const svgPathVariants = {
    mouseOver: {
      opacity: cursorPathOpacity,
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOver = () => {
    setIsMouseOverTitleContainer(true);
  };

  const handleMouseOut = () => {
    setIsMouseOverTitleContainer(false);
  };

  const handleMouseOverTitle = () => {
    setCursorPathOpacity(1);
  };

  const handleMouseOutTitle = () => {
    setCursorPathOpacity(0);
  };

  return (
    <>
      {isMouseOverTitleContainer && (
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cursor}
          style={{
            x: mousePosition.x - 15,
            y: mousePosition.y - 30,
          }}
        >
          <path
            d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z"
            fill="#c8e1ea"
          />
          <motion.path
            variants={svgPathVariants}
            initial={{ opacity: 0 }}
            animate="mouseOver"
            d="M8 2.1875C4.79063 2.1875 2.1875 4.79063 2.1875 8C2.1875 11.2094 4.79063 13.8125 8 13.8125C11.2094 13.8125 13.8125 11.2094 13.8125 8C13.8125 4.79063 11.2094 2.1875 8 2.1875ZM4.5 6.57812C4.50401 6.38186 4.58478 6.19499 4.725 6.05761C4.86522 5.92023 5.0537 5.84328 5.25 5.84328C5.4463 5.84328 5.63478 5.92023 5.775 6.05761C5.91522 6.19499 5.99599 6.38186 6 6.57812C5.99599 6.77439 5.91522 6.96126 5.775 7.09864C5.63478 7.23602 5.4463 7.31297 5.25 7.31297C5.0537 7.31297 4.86522 7.23602 4.725 7.09864C4.58478 6.96126 4.50401 6.77439 4.5 6.57812ZM8 10.8281C6.66406 10.8281 5.56875 9.77656 5.5 8.45938C5.49915 8.44244 5.50176 8.42551 5.50766 8.40962C5.51356 8.39372 5.52263 8.3792 5.53433 8.36692C5.54602 8.35464 5.56009 8.34487 5.57568 8.3382C5.59126 8.33153 5.60805 8.3281 5.625 8.32812H6.37656C6.44219 8.32812 6.49844 8.37813 6.50313 8.44375C6.5625 9.21719 7.21094 9.82812 8 9.82812C8.78906 9.82812 9.43906 9.21719 9.49687 8.44375C9.50156 8.37813 9.55781 8.32812 9.62344 8.32812H10.375C10.392 8.3281 10.4087 8.33153 10.4243 8.3382C10.4399 8.34487 10.454 8.35464 10.4657 8.36692C10.4774 8.3792 10.4864 8.39372 10.4923 8.40962C10.4982 8.42551 10.5008 8.44244 10.5 8.45938C10.4312 9.77656 9.33594 10.8281 8 10.8281ZM10.75 7.32812C10.5537 7.32412 10.3669 7.24334 10.2295 7.10312C10.0921 6.96291 10.0152 6.77443 10.0152 6.57812C10.0152 6.38182 10.0921 6.19334 10.2295 6.05313C10.3669 5.91291 10.5537 5.83213 10.75 5.82812C10.9463 5.83213 11.1331 5.91291 11.2705 6.05313C11.4079 6.19334 11.4848 6.38182 11.4848 6.57812C11.4848 6.77443 11.4079 6.96291 11.2705 7.10312C11.1331 7.24334 10.9463 7.32412 10.75 7.32812Z"
            fill="#c8e1ea"
          />
          <path
            d="M4.5 6.57812C4.5 6.77704 4.57902 6.9678 4.71967 7.10846C4.86032 7.24911 5.05109 7.32812 5.25 7.32812C5.44891 7.32812 5.63968 7.24911 5.78033 7.10846C5.92098 6.9678 6 6.77704 6 6.57812C6 6.37921 5.92098 6.18845 5.78033 6.04779C5.63968 5.90714 5.44891 5.82812 5.25 5.82812C5.05109 5.82812 4.86032 5.90714 4.71967 6.04779C4.57902 6.18845 4.5 6.37921 4.5 6.57812ZM10.375 8.32812H9.62344C9.55781 8.32812 9.50156 8.37813 9.49687 8.44375C9.43906 9.21719 8.78906 9.82812 8 9.82812C7.21094 9.82812 6.5625 9.21719 6.50313 8.44375C6.49844 8.37813 6.44219 8.32812 6.37656 8.32812H5.625C5.60805 8.3281 5.59126 8.33153 5.57568 8.3382C5.56009 8.34487 5.54602 8.35464 5.53433 8.36692C5.52263 8.3792 5.51356 8.39372 5.50766 8.40962C5.50176 8.42551 5.49915 8.44244 5.5 8.45938C5.56875 9.77656 6.66406 10.8281 8 10.8281C9.33594 10.8281 10.4312 9.77656 10.5 8.45938C10.5008 8.44244 10.4982 8.42551 10.4923 8.40962C10.4864 8.39372 10.4774 8.3792 10.4657 8.36692C10.454 8.35464 10.4399 8.34487 10.4243 8.3382C10.4087 8.33153 10.392 8.3281 10.375 8.32812ZM10 6.57812C10 6.77704 10.079 6.9678 10.2197 7.10846C10.3603 7.24911 10.5511 7.32812 10.75 7.32812C10.9489 7.32812 11.1397 7.24911 11.2803 7.10846C11.421 6.9678 11.5 6.77704 11.5 6.57812C11.5 6.37921 11.421 6.18845 11.2803 6.04779C11.1397 5.90714 10.9489 5.82812 10.75 5.82812C10.5511 5.82812 10.3603 5.90714 10.2197 6.04779C10.079 6.18845 10 6.37921 10 6.57812Z"
            fill="#c8e1ea"
          />
        </motion.svg>
      )}
      <div
        className={styles.titleContainer}
        ref={cursorContainerRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <div
          className={styles.titleContainerContent}
          ref={titleContainerContent}
          onMouseOver={handleMouseOverTitle}
          onMouseOut={handleMouseOutTitle}
        >
          <div className={styles.titleContainerHeading}>
            <h2 className={styles.sectionTitle}>
              <TypeAnimation
                sequence={["", 500, "Hello, I'm Emily. Welcome."]}
                wrapper="span"
                speed={70}
                cursor={false}
              />
            </h2>
            <SmileySVG className={styles.smiley} />
          </div>
          <TypeAnimation
            sequence={[
              "",
              2000,
              "I'm an experienced Software Engineer and Health Information Specialist, building expertise in Health Informatics.",
            ]}
            wrapper="span"
            speed={80}
            cursor={false}
            preRenderFirstString={false}
            className={styles.titleContainerInfo}
          />
        </div>
        <div className={styles.titleContainerBottom}></div>
      </div>
    </>
  );
}

export default TitleContainer;
