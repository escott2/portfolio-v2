import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./TitleContainer.styles.module.scss";
import { HandWaveSVG } from "../../../../components/svg";

interface MousePosition {
  x: number;
  y: number;
}

function TitleContainer() {
  const cursorContainerRef = useRef(null);
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const cursorVariants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 30,
      opacity: 1,

      transition: {
        default: {
          type: "smooth",
          duration: 0,
        },
      },
    },
  };

  const handWaveVariants = {
    animate: { rotate: [-45, 0, -45, 0] },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOver = () => {
    setIsTitleHovered(true);
  };

  const handleMouseOut = () => {
    setIsTitleHovered(false);
  };

  return (
    <>
      <AnimatePresence>
        {isTitleHovered && (
          <motion.div
            className={styles.cursor}
            variants={cursorVariants}
            animate="default"
          ></motion.div>
        )}
      </AnimatePresence>
      <div
        className={styles.titleContainer}
        ref={cursorContainerRef}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.titleContainerContent}>
          <h2 className={styles.sectionTitle}>
            Hello, I'm Emily Scott, a front-end engineer.
          </h2>
          <motion.div variants={handWaveVariants} animate="animate">
            <HandWaveSVG className={styles.handWaveOutline} />
          </motion.div>
        </div>
        <div className={styles.titleContainerBottom}></div>
      </div>
    </>
  );
}

export default TitleContainer;
