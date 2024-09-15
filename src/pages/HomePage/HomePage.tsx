import { useNavigate } from "react-router";
import styles from "./HomePage.module.scss";
import { motion } from "framer-motion";

export const HomePage = () => {
  const navigate = useNavigate();

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.globalContainer}>
        <div className={styles.textContainer}>
          <motion.p
            className={styles.text}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.p>
          <motion.p
            className={styles.title}
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            SPACE
          </motion.p>
          <motion.p
            className={styles.description}
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </div>
        <button
            className={styles.button}
            onClick={() => navigate("/destination")}
          >
            Explore
          </button>
      </div>
    </div>
  );
};
