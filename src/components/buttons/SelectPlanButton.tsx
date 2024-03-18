import { Button } from "@mui/material";
import React from "react";

const SelectPlanButton = ({to, styles, buttonText}: { to: string, styles: object, buttonText: string }): React.ReactElement => {
  return (
    <Button
      href={to}
      target="_blank"
      sx={styles}
    >
      {buttonText}
    </Button>
  );
};

export default SelectPlanButton;
