import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "./index.css";
import ServicesPage from "./components/services/ServicesPage";

AOS.init();

const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
        {/* <ServicesPage/> */}
      </BrowserRouter>
    </>
  );
};

export default App;
