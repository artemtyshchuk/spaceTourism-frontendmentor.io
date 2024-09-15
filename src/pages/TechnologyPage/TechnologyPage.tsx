import { PageTitle } from "components/PageTitle/PageTitle";
import styles from "./TechnologyPage.module.scss";
import { useDataFetch } from "hooks/useDataFetch";
import { useEffect, useState } from "react";
import { TechnologyTypes } from "types";
import { motion } from "framer-motion";

export const TechnologyPage = () => {
  const { technology } = useDataFetch();
  const [data, setData] = useState<TechnologyTypes | null>(null);
  const [screenSize, setScreenSize] = useState({
    tabletAndPhone: window.matchMedia("(max-width: 992px)").matches,
  });

  useEffect(() => {
    if (technology.length > 0) {
      setData(technology[0]);
    }
  }, [technology]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        tabletAndPhone: window.matchMedia("(max-width: 992px)").matches,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!data) return <p>Loading...</p>;

  const variantsButtons = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className={styles.technologyPage}>
      <div className="pageContainer">
        <PageTitle number={"03"} title={"SPACE LAUNCH 101"} />

        <div className={styles.technologyInfoWrapper}>
          <div className={styles.technologyInfoContainer}>
            <div className={styles.buttonsContainer}>
              <motion.button
                className={`${styles.button} ${
                  technology[0].name === data.name ? styles.button__active : ""
                }`}
                onClick={() => setData(technology[0])}
                initial="hidden"
                animate="visible"
                variants={variantsButtons}
                custom={1}
              >
                1
              </motion.button>
              <motion.button
                className={`${styles.button} ${
                  technology[1].name === data.name ? styles.button__active : ""
                }`}
                onClick={() => setData(technology[1])}
                initial="hidden"
                animate="visible"
                variants={variantsButtons}
                custom={2}
              >
                2
              </motion.button>
              <motion.button
                className={`${styles.button} ${
                  technology[2].name === data.name ? styles.button__active : ""
                }`}
                onClick={() => setData(technology[2])}
                initial="hidden"
                animate="visible"
                variants={variantsButtons}
                custom={3}
              >
                3
              </motion.button>
            </div>
            <div className={styles.infoContainer}>
              <motion.p
                className={styles.technologyName}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={1}
              >
                THE TERMINOLOGY…
              </motion.p>
              <motion.p
                className={styles.technologyTitle}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={2}
              >
                {data.name}
              </motion.p>
              <motion.p
                className={styles.technologyDescription}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={3}
              >
                {data.description}
              </motion.p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={
                screenSize.tabletAndPhone
                  ? data.images.landscape
                  : data.images.portrait
              }
              alt="technologyImage"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
