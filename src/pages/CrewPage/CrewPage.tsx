import { PageTitle } from "components/PageTitle/PageTitle";
import styles from "./CrewPage.module.scss";
import { useDataFetch } from "hooks/useDataFetch";
import { useEffect, useState } from "react";
import { CrewTypes } from "types";
import { motion } from "framer-motion";

export const CrewPage = () => {
  const { crew } = useDataFetch();

  const [data, setData] = useState<CrewTypes | null>(null);

  useEffect(() => {
    if (crew.length > 0) {
      setData(crew[0]);
    }
  }, [crew]);

  if (!data) return <p>Loading...</p>;

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
    <div className={styles.crewPage}>
      <div className="pageContainer">
        <PageTitle number={"02"} title={"MEET YOUR CREW"} />
        <div className={styles.crewInfoContainer}>
          <div className={styles.crewInfoWrapper}>
            <div className={styles.personInfoContainer}>
              <motion.p
                className={styles.personRank}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={1}
              >
                {data.role}
              </motion.p>
              <motion.p
                className={styles.personName}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={2}
              >
                {data.name}
              </motion.p>
              <motion.p
                className={styles.personBio}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={3}
              >
                {data.bio}
              </motion.p>
              <motion.div
                className={styles.dotsContainer}
                initial="hidden"
                animate="visible"
                variants={variants}
                custom={4}
              >
                <span
                  className={`${styles.dot} ${
                    data.role === "Commander" && styles.dot__active
                  }`}
                  onClick={() => setData(crew[0])}
                ></span>
                <span
                  className={`${styles.dot} ${
                    data.role === "Mission Specialist" && styles.dot__active
                  }`}
                  onClick={() => setData(crew[1])}
                ></span>
                <span
                  className={`${styles.dot} ${
                    data.role === "Pilot" && styles.dot__active
                  }`}
                  onClick={() => setData(crew[2])}
                ></span>
                <span
                  className={`${styles.dot} ${
                    data.role === "Flight Engineer" && styles.dot__active
                  }`}
                  onClick={() => setData(crew[3])}
                ></span>
              </motion.div>
            </div>
            <div className={styles.personImageContainer}>
              <img src={data.images.webp} alt="crew" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
