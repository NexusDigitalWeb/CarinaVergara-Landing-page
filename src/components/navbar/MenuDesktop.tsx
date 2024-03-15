import React from "react";

const MenuDesktop = (): React.ReactElement => {
  return (
    <div className="hidden lg:flex gap-[21px] text-[16px] text-texts-color font-medium">
      <a href="#" className="carina-gradient-color-text">Inicio</a>
      <a href="#services">Servicios</a>
      <a href="#students">Alumnos</a>
      <a href="#aboutMe">Sobre mí</a>
      <a href="#FAQ">FAQ</a>
    </div>
  );
};

export default MenuDesktop;
