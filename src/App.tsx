import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import FrequentQuestions from "./components/FAQ/FrequentQuestions";
import AboutMe from "./components/aboutme/AboutMe";
import Footer from "./components/footer/Footer";

const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AboutMe />
        <FrequentQuestions />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
