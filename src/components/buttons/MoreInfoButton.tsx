import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ModalTypes } from "../../types/interfaces";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  height: "70%",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 5,
  backgroundImage: "linear-gradient(to top, #FF89CA,#9BC6D6, #80D7DA)",
  transition: "transform 0.3s ease-in-out",
  "@media (min-width: 600px)": {
    width: 600,
  },
  "@media (min-width: 1000px)": {
    width: 900,
  },
};

const MoreInfoButton = ({
  title,
  modal,
}: {
  classname?: string;
  title: string;
  modal: ModalTypes;
}): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MODALS = [modal.service1?.text, modal.service2?.text, modal.service3?.text, modal.service4?.text]
  const WPPLINKS = [modal.service1?.wppLink, modal.service2?.wppLink, modal.service3?.wppLink, modal.service4?.wppLink] 

  return (
    <div>
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
            backgroundColor: "#80D7DA",
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
        <Box sx={{ ...style, transform: open ? "translate(-50%, -50%)" : "translate(-50%, -200%)" }}>
            <Typography sx={{textAlign: 'center', fontSize: '35px', fontFamily: ['Poppins', 'sans-serif'], fontWeight: 'bold'}}>
                {title}
            </Typography>
          {MODALS.map((service, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Typography id={`modal-modal-description-${index}`}>
                {service}
              </Typography>
              <Button
                href={WPPLINKS[index]} // ! Agregar los link de wpp
                sx={{
                  height: "20px",
                  padding: 3,
                  backgroundColor: "#80D7DA",
                  minWidth: "100px",
                  textTransform: "unset",
                  fontWeight: 500,
                  fontFamily: ["Poppins", "sans-serif"],
                  borderRadius: 0,
                  textDecoration: "none",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#80D7DA",
                  },
                }}
              >
                <span className="text-sm text-nowrap">¡Quiero este servicio!</span>
              </Button>
            </Box>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default MoreInfoButton;
