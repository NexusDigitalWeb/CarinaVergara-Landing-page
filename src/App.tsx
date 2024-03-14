import React from "react";
import "./index.css";
import FrequentQuestions from "./components/FAQ/FrequentQuestions";

const App = (): React.ReactElement => {
  return (
    <div>
      <h1 className="carina-gradient-color text-[70px] font-bold">
        Primer Proyecto Oficial
      </h1>
      <FrequentQuestions />
    </div>
  );
};

export default App;