import Footer from "../Menu/Footer";
import Menubar from "../Menu/Menubar";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
