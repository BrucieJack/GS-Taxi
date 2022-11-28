import Header from "../../components/header/Header";
import {
  ActiveOrdersBox,
  Line,
  Name,
  Order,
  OrdersBox,
  Title,
  Value,
} from "./components";
import "typeface-rasa";
import { AcceptSmallButton } from "../../components/button/components";

export const ActiveOrders = () => {
  return (
    <ActiveOrdersBox>
      <Header />
      <Title>Orders</Title>
      <Line />
      <OrdersBox>
        <Order>
          <Name>WHO:</Name>
          <Value>Vasya Pupkin</Value>
          <Name>FROM:</Name>
          <Value>Chkalova street 28/3</Value>
          <Name>TO:</Name>
          <Value>Lenina 51</Value>
          <AcceptSmallButton>Offer</AcceptSmallButton>
        </Order>
      </OrdersBox>
    </ActiveOrdersBox>
  );
};
