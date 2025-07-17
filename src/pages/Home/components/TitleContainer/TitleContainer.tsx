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
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.cursor}
          style={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
        >
          <path
            d="M2.05577 4.70345C2.30477 4.95245 2.47527 5.01796 2.57027 5.06746C3.20327 5.39746 3.40827 5.79496 2.74577 6.45746C2.68077 6.52246 0.612265 8.50096 0.237265 8.82796C-0.00773454 9.04146 -0.0827345 9.36846 0.106265 9.61996C0.249265 9.80996 1.74277 11.6375 2.35977 12.1375C2.83727 12.5245 3.42677 12.5375 3.78777 12.177C3.95077 12.014 4.01227 11.8135 4.07677 11.6015C4.16127 11.3255 4.11077 10.72 4.46427 10.3665C5.03077 9.79996 5.92627 10.0965 6.67477 10.825C7.40327 11.5735 7.69977 12.469 7.13327 13.0355C6.77927 13.3895 6.17427 13.3385 5.89827 13.423C5.68627 13.4875 5.48627 13.549 5.32277 13.712C4.96227 14.0725 4.97577 14.662 5.36227 15.14C5.86227 15.7575 7.68977 17.2505 7.87977 17.3935C8.13127 17.583 8.45777 17.5075 8.67177 17.2625C8.99877 16.8875 10.9773 14.819 11.0423 14.754C11.7043 14.092 12.1023 14.2965 12.4323 14.9295C12.4818 15.0245 12.5468 15.1945 12.7963 15.444C13.1473 15.795 13.6235 15.9923 14.12 15.9923C14.6165 15.9923 15.0927 15.795 15.4438 15.444C15.7948 15.0929 15.9921 14.6167 15.9921 14.1202C15.9921 13.6237 15.7948 13.1475 15.4438 12.7965C15.1948 12.5475 15.0243 12.482 14.9293 12.4325C14.2963 12.1025 14.0913 11.705 14.7538 11.0425C14.8188 10.9775 16.8873 8.99896 17.2623 8.67196C17.5073 8.45846 17.5823 8.13146 17.3933 7.87996C17.2503 7.68996 15.7568 5.86246 15.1398 5.36246C14.6623 4.97546 14.0728 4.96246 13.7118 5.32296C13.5488 5.48596 13.4873 5.68646 13.4228 5.89846C13.3383 6.17446 13.3888 6.77996 13.0353 7.13346C12.4688 7.69996 11.5733 7.40346 10.8248 6.67496C10.0963 5.92646 9.79977 5.03096 10.3663 4.46446C10.7203 4.11046 11.3253 4.16145 11.6013 4.07695C11.8133 4.01245 12.0133 3.95096 12.1768 3.78796C12.5373 3.42746 12.5238 2.83795 12.1373 2.35995C11.6373 1.74245 9.80977 0.249455 9.61977 0.106455C9.36827 -0.0830452 9.04177 -0.00754654 8.82777 0.237453C8.50077 0.612453 6.52227 2.68096 6.45727 2.74596C5.79527 3.40796 5.39727 3.20346 5.06727 2.57046C5.01777 2.47546 4.95277 2.30545 4.70327 2.05595C4.35218 1.70487 3.87602 1.50764 3.37952 1.50764C2.88301 1.50764 2.40685 1.70487 2.05577 2.05595C1.70469 2.40704 1.50745 2.8832 1.50745 3.37971C1.50745 3.87621 1.70469 4.35237 2.05577 4.70345Z"
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
              sequence={["", 2300, "I'm a  Software Engineer,"]}
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
            </div>
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
