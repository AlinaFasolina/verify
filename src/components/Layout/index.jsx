import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./styles.scss";

const Layout = ({ children }) => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
