import React from "react";
import AboutContent from "../../components/AboutContent.js/AboutContent";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import styles from "../../styles/Home.module.css";
const index = (props) => {
  console.log(props)
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.main}>
        <h1>This is about page</h1>
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};


export default index;
