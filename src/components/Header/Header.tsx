import styles from "./Header.module.scss";
import logo from "../../assets/shared/logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <img src={logo} alt="logo" />
        <span className={styles.headerLine}></span>
      </div>
      <div className={styles.headerButtonsContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>00 Home</button>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>01 Destination</button>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>02 Crew</button>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>03 Technology</button>
        </div>
      </div>
    </div>
  );
};
