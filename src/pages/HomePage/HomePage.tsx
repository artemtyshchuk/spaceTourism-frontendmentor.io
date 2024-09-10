import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.globalContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text}>SO, YOU WANT TO TRAVEL TO</p>
          <p className={styles.title}>SPACE</p>
          <p className={styles.description}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Explore</button>
        </div>
      </div>
    </div>
  );
};
