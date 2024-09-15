import styles from "./Header.module.scss";
import { ReactComponent as CloseIcon } from "../../assets/shared/icon-close.svg";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router";

interface HamburgerMenuProps {
  onClose: () => void;
}

export const HamburgerMenu = ({ onClose }: HamburgerMenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.hamburgerMenu}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.humburgerCloseIconContainer} onClick={onClose}>
        <CloseIcon />
      </div>
      <div className={styles.hamburgerButtonsContainer}>
        <button
          className={`${styles.hamburgerButton} ${
            location.pathname === "/" ? styles.hamburgerButton__active : ""
          }`}
          onClick={() => {
            navigate("/");
            onClose();
          }}
        >
          <span className={styles.hamburgerButtonNumber}>00</span> Home
        </button>
        <button
          className={`${styles.hamburgerButton} ${
            location.pathname === "/destination"
              ? styles.hamburgerButton__active
              : ""
          }`}
          onClick={() => {
            navigate("/destination");
            onClose();
          }}
        >
          <span className={styles.hamburgerButtonNumber}>01</span> Destination
        </button>
        <button
          className={`${styles.hamburgerButton} ${
            location.pathname === "/crew" ? styles.hamburgerButton__active : ""
          }`}
          onClick={() => {
            navigate("/crew");
            onClose();
          }}
        >
          <span className={styles.hamburgerButtonNumber}>02</span> Crew
        </button>
        <button
          className={`${styles.hamburgerButton} ${
            location.pathname === "/technology"
              ? styles.hamburgerButton__active
              : ""
          }`}
          onClick={() => {
            navigate("/technology");
            onClose();
          }}
        >
          <span className={styles.hamburgerButtonNumber}>03</span> Technology
        </button>
      </div>
    </motion.div>
  );
};
