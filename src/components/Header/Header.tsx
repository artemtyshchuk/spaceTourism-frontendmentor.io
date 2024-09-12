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
        <img src={logo} alt="logo" />
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
            00 Home
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              location.pathname === "/destination" ? styles.button__active : ""
            }`}
            onClick={() => navigate("/destination")}
          >
            01 Destination
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
            02 Crew
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
            03 Technology
          </button>
        </div>
      </div>
    </div>
  );
};
