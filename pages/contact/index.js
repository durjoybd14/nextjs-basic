import styles from "../../styles/Home.module.css";
import React from "react";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";


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
