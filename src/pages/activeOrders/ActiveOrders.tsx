import Header from "../../components/header/Header";
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
import "typeface-rasa";
import {
  AcceptMediumButton,
  AcceptSmallButton,
  CancelMediumButton,
} from "../../components/button/components";
import BasicModal from "../../components/modal/BasicModal";
import { Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { TField } from "../../components/inputs/TField";
import { PriceModal } from "../../components/modal/components";
import {  useDriverOrderMutation } from "../../services/OrderService";
import { useAppDispatch } from "../../hooks/redux";
import { IOrder } from "../../model/IOrder";
import { offerApi } from "../../services/OfferService";

export type OfferInput = {
  orderId: string
  price: number
}

export const ActiveOrders = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({id: "", who: "", from: "", to: ""})
  const [orders, setOrders] = useState(Array<IOrder>);
  const handleOpen = (order: IOrder) => {
    setModal({id: order.id,
       who: order.client?.firstName + " " + order.client?.lastName,
        from: order.source,
         to: order.destination})
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [getOrders, { data, isLoading, isSuccess, error, isError }] =
  useDriverOrderMutation();

  useEffect(() => {
    getOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
      console.log("грузим");
    } else if (isSuccess) {
      setOrders(data!)
      console.log(data);
    } else if (isError) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  

  return (
    <ActiveOrdersBox>
      <Header />
      <Title>Orders</Title>
      <Line />
      <OrdersBox>
        {orders.map(order => (<div key={order.id} ><Order>
          <Name>WHO:</Name>
          <Value>{order.client?.firstName + " " + order.client?.lastName}</Value>
          <Name>FROM:</Name>
          <Value>{order.source}</Value>
          <Name>TO:</Name>
          <Value>{order.destination}</Value>
          <AcceptSmallButton onClick={() => handleOpen(order)}>Offer</AcceptSmallButton>
        </Order>
        <BasicModal open={open} handleClose={undefined}>
          <PriceModal>
          <Formik
                initialValues={{ price: 0 }}
                onSubmit={(values) => {
                  const result: OfferInput = {
                    orderId: modal.id,
                    price: values.price
                  }
                  console.log(result)
                  dispatch(offerApi.endpoints.offerPrice.initiate(result)) 

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
              <CancelMediumButton onClick={handleClose}>Cancel</CancelMediumButton>
              <AcceptMediumButton type="submit">OK</AcceptMediumButton>
            </ButtonBox>
             </Form>
            </Formik>
          </PriceModal>
        </BasicModal></div>))}
      </OrdersBox>
    </ActiveOrdersBox>
  );
};
