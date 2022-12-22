import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export interface ModalProps {
  children: React.ReactNode;
  handleClose: any;
  open: boolean;
}

export default function BasicModal(props: ModalProps) {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <>{props.children}</>
    </Modal>
  );
}
