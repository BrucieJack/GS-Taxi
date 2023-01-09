import * as React from "react";
import { useAppDispatch } from "@hooks/redux";
import { deleteAlert } from "@store/reducers/AlertSlice";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export interface AlertProps {
  children: React.ReactNode;
}

export default function TransitionAlerts(props: AlertProps) {
  const [open, setOpen] = React.useState(true);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          sx={{ bgcolor: "#00CB82" }}
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                dispatch(deleteAlert());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.children}
        </Alert>
      </Collapse>
    </Box>
  );
}
