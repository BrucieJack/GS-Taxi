import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(5, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const RegisterSchema = Yup.object().shape({
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

export const OrderSchema = Yup.object().shape({
  source: Yup.string().required("No first name provided."),
  destination: Yup.string().required("No last name provided."),
});
