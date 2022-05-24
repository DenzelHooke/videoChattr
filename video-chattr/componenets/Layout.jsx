import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-nextjs-toast";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
