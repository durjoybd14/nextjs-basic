import React from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.main}>
        <h1>This is contact page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default index;
