import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Box } from "@mui/material";
import { useDriverOrderQuery } from "@services/OrderService";
import { useAppDispatch, useMessageSelector } from "@hooks/redux";
import { IOrder } from "@model/IOrder";
import { offerApi } from "@services/OfferService";
import Header from "@components/header/Header";
import {
  AcceptMediumButton,
  AcceptSmallButton,
  CancelMediumButton,
} from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
import { TField } from "@components/inputs/TField";
import { PriceModal } from "@components/modal/components";
import "typeface-rasa";
import {
  ActiveOrdersBox,
  BlueText,
  ButtonBox,
  FormBox,
  ItemText,
  Line,
  Name,
  Order,
  OrdersBox,
  TextBox,
  Title,
  Value,
  ValueText,
} from "./components";
import TransitionAlerts from "@components/alert/TransitionAlert";
import { AlertBox } from "@components/alert/style";
import { setAlert } from "@store/reducers/AlertSlice";

export type OfferInput = {
  orderId: string;
  price: number;
};

const ActiveOrders = () => {
  const dispatch = useAppDispatch();
  const message = useMessageSelector();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({ id: "", who: "", from: "", to: "" });

  const handleOpen = (order: IOrder) => {
    setModal({
      id: order.id,
      who: order.client?.firstName + " " + order.client?.lastName,
      from: order.source,
      to: order.destination,
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const { data } = useDriverOrderQuery();
  const handleSubmit = (values: { price: number }) => {
    const result: OfferInput = {
      orderId: modal.id,
      price: values.price,
    };
    setOpen(false);
    dispatch(offerApi.endpoints.offerPrice.initiate(result));
    dispatch(setAlert("Your offer was successfully sent"));
  };

  return (
    <ActiveOrdersBox>
      <Header />
      <Title>Orders</Title>
      <Line />
      <OrdersBox>
        {data?.map((order) => (
          <div key={order.id}>
            <Order>
              <Name>WHO:</Name>
              <Value>
                {order.client?.firstName + " " + order.client?.lastName}
              </Value>
              <Name>FROM:</Name>
              <Value>{order.source}</Value>
              <Name>TO:</Name>
              <Value>{order.destination}</Value>
              <AcceptSmallButton onClick={() => handleOpen(order)}>
                Offer
              </AcceptSmallButton>
            </Order>
            <BasicModal open={open} handleClose={handleClose}>
              <PriceModal>
                <Formik
                  initialValues={{ price: 0 }}
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                >
                  <Form>
                    <TextBox>
                      <Box>
                        <ItemText>Who:</ItemText>
                        <ItemText>From:</ItemText>
                        <ItemText>To:</ItemText>
                      </Box>
                      <Box>
                        <ValueText>{modal.who}</ValueText>
                        <ValueText>{modal.from}</ValueText>
                        <ValueText>{modal.to}</ValueText>
                      </Box>
                    </TextBox>
                    <BlueText>Please offer your price for order</BlueText>
                    <FormBox>
                      <Field
                        name="price"
                        placeholder="Price"
                        type="number"
                        component={TField}
                      />
                    </FormBox>
                    <ButtonBox>
                      <CancelMediumButton onClick={handleClose}>
                        Cancel
                      </CancelMediumButton>
                      <AcceptMediumButton type="submit">OK</AcceptMediumButton>
                    </ButtonBox>
                  </Form>
                </Formik>
              </PriceModal>
            </BasicModal>
          </div>
        ))}
      </OrdersBox>
      {message && (
        <AlertBox>
          <TransitionAlerts>{message}</TransitionAlerts>
        </AlertBox>
      )}
    </ActiveOrdersBox>
  );
};

export default ActiveOrders;
