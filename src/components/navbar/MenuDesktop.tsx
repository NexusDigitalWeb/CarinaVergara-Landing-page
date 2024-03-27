import React from "react";

const MenuDesktop = (): React.ReactElement => {
  return (
    <div className="hidden lg:flex gap-[21px] text-[16px] lg:text-[18px] text-texts-color font-medium ">
      <a href="#" className="carina-gradient-color-text hover:scale-110 transition-all ease-in duration-150">Inicio</a>
      <a href="#services" className="hover:scale-110 transition-all ease-in duration-150">Servicios</a>
      <a href="#students" className="hover:scale-110 transition-all ease-in duration-150">Alumnos</a>
      <a href="#aboutMe" className="hover:scale-110 transition-all ease-in duration-150">Sobre mí</a>
      <a href="#myJourney" className="hover:scale-110 transition-all ease-in duration-150">Mi recorrido</a>
    </div>
  );
};

export default MenuDesktop;
