import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import FrequentQuestions from "./components/FAQ/FrequentQuestions";
import AboutMe from "./components/aboutme/AboutMe";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "./index.css";
import ServicesPage from "./components/services/ServicesPage";


AOS.init();


const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col gap-10">
          <Home />
          <ServicesPage />
          <AboutMe />
          <FrequentQuestions />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
