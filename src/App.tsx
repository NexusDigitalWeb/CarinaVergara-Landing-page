import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = (): React.ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
