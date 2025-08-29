import styles from "./Home.module.scss";
import { About, Projects, Contact } from "../../features";
import { useEffect } from "react";
import { animateScroll as scroll, Element } from "react-scroll";
import { IconButton } from "../../components/ui/Button";
import { useAnimate, motion, AnimatePresence } from "framer-motion";
import { TitleContainer } from "./components";

interface HomeProps {
  hasScrolledDown: boolean;
}

function Home({ hasScrolledDown }: HomeProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (hasScrolledDown) {
      animate(
        scope.current,
        { scale: 1.2, opacity: 1 },
        {
          scale: { type: "spring", duration: 0.5 },
          opacity: { ease: "linear", duration: 0.25 },
        }
      );
    }
  }, [hasScrolledDown]);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <main className={styles.homeContainer}>
        <Element name="landing">
          <TitleContainer />
        </Element>
        <div>
          <Projects />
          <About />
          <Contact />
        </div>

        <AnimatePresence>
          {hasScrolledDown && (
            <motion.div
              ref={scope}
              className={styles.scrollButtonContainer}
              exit={{ scale: 1, opacity: 0 }}
              transition={{
                scale: { type: "spring", duration: 0.5 },
                opacity: { ease: "linear", duration: 0.25 },
              }}
            >
              <IconButton
                onClick={handleScrollToTop}
                customClasses={styles.scrollToTopButton}
              >
                <svg viewBox="0 0 20 20" fill="#FFFFFF">
                  <path d="M9.00014 3.828L2.92914 9.899L1.51514 8.485L10.0001 0L10.7071 0.707L18.4851 8.485L17.0711 9.899L11.0001 3.828V20H9.00014V3.828Z" />
                </svg>
              </IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

export default Home;
