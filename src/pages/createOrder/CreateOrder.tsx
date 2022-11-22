import { Box, Typography } from "@mui/material";
import { Button } from "../../components/button/Button";
import Header from "../../components/header/Header";
import { button as buttonStyle } from "../../components/button/style";
import { Form, Formik, Field } from "formik";
import { TField } from "../../components/inputs/TField";
import { field as inputStyle } from "../../components/inputs/style";
import { createOrder as createOrderStyle } from "./style";
import * as Yup from "yup";
import arrow from "./arrow.png";
import { useTranslation } from "react-i18next";
import "../../i18";

const SignupSchema = Yup.object().shape({
  source: Yup.string().required("No first name provided."),
  destination: Yup.string().required("No last name provided."),
});

export const CreateOrder = () => {
  const { t } = useTranslation();
  return (
    <Box sx={createOrderStyle.box.main}>
      <Header />
      <Box sx={createOrderStyle.box.row}>
        <Box sx={createOrderStyle.box.left}>
          <Typography sx={createOrderStyle.text.destination}>
            {t("client_order.destination")}
          </Typography>
          <Box component="img" sx={createOrderStyle.box.img} src={arrow}></Box>
          <Typography sx={createOrderStyle.text.source}>
            {t("client_order.source")}
          </Typography>
        </Box>
        <Box sx={createOrderStyle.box.center}>
          <Formik
            initialValues={{ source: "", destination: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              //   const value = {
              //     email: values.email,
              //     password: values.password,
              //   };
              //   loginUser(value);
            }}
          >
            {({ values, isValid }) => (
              <Form>
                <Box sx={createOrderStyle.box.input}>
                  <Box sx={createOrderStyle.box.mt}>
                    <Field
                      name="source"
                      placeholder="Source"
                      type="input"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                  <Box sx={createOrderStyle.box.mt}>
                    <Field
                      name="destination"
                      placeholder="Destination"
                      type="input"
                      component={TField}
                      sx={inputStyle.input}
                    />
                  </Box>
                </Box>
                <Box sx={createOrderStyle.box.button}>
                  <Button
                    label="Order"
                    sx={
                      !isValid || values.source === ""
                        ? buttonStyle.round.brownBigDisabled
                        : buttonStyle.round.brownBig
                    }
                    // disabled={!isValid || values.source === ""}
                  />
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
        <Box sx={createOrderStyle.box.right}>
          <Typography sx={createOrderStyle.text.simpleText}>
            {t("client_order.text")}
          </Typography>
          <hr style={createOrderStyle.other.line} />
        </Box>
      </Box>
    </Box>
  );
};
