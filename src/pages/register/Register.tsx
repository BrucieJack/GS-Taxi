import { Form, Formik, Field } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { TField } from "../../components/inputs/TField";
import { field as inputStyle } from "../../components/inputs/style";
import { Box, Typography, MenuItem } from "@mui/material";
import { Button } from "../../components/button/Button";
import { button as buttonStyle } from "../../components/button/style";
import { register as registerStyle } from "./style";
import { useRegisterUserMutation } from "../../services/AuthService";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  role: Yup.string().required("No role provided."),
  firstName: Yup.string().required("No first name provided."),
  lastName: Yup.string().required("No last name provided."),
  confirmPassword: Yup.string()
    .label("confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  email: Yup.string().email("Invalid email").required("Required"),
  make: Yup.string().when("role", {
    is: "driver",
    then: Yup.string().required("Must enter car make"),
  }),
  model: Yup.string().when("role", {
    is: "driver",
    then: Yup.string().required("Must enter car make"),
  }),
  year: Yup.string().when("role", {
    is: "driver",
    then: Yup.string().required("Must enter car make"),
  }),
  color: Yup.string().when("role", {
    is: "driver",
    then: Yup.string().required("Must enter car make"),
  }),
});

export type RegisterInput = {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
  car?: {
    make: string;
    model: string;
    year: string;
    color: string;
  };
};

export const Register = () => {
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  React.useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }

    if (isError) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <Box sx={registerStyle.box.main}>
      <Typography sx={registerStyle.text.title}>Sign Up</Typography>
      <Formik
        initialValues={SignupSchema}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          registerUser(values);
        }}
      >
        {({ values, errors, isValid }) => (
          <Box
            sx={
              values.role === "driver"
                ? registerStyle.box.register
                : registerStyle.box.registerSmall
            }
          >
            <Form>
              <Box sx={registerStyle.box.row}>
                <Box>
                  <Box sx={registerStyle.box.mt}>
                    <Field
                      name="email"
                      placeholder="Email"
                      type="email"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                  <Box sx={registerStyle.box.mt}>
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                  <Box sx={registerStyle.box.mt}>
                    <Field
                      name="confirmPassword"
                      placeholder="Confirm password"
                      type="password"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                  <Box sx={registerStyle.box.mt}>
                    <Field
                      name="firstName"
                      placeholder="First name"
                      type="input"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                  <Box sx={registerStyle.box.mt}>
                    <Field
                      name="lastName"
                      placeholder="Last name"
                      type="input"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                  <Box sx={registerStyle.box.mt}>
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
                  </Box>
                </Box>
                {values.role === "driver" && (
                  <Box sx={registerStyle.box.column}>
                    <Typography sx={registerStyle.text.simpleText}>
                      Car
                    </Typography>
                    <Box sx={registerStyle.box.mt}>
                      <Field
                        name="make"
                        placeholder="Make"
                        type="input"
                        component={TField}
                        sx={inputStyle.input}
                      />
                    </Box>
                    <Box sx={registerStyle.box.mt}>
                      <Field
                        name="model"
                        placeholder="Model"
                        type="input"
                        component={TField}
                        sx={inputStyle.input}
                      />
                    </Box>
                    <Box sx={registerStyle.box.mt}>
                      <Field
                        name="year"
                        placeholder="Year"
                        type="input"
                        component={TField}
                        sx={inputStyle.input}
                      />
                    </Box>
                    <Box sx={registerStyle.box.mt}>
                      <Field
                        name="color"
                        placeholder="Color"
                        type="input"
                        component={TField}
                        sx={inputStyle.input}
                      />
                    </Box>
                  </Box>
                )}
              </Box>
              <button type="submit"></button>
              {/* <Button
                label="Register"
                sx={
                  !isValid || values.email === ""
                    ? buttonStyle.auth.disabled
                    : buttonStyle.auth.active
                }
                disabled={!isValid || values.email === ""}
              /> */}
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
