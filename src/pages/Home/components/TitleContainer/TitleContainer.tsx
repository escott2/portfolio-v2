import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TitleContainer.styles.module.scss";
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOver = () => {
    setIsMouseOverTitleContainer(true);
  };

  const handleMouseOut = () => {
    setIsMouseOverTitleContainer(false);
  };

  return (
    <>
      {isMouseOverTitleContainer && (
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="#db6c1e"
          className={styles.cursor}
          style={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
        >
          <path
            d="M10 17.4C10 17.96 10 18.24 10.109 18.454C10.2049 18.6422 10.3578 18.7951 10.546 18.891C10.76 19 11.04 19 11.6 19H13.8C14.36 19 14.64 19 14.854 18.891C15.0422 18.7951 15.1951 18.6422 15.291 18.454C15.4 18.24 15.4 17.96 15.4 17.4V15.85C15.4 15.6113 15.4948 15.3824 15.6636 15.2136C15.8324 15.0448 16.0613 14.95 16.3 14.95C17.0161 14.95 17.7028 14.6655 18.2092 14.1592C18.7155 13.6528 19 12.9661 19 12.25C19 11.5339 18.7155 10.8472 18.2092 10.3408C17.7028 9.83446 17.0161 9.55 16.3 9.55C16.0613 9.55 15.8324 9.45518 15.6636 9.2864C15.4948 9.11761 15.4 8.88869 15.4 8.65V7.1C15.4 6.54 15.4 6.26 15.291 6.046C15.1951 5.85785 15.0422 5.70487 14.854 5.609C14.64 5.5 14.36 5.5 13.8 5.5L11.6 5.5C11.04 5.5 10.76 5.5 10.546 5.391C10.3578 5.29513 10.2049 5.14215 10.109 4.954C10 4.74 10 4.46 10 3.9V3.7C10 3.34543 9.93016 2.99433 9.79447 2.66675C9.65879 2.33918 9.45991 2.04153 9.20919 1.79081C8.95847 1.54009 8.66082 1.34121 8.33325 1.20553C8.00567 1.06984 7.65457 1 7.3 1C6.94543 1 6.59433 1.06984 6.26676 1.20553C5.93918 1.34121 5.64153 1.54009 5.39081 1.79081C5.14009 2.04153 4.94121 2.33918 4.80552 2.66675C4.66984 2.99433 4.6 3.34543 4.6 3.7V3.9C4.6 4.46 4.6 4.74 4.491 4.954C4.39513 5.14215 4.24215 5.29513 4.054 5.391C3.84 5.5 3.56 5.5 3 5.5H2.6C2.04 5.5 1.76 5.5 1.546 5.609C1.35785 5.70487 1.20487 5.85785 1.109 6.046C0.999999 6.26 1 6.54 1 7.1L1 17.4C1 17.96 0.999999 18.24 1.109 18.454C1.20487 18.6422 1.35785 18.7951 1.546 18.891C1.76 19 2.04 19 2.6 19H3C3.56 19 3.84 19 4.054 18.891C4.24215 18.7951 4.39513 18.6422 4.491 18.454C4.6 18.24 4.6 17.96 4.6 17.4V17.2C4.6 16.4839 4.88446 15.7972 5.39081 15.2908C5.89716 14.7845 6.58392 14.5 7.3 14.5C8.01608 14.5 8.70284 14.7845 9.20919 15.2908C9.71554 15.7972 10 16.4839 10 17.2V17.4Z"
            stroke="#c8e1ea"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
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
        <div className={styles.titleContainerTop}></div>

        <div
          className={styles.titleContainerContent}
          ref={titleContainerContent}
        >
          <h2 className={styles.sectionTitle}>
            <TypeAnimation
              sequence={["", 1000, "Hello, I'm Emily Scott."]}
              wrapper="span"
              speed={70}
              cursor={false}
            />
          </h2>
          <TypeAnimation
            sequence={["", 2300, "I'm an experienced Software Engineer,"]}
            wrapper="span"
            speed={70}
            cursor={false}
            preRenderFirstString={false}
            className={styles.titleContainerInfo}
          />
          <TypeAnimation
            sequence={["", 3500, "building expertise in Health Informatics."]}
            wrapper="span"
            speed={70}
            cursor={false}
            preRenderFirstString={false}
            className={styles.titleContainerInfo}
          />
          <div className={styles.skillsContainer}>
            <TypeAnimation
              sequence={["", 5300, "I'm skilled in"]}
              wrapper="span"
              speed={70}
              cursor={false}
              preRenderFirstString={false}
              className={styles.titleContainerInfo}
            />
            <TypeAnimation
              sequence={[
                "",
                5700,
                "JavaScript.",
                500,
                "TypeScript.",
                500,
                "React.",
                500,
                "Node.js.",
              ]}
              wrapper="span"
              speed={40}
              cursor={false}
              className={`${styles.titleContainerInfo} ${styles.titleContainerSkills}`}
            />
          </div>
        </div>
        <div className={styles.titleContainerBottom}></div>
      </div>
    </>
  );
}

export default TitleContainer;
