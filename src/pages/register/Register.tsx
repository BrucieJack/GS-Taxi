import { Form, Formik, Field } from "formik";
import * as React from "react";
import { Box, MenuItem } from "@mui/material";
import { useRegisterUserMutation } from "../../services/AuthService";
import { useTranslation } from "react-i18next";
import { AuthButton } from "../../components/button/components";
import {
  RegisterBox,
  RegisterColumn,
  RegisterComponent,
  RegisterMt,
  RegisterRow,
  // RegisterSmall,
  SimpleText,
  Title,
} from "./components";
import { TField } from "../../components/inputs/TField";
import { RegisterSchema } from "../../validation";

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
  const { t } = useTranslation();
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  React.useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }

    if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <RegisterBox>
      <Title>{t("register.title")}</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
          firstName: "",
          lastName: "",
          make: "",
          model: "",
          year: "",
          color: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          if (values.role === "client") {
            const value = {
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
              role: values.role,
            };
            registerUser(value);
          } else {
            const value = {
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
              role: values.role,
              car: {
                make: values.make,
                model: values.model,
                year: values.year,
                color: values.color,
              },
            };
            registerUser(value);
          }
        }}
      >
        {({ values, errors, isValid }) => (
          <RegisterComponent isOpen={values.role === "driver"}>
            <Form>
              <RegisterRow>
                <Box>
                  <RegisterMt>
                    <Field
                      name="email"
                      placeholder="Email"
                      type="email"
                      component={TField}
                    />
                  </RegisterMt>
                  <RegisterMt>
                    <Field
                      name="password"
                      placeholder="Password"
                      type="password"
                      component={TField}
                    />
                  </RegisterMt>
                  <RegisterMt>
                    <Field
                      name="confirmPassword"
                      placeholder="Confirm password"
                      defaultValue=""
                      type="password"
                      component={TField}
                    />
                  </RegisterMt>
                  <RegisterMt>
                    <Field
                      name="firstName"
                      placeholder="First name"
                      type="input"
                      component={TField}
                    />
                  </RegisterMt>
                  <RegisterMt>
                    <Field
                      name="lastName"
                      placeholder="Last name"
                      type="input"
                      component={TField}
                    />
                  </RegisterMt>
                  <RegisterMt>
                    <Field
                      as="select"
                      control="select"
                      id="role"
                      name="role"
                      label="Role"
                      component={TField}
                      select
                    >
                      <MenuItem value={"client"}>
                        {t("register.client")}
                      </MenuItem>
                      <MenuItem value={"driver"}>
                        {t("register.driver")}
                      </MenuItem>
                    </Field>
                  </RegisterMt>
                </Box>
                {values.role === "driver" && (
                  <RegisterColumn>
                    <SimpleText>{t("register.car")}</SimpleText>
                    <RegisterMt>
                      <Field
                        name="make"
                        placeholder="Make"
                        type="input"
                        component={TField}
                      />
                    </RegisterMt>
                    <RegisterMt>
                      <Field
                        name="model"
                        placeholder="Model"
                        type="input"
                        component={TField}
                      />
                    </RegisterMt>
                    <RegisterMt>
                      <Field
                        name="year"
                        placeholder="Year"
                        type="input"
                        component={TField}
                      />
                    </RegisterMt>
                    <RegisterMt>
                      <Field
                        name="color"
                        placeholder="Color"
                        type="input"
                        component={TField}
                      />
                    </RegisterMt>
                  </RegisterColumn>
                )}
              </RegisterRow>
              <AuthButton
                disabled={!isValid || values.email === ""}
                type="submit"
              >
                Register
              </AuthButton>
            </Form>
          </RegisterComponent>
        )}
      </Formik>
    </RegisterBox>
  );
};
