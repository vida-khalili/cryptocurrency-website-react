import { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
