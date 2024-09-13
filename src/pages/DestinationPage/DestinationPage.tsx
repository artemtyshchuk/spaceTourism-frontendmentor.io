import { useDataFetch } from "hooks/useDataFetch";
import styles from "./Destination.module.scss";
import { useEffect, useState } from "react";

import { DestinationTypes } from "types";

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

  return (
    <div className={styles.destinationPage}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>
          <span className={styles.titleNumber}>01</span>PICK YOUR DESTINATION
        </p>
      </div>

      <div className={styles.planetInfoContainer}>
        <div className={styles.planetImageContainer}>
          <img className={styles.planetImage} src={data.images.webp} alt="planet" />
        </div>
        <div className={styles.planetInfoWrapper}>
          <div className={styles.planetsButtons}>
            {destination.map((planet) => (
              <button
                key={planet.name}
                className={`${styles.button} ${
                  planet.name === data.name ? styles.button__active : ""
                }`}
                onClick={() => handlePlanetChange(planet)}
              >
                {planet.name}
              </button>
            ))}
          </div>
          <p className={styles.planetName}>{data.name}</p>
          <p className={styles.planetDescription}>{data.description}</p>
          <span className={styles.divider}></span>
          <div className={styles.distanceContainer}>
            <div className={styles.avgDistanceContainer}>
              <p className={styles.extraInfoTitle}>AVERAGE DISTANCE</p>
              <p className={styles.extraInfoText}>{data.distance}</p>
            </div>
            <div className={styles.estTravelTimeContainer}>
              <p className={styles.extraInfoTitle}>EST. TRAVEL TIME</p>
              <p className={styles.extraInfoText}>{data.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
