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
        <div
          className={styles.cursor}
          style={{
            transform: `translateX(${mousePosition.x - 50}px) translateY(${
              mousePosition.y - 50
            }px)`,
          }}
        ></div>
      )}
      <div
        className={styles.titleContainer}
        ref={cursorContainerRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.titleContainerTop}></div>
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
              sequence={["", 2300, "I'm a Software Engineer"]}
              wrapper="span"
              speed={70}
              cursor={false}
              preRenderFirstString={false}
              className={styles.titleContainerInfo}
            />
            <TypeAnimation
              sequence={["", 3500, "with expertise in web development."]}
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
        <div className={styles.titleContainerBottom}></div>
      </div>
    </>
  );
}

export default TitleContainer;
