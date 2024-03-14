import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import FrequentQuestions from "./components/FAQ/FrequentQuestions";

const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <FrequentQuestions />
    </>
  );
};

export default App;
