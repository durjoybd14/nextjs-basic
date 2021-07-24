import React from "react";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://durjoy-bd.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <p>&copy; durjoybd</p>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
