import { Form, Formik, Field } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { TField } from "../../components/inputs/TField";
import { field as inputStyle } from "../../components/inputs/style";
import { Checkbox, Box, Typography } from "@mui/material";
import { Button } from "../../components/button/Button";
import { button as buttonStyle } from "../../components/button/style";
import { login as loginStyle } from "./style";
import { useLoginUserMutation } from "../../services/AuthService";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email").required("Required"),
});

export type LoginInput = { email: string; password: string };

export const Login = () => {
  const [loginUser, { data, isLoading, isSuccess, error, isError }] =
    useLoginUserMutation();

  React.useEffect(() => {
    if (isSuccess) {
      console.log(data);
      console.log("success");
    }

    if (isError) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <Box sx={loginStyle.box.main}>
      <Typography sx={loginStyle.text.title}>Sign In</Typography>
      <Box sx={loginStyle.box.login}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            const value = {
              email: values.email,
              password: values.password,
            };
            loginUser(value);
          }}
        >
          {({ values, isValid }) => (
            <Form>
              <Box sx={loginStyle.box.mt}>
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  component={TField}
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={loginStyle.box.mt}>
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={TField}
                  sx={inputStyle.input}
                />
              </Box>
              <Box sx={loginStyle.box.row}>
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                />
                <Typography sx={loginStyle.text.check}>
                  Keep me logged in
                </Typography>
              </Box>
              <Button
                label="Login"
                sx={
                  !isValid || values.email === ""
                    ? buttonStyle.auth.disabled
                    : buttonStyle.auth.active
                }
                disabled={!isValid || values.email === ""}
              />
            </Form>
          )}
        </Formik>
        <Typography sx={loginStyle.text.line}>Forgot password?</Typography>
        <Typography sx={loginStyle.text.line}>
          I don’t have an account
        </Typography>
      </Box>
    </Box>
  );
};
