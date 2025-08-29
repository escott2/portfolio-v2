import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TitleContainer.styles.module.scss";
import { TypeAnimation } from "react-type-animation";
import profileMaskImage from "../../../../assets/profile-picture.png";

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
        <motion.div
          className={styles.cursor}
          style={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.cursorInternetSVG}
          >
            <path
              d="M6.35 15.35L4.25 13.2C5.28333 12.1667 6.46667 11.375 7.8 10.825C9.13333 10.275 10.5333 10 12 10C13.4667 10 14.871 10.2793 16.213 10.838C17.555 11.3967 18.734 12.2007 19.75 13.25L17.65 15.35C16.9 14.6 16.0373 14.021 15.062 13.613C14.0867 13.205 13.066 13.0007 12 13C10.934 12.9993 9.91333 13.2037 8.938 13.613C7.96267 14.0223 7.1 14.6013 6.35 15.35ZM2.1 11.1L0 9C1.58333 7.38333 3.41267 6.14567 5.488 5.287C7.56333 4.42833 9.734 3.99933 12 4C14.266 4.00067 16.437 4.43 18.513 5.288C20.589 6.146 22.418 7.38333 24 9L21.9 11.1C20.5833 9.78333 19.0707 8.771 17.362 8.063C15.6533 7.355 13.866 7.00067 12 7C10.134 6.99933 8.34633 7.35367 6.637 8.063C4.92767 8.77233 3.41533 9.78467 2.1 11.1ZM12 21L8.475 17.45C8.94167 16.9833 9.47933 16.625 10.088 16.375C10.6967 16.125 11.334 16 12 16C12.666 16 13.3037 16.125 13.913 16.375C14.5223 16.625 15.0597 16.9833 15.525 17.45L12 21Z"
              fill="#9A5741"
            />
          </motion.svg>
        </motion.div>
      )}
      <div
        className={styles.titleContainer}
        ref={cursorContainerRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.introContainer}>
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
              sequence={[
                "",
                2300,
                "I build beautiful, user-friendly websites.",
              ]}
              wrapper="span"
              speed={70}
              cursor={false}
              preRenderFirstString={false}
              className={styles.titleContainerInfo}
            />
            <TypeAnimation
              sequence={["", 4000, "<I'm a software engineer />"]}
              wrapper="span"
              speed={70}
              cursor={false}
              preRenderFirstString={false}
              className={`${styles.titleContainerInfo} ${styles.titleContainerEmphasis}`}
            />
            <TypeAnimation
              sequence={["", 5000, "specializing in web development."]}
              wrapper="span"
              speed={70}
              cursor={false}
              preRenderFirstString={false}
              className={styles.titleContainerInfo}
            />
            {/* <div className={styles.skillsContainer}>
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
                  "...",
                  5700,
                  "JavaScript.",
                  500,
                  "TypeScript.",
                  500,
                  "React.",
                  500,
                  "Node.js.",
                  500,
                  "HTML.",
                  500,
                  "CSS.",
                  500,
                  "Git.",
                  500,
                  "Agile.",
                  500,
                  "Problem Solving.",
                  500,
                  "Collaboration.",
                  500,
                  "Communication.",
                  500,
                ]}
                wrapper="span"
                speed={30}
                cursor={false}
                repeat={Infinity}
                className={`${styles.titleContainerInfo} ${styles.titleContainerSkills}`}
              />
            </div> */}
          </div>
          <div className={styles.profileImgContainer}>
            <motion.img
              src={profileMaskImage}
              alt="Profile picture"
              className={styles.profileImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleContainer;
