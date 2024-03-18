import React, { Dispatch, SetStateAction, useEffect } from "react";
import HamburgerCloseButton from "../buttons/HamburgerCloseButton";
import "../../index.css";
import LotusFlower from "../../images/LotusFlower";

/**
 * Toma los estados del componente principal y evalua dependiendo el estado si se muestra o no
 * Tiene un evento de click toda la ventana para volver hacia atras
 * Traba la ventana si el menu esta abierto, para que no se pueda seguir scrolleando
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
  // Función para manejar el bloqueo/desbloqueo del scroll del cuerpo
  useEffect(() => {
    if (stateAction) {
      // Si el menú está abierto, bloquea el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Si el menú está cerrado, habilita el scroll
      document.body.style.overflow = "auto";
    }
    // Limpia el efecto cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [stateAction]);

  return (
    <div
      // onClick={() => setState(!stateAction)}
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
          <a href="#" className="carina-gradient-color-text" onClick={() => setState(false)}>Inicio</a>
          <a href="#services" onClick={() => setState(false)}>Servicios</a>
          <a href="#students" onClick={() => setState(false)}>Alumnos</a>
          <a href="#aboutMe" onClick={() => setState(false)}>Sobre mí</a>
          <a href="#FAQ" onClick={() => setState(false)}>FAQ</a>
        </div>

        <div
          className={` ${
            stateAction ? "absolute top-[10%] left-[20%] md:-top-[30%] md:left-[40%]" : "hidden"
          } transition-all ease-in duration-700 z-0`}
        >
          <LotusFlower svgClassName="w-[600px] h-[600px] md:w-[800px] md:h-[800px]" />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
