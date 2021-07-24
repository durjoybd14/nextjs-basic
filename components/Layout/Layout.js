import Head from "next/head";
import Footer from "../Menu/Footer";
import Menu from "../Menu/Menu";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
    </Head>
      <Menu />
      {children}
      <Footer />
      
    </>
  );
};

export default Layout;
