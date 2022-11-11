import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
