import React, { Dispatch, SetStateAction } from "react";
import { HamburgerMenuIcon } from "../../images/HamburgerIcons";

/**
 * Toma el estado del componente principal y evalua que accion hacer dependiendo ese estado
 * @param { isOpened , setState} 
 * @returns Button component
 */

const HamburgerCloseButton = ({
  isOpened,
  setState,
}: {
  isOpened?: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}): React.ReactElement => {
  return (
    <button onClick={() => setState(!isOpened)}>
      <HamburgerMenuIcon containerClassNameProp="py-8 px-7 md:py-12 md:px-11" svgClassNameProp="md:w-10 md:h-10" />
    </button>
  );
};

export default HamburgerCloseButton;
