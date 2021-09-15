import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import carIcon from "../images/pororo.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src={carIcon} alt="logo" height={75} />
        </Link>
        {isMobile ? (
          <FaTimes
            className={styles.bars}
            onClick={() => setIsMobile(!isMobile)}
          />
        ) : (
          <FaBars
            className={styles.bars}
            onClick={() => setIsMobile(!isMobile)}
          />
        )}
        <div
          className={isMobile ? styles.navmenuMovil : styles.navmenu}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/movies" className={styles.navLink}>
            Cartelera
          </Link>
          <Link to="/comingsoon" className={styles.navLink}>
            Próximamente
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contáctanos
          </Link>
        </div>
        <nav className={styles.navbtn}>
          <Link to="/tickets" className={styles.NavBtnLink}>
            Boleteria Online
          </Link>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
