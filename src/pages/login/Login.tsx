import { Form, Formik, Field } from "formik";
import * as React from "react";
import { Checkbox } from "@mui/material";
import { useLoginUserMutation, UserResponse } from "../../services/AuthService";
import { setCredentials } from "../../store/reducers/AuthSlice";
import { useAppDispatch } from "../../hooks/redux";
import { useTranslation } from "react-i18next";
import {
  Check,
  Line,
  LoginBox,
  LoginInput,
  LoginInputBox,
  LoginRow,
  Title,
} from "./components";
import { AuthButton } from "../../components/button/components";
import { TField } from "../../components/inputs/TField";
import { LoginSchema } from "../../validation";
import { useNavigate } from "react-router-dom";

export type LoginInput1 = { email: string; password: string };

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("start");
    const value = {
      email: values.email,
      password: values.password,
    };
    loginUser(value);
  };
  const handleRegisterClick = () => {
    navigate("/register");
  };
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [loginUser, { data, isLoading, isSuccess, error, isError }] =
    useLoginUserMutation();
  React.useEffect(() => {
    if (isSuccess) {
      const response: UserResponse = {
        accessToken: data?.accessToken,
        expirationTime: data?.expirationTime,
        refreshToken: data?.refreshToken,
      };
      dispatch(setCredentials(response));
      // navigate("/driver/activeOrders");
      // navigate("/currentOrder");
      // navigate("/activeTrip");
      // navigate("/driver/ordersHistory");
    }

    if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <LoginBox>
      <Title>{t("login.title")}</Title>
      <LoginInputBox>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ values, isValid }) => (
            <Form>
              <LoginInput>
                <Field
                  name={"email"}
                  placeholder="Email"
                  type="email"
                  component={TField}
                />
              </LoginInput>
              <LoginInput>
                <Field
                  name={"password"}
                  placeholder="Password"
                  type="password"
                  component={TField}
                />
              </LoginInput>
              <LoginRow>
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
                />
                <Check>{t("login.keep")}</Check>
              </LoginRow>
              <AuthButton
                disabled={!isValid || values.email === ""}
                type="submit"
              >
                Login
              </AuthButton>
            </Form>
          )}
        </Formik>
        <Line>{t("login.forgot")}</Line>
        <Line onClick={handleRegisterClick}>{t("login.register")}</Line>
      </LoginInputBox>
    </LoginBox>
  );
};
