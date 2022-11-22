import React from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  label: string;
  sx: {
    width: number;
    height: number;
    bgcolor: string;
    fontSize: number;
    borderRadius?: number;
    fontFamily?: string;
    fontWeight?: number;
    textTransform?: string;
    mr?: number;
  };
  disabled: boolean;
}

export const Button = (props: ButtonProps) => (
  <MuiButton
    variant="contained"
    sx={props.sx}
    disabled={props.disabled}
    type="submit"
  >
    {props.label}
  </MuiButton>
);

Button.defaultProps = {
  disabled: false,
};
