import React from "react";
import { NavLink } from "react-router-dom";

const MenuDesktop = (): React.ReactElement => {
  return (
    <div className="hidden lg:flex gap-[21px] text-[16px] text-texts-color font-medium">
      <NavLink to="#" className="carina-gradient-color-text">Inicio</NavLink>
      <NavLink to="#services">Servicios</NavLink>
      <NavLink to="#students">Alumnos</NavLink>
      <NavLink to="#aboutMe">Sobre mí</NavLink>
      <NavLink to="#FAQ">FAQ</NavLink>
    </div>
  );
};

export default MenuDesktop;
