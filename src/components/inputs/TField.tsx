import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";

export const TField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
  type,
  select,
  children,
  label,
  sx,
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      {...field}
      type={type}
      select={select}
      sx={sx}
    >
      {children}
    </TextField>
  );
};
