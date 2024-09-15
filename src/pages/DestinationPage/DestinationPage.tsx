import { useDataFetch } from "hooks/useDataFetch";
import styles from "./Destination.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { DestinationTypes } from "types";
import { PageTitle } from "components/PageTitle/PageTitle";

export const DestinationPage = () => {
  const { destination } = useDataFetch();

  const [data, setData] = useState<DestinationTypes | null>(null);

  useEffect(() => {
    if (destination.length > 0) {
      setData(destination[0]);
    }
  }, [destination]);

  const handlePlanetChange = (planet: DestinationTypes) => {
    setData(planet);
  };

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
    <div className={styles.destinationPage}>
      <div className="pageContainer">
        <PageTitle number={"01"} title={"PICK YOUR DESTINATION"} />

        <div className={styles.planetInfoContainer}>
          <div className={styles.planetImageContainer}>
            <img
              className={styles.planetImage}
              src={data.images.webp}
              alt="planet"
            />
          </div>

          <div className={styles.planetInfoWrapper}>
            <div className={styles.planetsButtons}>
              {destination.map((planet, index) => (
                <motion.button
                  key={planet.name}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  custom={index + 1}
                  className={`${styles.button} ${
                    planet.name === data.name ? styles.button__active : ""
                  }`}
                  onClick={() => handlePlanetChange(planet)}
                >
                  {planet.name}
                </motion.button>
              ))}
            </div>

            <motion.p
              className={styles.planetName}
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={2}
            >
              {data.name}
            </motion.p>

            <motion.p
              className={styles.planetDescription}
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={3}
            >
              {data.description}
            </motion.p>

            <motion.span
              className={styles.divider}
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={4}
            ></motion.span>

            <motion.div
              className={styles.distanceContainer}
              initial="hidden"
              animate="visible"
              variants={variants}
              custom={5}
            >
              <div className={styles.avgDistanceContainer}>
                <p className={styles.extraInfoTitle}>AVERAGE DISTANCE</p>
                <p className={styles.extraInfoText}>{data.distance}</p>
              </div>
              <div className={styles.estTravelTimeContainer}>
                <p className={styles.extraInfoTitle}>EST. TRAVEL TIME</p>
                <p className={styles.extraInfoText}>{data.travel}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
