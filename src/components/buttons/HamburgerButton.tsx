import React, { Dispatch, SetStateAction } from "react";
import { HamburgerIcon } from "../../images/HamburgerIcons";

/**
 * 
 * @param {isOpened, setState} 
 * @returns Button component
 */

const HamburgerButton = ({
  isOpened,
  setState,
}: {
  isOpened?: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}): React.ReactElement => {
  return (
    <button onClick={() => setState(!isOpened)} className="lg:hidden">
      <HamburgerIcon containerClassNameProp="px-5 md:px-10" svgClassNameProp="md:w-10 md:h-10" />
    </button>
  );
};

export default HamburgerButton;
