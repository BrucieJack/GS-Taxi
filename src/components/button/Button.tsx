import React from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  label: string;
  disabled: boolean;
}

export const Button = (props: ButtonProps) => (
  <MuiButton variant="contained" disabled={props.disabled} type="submit">
    {props.label}
  </MuiButton>
);

Button.defaultProps = {
  disabled: false,
};
