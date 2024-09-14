import { PageTitle } from "components/PageTitle/PageTitle";
import styles from "./CrewPage.module.scss";
import { useDataFetch } from "hooks/useDataFetch";
import { useEffect, useState } from "react";
import { CrewTypes } from "types";


export const CrewPage = () => {
  const { crew } = useDataFetch();

  const [data, setData] = useState<CrewTypes | null>(null);

  useEffect(() => {
    if (crew.length > 0) {
      setData(crew[0]);
    }
  }, [crew]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className={styles.crewPage}>
      <PageTitle number={"02"} title={"MEET YOUR CREW"} />
      <div className={styles.crewInfoContainer}>
        <div className={styles.crewInfoWrapper}>
          <div className={styles.personInfoContainer}>
            <p className={styles.personRank}>{data.role}</p>
            <p className={styles.personName}>{data.name}</p>
            <p className={styles.personBio}>{data.bio}</p>
            <div className={styles.dotsContainer}>
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
            </div>
          </div>
          <div className={styles.personImageContainer}>
            <img src={data.images.webp} alt="crew" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};
