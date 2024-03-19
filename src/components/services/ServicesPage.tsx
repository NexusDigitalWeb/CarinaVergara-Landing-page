import React from "react";
import CardServices from "./CardServices";
import TitlesH2 from "../tags/TitlesH2";

const ServicesPage = (): React.ReactElement => {
  return (
    <div className="w-full" id="services">
      <div>
        <TitlesH2 text="Mis servicios" />

        <div className="w-full flex justify-center">
          <CardServices />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
