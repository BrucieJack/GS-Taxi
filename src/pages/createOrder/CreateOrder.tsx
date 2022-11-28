import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import { Form, Formik, Field } from "formik";
import { createOrder as createOrderStyle } from "./style";
import arrow from "./assets/arrow.png";
import { useTranslation } from "react-i18next";
import "../../i18";
import {
  CreateOrderBox,
  CreateOrderButton,
  CreateOrderCenter,
  CreateOrderInput,
  CreateOrderLeft,
  CreateOrderMt,
  CreateOrderRight,
  CreateOrderRow,
  Destination,
  SimpleText,
  Source,
} from "./styles";
import { BigBrownButton } from "../../components/button/components";
import { TField } from "../../components/inputs/TField";
import { OrderSchema } from "../../validation";
import { useSendOrderMutation } from "../../services/OrderService";
import { useEffect } from "react";

export type OrderInput = {
  source: string;
  destination: string;
};

export const CreateOrder = () => {
  const [createOrder, { isLoading, isSuccess, error, isError }] =
    useSendOrderMutation();
  const { t } = useTranslation();
  const handleCreateOrder = (values: OrderInput) => {
    console.log("start");
    const value = {
      source: values.source,
      destination: values.destination,
    };
    createOrder(value);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }

    if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  return (
    <CreateOrderBox>
      <Header />
      <CreateOrderRow>
        <CreateOrderLeft>
          <Destination>{t("client_order.destination")}</Destination>
          <Box sx={{ position: "absolute" }} component="img" src={arrow}></Box>
          <Source>{t("client_order.source")}</Source>
        </CreateOrderLeft>
        <CreateOrderCenter>
          <Formik
            initialValues={{ source: "", destination: "" }}
            validationSchema={OrderSchema}
            onSubmit={(values) => handleCreateOrder(values)}
          >
            {({ values, isValid }) => (
              <Form>
                <CreateOrderInput>
                  <CreateOrderMt>
                    <Field
                      name="source"
                      placeholder="Source"
                      type="input"
                      component={TField}
                    />
                  </CreateOrderMt>
                  <CreateOrderMt>
                    <Field
                      name="destination"
                      placeholder="Destination"
                      type="input"
                      component={TField}
                    />
                  </CreateOrderMt>
                </CreateOrderInput>
                <CreateOrderButton>
                  <BigBrownButton type="submit">Order</BigBrownButton>
                </CreateOrderButton>
              </Form>
            )}
          </Formik>
        </CreateOrderCenter>
        <CreateOrderRight>
          <SimpleText>{t("client_order.text")}</SimpleText>
          <hr style={createOrderStyle.other.line} />
        </CreateOrderRight>
      </CreateOrderRow>
    </CreateOrderBox>
  );
};
