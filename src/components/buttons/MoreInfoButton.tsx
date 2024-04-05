import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalTypes } from "../../types/interfaces";
import SelectPlanButton from "./SelectPlanButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  maxHeight: "90%",
  overflowY: "auto",
  borderRadius: 8,
  boxShadow: 24,
  px: 3,
  py: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
  backgroundImage: "linear-gradient(to top, #FF89CA,#9BC6D6, #80D7DA)",
  transition: "transform 0.3s ease-in-out",
};

const selectPlanButtonStyles = {
  mt: 2,
  backgroundColor: "#80D7DA",
  textTransform: "unset",
  fontWeight: 500,
  fontFamily: ["Poppins", "sans-serif"],
  borderRadius: 1,
  textDecoration: "none",
  color: "#000",
  "&:hover": {
    backgroundColor: "#61d3d7",
  },
};

const MoreInfoButton = ({
  title,
  services,
  isAUniqueService,
}: {
  title: string;
  services: ModalTypes[];
  isAUniqueService: boolean;
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="pb-3">
      <Button
        onClick={handleOpen}
        sx={{
          height: "45px",
          backgroundColor: "#80D7DA",
          width: "180px",
          textTransform: "capitalize",
          fontWeight: 500,
          fontFamily: ["Poppins", "sans-serif"],
          borderRadius: 0,
          textDecoration: "none",
          color: "#000",
          "&:hover": {
            backgroundColor: "#61d3d7",
          },
        }}
      >
        Más info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, gap: 1 }}>
          <Typography
            variant="h4"
            sx={{ fontFamily: ["Poppins", "sans-serif"], textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography sx={{ marginTop: 2, textAlign: "center" }}>
            {!isAUniqueService &&
              `Podés optar por ${services.length} programas:`}
          </Typography>
          {isAUniqueService && (
            <Typography>
              Experimenta tres sesiones de 2:30 hs cada una enfocadas en mejorar
              tu bienestar físico, mental y emocional, para alcanzar tus
              objetivos y metas con mayor claridad y enfoque.
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              maxHeight: "calc(90% - 100px)",
              overflowY: "auto",
              "::-webkit-scrollbar": {
                width: "3px",
              },
              "::-webkit-scrollbar-track": {
                backgroundColor: "#f3f3f349",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#00000048",
              },
            }}
          >
            {services.map((item, index: number) => (
              <Box
                key={index}
                sx={{
                  mt: 3,
                  backgroundColor: "#00c1c734",
                  p: 2,
                  borderRadius: 5,
                  mr: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  {item.text}
                </Typography>
                <Typography sx={{ marginTop: 1, width: "90%" }}>
                  {item.description}
                </Typography>
                {!isAUniqueService && (
                  <SelectPlanButton
                    to={item.wppLink}
                    buttonText="¡Quiero optar por este plan!"
                    styles={selectPlanButtonStyles}
                  />
                )}
              </Box>
            ))}
            {isAUniqueService && (
              <div className="flex justify-center w-[90%]">
                <SelectPlanButton
                  to="https://wa.link/nz3u98"
                  buttonText="¡Quiero optar por este plan!"
                  styles={selectPlanButtonStyles}
                />
              </div>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MoreInfoButton;
