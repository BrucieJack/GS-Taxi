import * as React from "react";
import { TField } from "../../components/inputs/TField";
import { field as inputStyle } from "../../components/inputs/style";
import { Box, Typography, MenuItem } from "@mui/material";
import * as Yup from "yup";
import { Button } from "../../components/button/Button";
import { button as buttonStyle } from "../../components/button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, TypeOf } from "zod";
import { register as registerStyle } from "./style";
import { useRegisterUserMutation } from "../../services/AuthService";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

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

export type RegisterInput = Yup.TypeOf<typeof SignupSchema>;

export const Register = () => {
  const methods = useForm<RegisterInput>({
    resolver: yupResolver(SignupSchema),
  });

  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  React.useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }

    if (isError) {
      console.log(error);
    }
  }, [isLoading]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log("kek");
    registerUser(values);
  };

  return (
    <Box sx={registerStyle.box.main}>
      <Typography sx={registerStyle.text.title}>Sign Up</Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitHandler)}
          sx={
            registerStyle.box.register
            // : registerStyle.box.registerSmall
          }
        >
          <Box sx={registerStyle.box.row}>
            <Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="email"
                  placeholder="Email"
                  type="email"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="password"
                  placeholder="Password"
                  type="password"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="confirmPassword"
                  placeholder="Confirm password"
                  type="password"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="firstName"
                  placeholder="First name"
                  type="input"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="lastName"
                  placeholder="Last name"
                  type="input"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  defaultValue=""
                  name="role"
                  label="Role"
                  select
                  sx={inputStyle.input}
                >
                  <MenuItem value={"client"}>Client</MenuItem>
                  <MenuItem value={"driver"}>Driver</MenuItem>
                </TField>
              </Box>
            </Box>
            {/* {values.role === "driver" && ( */}
            <Box sx={registerStyle.box.column}>
              <Typography sx={registerStyle.text.simpleText}>Car</Typography>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="make"
                  placeholder="Make"
                  type="input"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="model"
                  placeholder="Model"
                  type="input"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="year"
                  placeholder="Year"
                  type="input"
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={registerStyle.box.mt}>
                <TField
                  name="color"
                  placeholder="Color"
                  type="input"
                  sx={inputStyle.input}
                />
              </Box>
            </Box>
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
        </Box>
      </FormProvider>
    </Box>
  );
};
