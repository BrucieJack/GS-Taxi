import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { string } from "yup";

export interface IField {
  label?: string;
  sx: {};
  placeholder?: string;
  type?: string;
  select?: boolean;
  children?: React.ReactNode;
  name: string;
  defaultValue?: string;
}

export const TField = (props: IField) => {
  return (
    <TextField
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
      type={props.type}
      select={props.select}
      sx={props.sx}
      defaultValue={props.defaultValue}
    >
      {props.children}
    </TextField>
  );
};
