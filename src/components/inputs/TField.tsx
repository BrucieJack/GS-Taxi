import * as React from "react";
import { FieldProps } from "formik";
import { TextFieldProps } from "@mui/material";
import { Input } from "./components";

export const TField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
  type,
  select,
  children,
  label,
  sx,
  InputProps,
}) => {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      {...field}
      type={type}
      select={select}
      sx={sx}
      InputProps={InputProps}
    >
      {children}
    </Input>
  );
};
