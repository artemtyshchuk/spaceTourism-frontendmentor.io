import styles from "./Header.module.scss";
import logo from "../../assets/shared/logo.svg";
import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/icon-hamburger.svg";
import { HamburgerMenu } from "./HamburgerMenu";
import { AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.headerLogoContainer}>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
        <HamburgerIcon
          className={styles.hamburger}
          onClick={() => setHamburgerMenu(true)}
        />
        <span className={styles.headerLine}></span>
      </div>
      <AnimatePresence>
        {hamburgerMenu && (
          <HamburgerMenu onClose={() => setHamburgerMenu(false)} />
        )}
      </AnimatePresence>

      <div className={styles.headerButtonsContainer}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              location.pathname === "/" ? styles.button__active : ""
            }`}
            onClick={() => navigate("/")}
          >
            <span className={styles.number}>00</span> Home
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              location.pathname === "/destination" ? styles.button__active : ""
            }`}
            onClick={() => navigate("/destination")}
          >
            <span className={styles.number}>01</span> Destination
          </button>
        </div>
        <div
          className={styles.buttonContainer}
          onClick={() => navigate("/crew")}
        >
          <button
            className={`${styles.button} ${
              location.pathname === "/crew" ? styles.button__active : ""
            }`}
          >
            <span className={styles.number}>02</span> Crew
          </button>
        </div>
        <div
          className={styles.buttonContainer}
          onClick={() => navigate("/technology")}
        >
          <button
            className={`${styles.button} ${
              location.pathname === "/technology" ? styles.button__active : ""
            }`}
          >
            <span className={styles.number}>03</span> Technology
          </button>
        </div>
      </div>
    </div>
  );
};
