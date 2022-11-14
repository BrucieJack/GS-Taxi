import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export interface ModalProps {
  children: React.ReactNode;
  sx: {
    position: string;
    top: string;
    left: string;
    transform: string;
    width: number;
    height: number;
    bgcolor: string;
    boxShadow: number;
  };
}

export default function BasicModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={props.sx}>{props.children}</Box>
      </Modal>
    </div>
  );
}
