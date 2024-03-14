import React, { Dispatch, SetStateAction } from "react";
import HamburgerCloseButton from "../buttons/HamburgerCloseButton";
import { NavLink } from "react-router-dom";
import "../../index.css";
import LotusFlower from "../../images/LotusFlower";

/**
 * Toma los estados del componente principal y evalua dependiendo el estado si se muestra o no
 * Tiene un evento de click toda la ventana para volver hacia atras
 * @param { SetStateAction, setState }
 * @returns Mobile navbar window
 */
const MenuMobile = ({
  stateAction,
  setState,
}: {
  stateAction: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}): React.ReactElement => {
  return (
    <div
      onClick={() => setState(!stateAction)}
      className={`w-full h-screen absolute top-0 ${
        stateAction ? "left-0" : "-left-[1000px]"
      } bg-background-page-color transition-all ease-in duration-300 lg:hidden`}
    >
      <div
        className={`w-full flex justify-end relative ${
          stateAction ? "left-0" : "-left-[1000px]"
        } transition-all ease-in duration-100`}
      >
        <HamburgerCloseButton isOpened={stateAction} setState={setState} />
      </div>

      <div className="relative">
        <div
          className={`flex flex-col gap-[15px] w-[50%] p-10 font-medium text-[20px] text-texts-color md:text-[24px] relative z-10 ${
            stateAction ? "left-0" : "-left-[1000px]"
          } transition-all ease-in duration-500`}
        >
          <NavLink to="#" className="carina-gradient-color-text">Inicio</NavLink>
          <NavLink to="#services">Servicios</NavLink>
          <NavLink to="#students">Alumnos</NavLink>
          <NavLink to="#aboutMe">Sobre mí</NavLink>
          <NavLink to="#FAQ">FAQ</NavLink>
        </div>

        <div
          className={` ${
            stateAction ? "absolute top-[10%] left-[20%]" : "hidden"
          } transition-all ease-in duration-700 z-0`}
        >
          <LotusFlower svgClassName="w-[600px] h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
