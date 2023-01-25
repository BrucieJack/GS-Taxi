import { Form, Formik, Field } from "formik";
import * as React from "react";
import { Checkbox } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LoginSchema } from "../../validation";
import { useNavigate } from "react-router-dom";
import {
  authApi,
  useLoginUserMutation,
  UserResponse,
} from "@services/AuthService";
import { setCredentials } from "@store/reducers/AuthSlice";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { AuthButton, AuthButtonShort } from "@components/button/components";
import { TField } from "@components/inputs/TField";
import CloseIcon from "@mui/icons-material/Close";
import {
  Check,
  Line,
  LoginBox,
  LoginInput,
  LoginInputBox,
  LoginRow,
  ResetRow,
  ResetText,
  Row,
  Title,
} from "./components";
import { AlertBox } from "@components/alert/style";
import TransitionAlerts from "@components/alert/TransitionAlert";
import { ForgotModal } from "@components/modal/components";
import { useState } from "react";

export type LoginInput1 = { email: string; password: string };

export const Login = () => {
  const navigate = useNavigate();
  const message = useAppSelector((state) => state.alert.message);
  const handleSubmit = (values: { email: string; password: string }) => {
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
  const user = useAppSelector((state) => state.user.user);
  React.useEffect(() => {
    if (isSuccess) {
      const response: UserResponse = {
        accessToken: data?.accessToken,
        expirationTime: data?.expirationTime,
        refreshToken: data?.refreshToken,
      };
      dispatch(setCredentials(response));
    }

    if (user) {
      if (user.role === "client") {
        navigate("/");
      } else if (user.role === "driver") {
        navigate("/driver/home");
      } else if (user.role === "admin") {
        navigate("/admin");
      }
    }

    if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, user]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <LoginBox>
      {open && (
        <ForgotModal>
          <Row>
            <ResetText>
              We need to know your email to send the link to reset you password.
            </ResetText>
            <CloseIcon fontSize="large" onClick={handleClose} />
          </Row>
          <ResetRow>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={(values) => {
                dispatch(
                  authApi.endpoints.resetPassword.initiate({
                    email: values.email,
                  })
                );
              }}
            >
              <Form>
                <Row>
                  <LoginInput>
                    <Field
                      id={"email"}
                      name={"email"}
                      placeholder="Email"
                      type="email"
                      component={TField}
                    />
                  </LoginInput>
                  <AuthButtonShort type="submit">SEND</AuthButtonShort>
                </Row>
              </Form>
            </Formik>
          </ResetRow>
        </ForgotModal>
      )}
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
                  data-testid="email"
                  id={"email"}
                  name={"email"}
                  placeholder="Email"
                  type="email"
                  component={TField}
                />
              </LoginInput>
              <LoginInput>
                <Field
                  data-testid="password"
                  id={"password"}
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
                data-testid="button"
                disabled={!isValid || values.email === ""}
                type="submit"
              >
                Login
              </AuthButton>
            </Form>
          )}
        </Formik>
        <Line onClick={handleOpen}>{t("login.forgot")}</Line>
        <Line onClick={handleRegisterClick}>{t("login.register")}</Line>
      </LoginInputBox>
      {message && (
        <AlertBox>
          <TransitionAlerts>{message}</TransitionAlerts>
        </AlertBox>
      )}
    </LoginBox>
  );
};
