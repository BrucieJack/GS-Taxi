import * as React from "react";
import Modal from "@mui/material/Modal";

export interface ModalProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
