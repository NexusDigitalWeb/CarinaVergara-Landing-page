import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import FrequentQuestions from "./components/FAQ/FrequentQuestions";
import AboutMe from "./components/aboutme/AboutMe";

const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <AboutMe />
      <FrequentQuestions />
    </>
  );
};

export default App;
