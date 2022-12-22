import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import "../components/button/button.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TField } from "../components/inputs/TField";
import MenuItem from "@mui/material/MenuItem";
import { field as inputStyle } from "../components/inputs/style";

export default {
  title: "Example/Input",
  component: TField,
} as ComponentMeta<typeof TField>;

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const Auth: ComponentStory<typeof TField> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Formik
      initialValues={{ login: "", password: "", email: "", date: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <Field
            name="email"
            placeholder="Email"
            type="email"
            component={TField}
            sx={inputStyle.input}
          />

          <Field
            name="password"
            placeholder="Password"
            type="password"
            component={TField}
            sx={inputStyle.input}
          />

          <Field
            name="role"
            label="Role"
            component={TField}
            select
            sx={inputStyle.input}
          >
            <MenuItem value={"client"}>Client</MenuItem>
            <MenuItem value={"driver"}>Driver</MenuItem>
          </Field>
          <Field
            name="date"
            placeholder="Date"
            type="input"
            component={TField}
            sx={inputStyle.input}
          />
        </Form>
      )}
    </Formik>
  </Stack>
);
