import { useEffect, useState } from "react";
import Header from "@components/header/Header";
import BasicTable from "@components/table/Table";
import { useTripMutation } from "@services/TripService";
import { DriverColumns } from "@components/table/consts";
import { ITrip } from "@model/ITrip";
import "typeface-rasa";
import {
  Cell,
  Line,
  OrderHistoryBox,
  Row,
  TableBox,
  Text,
  Title,
} from "./components";

export const DriverOrderHstory = () => {
  const [trips, setTrips] = useState(Array<ITrip>);
  const [getTrips, { data, isLoading, isSuccess, error, isError }] =
    useTripMutation();

  useEffect(() => {
    getTrips("false");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
    } else if (isSuccess) {
      setTrips(data!);
    } else if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <OrderHistoryBox>
      <Header />
      <Title>Order’s History</Title>
      <Line />
      <TableBox>
        <BasicTable columns={DriverColumns}>
          {trips.map(trip => (    <Row>
            <Cell component="th" scope="row" align="center">
              <Text>{trip.createdAt}</Text>
            </Cell>
            <Cell align="center">
              <Text>{trip.source}</Text>
            </Cell>
            <Cell align="center">
              <Text>{trip.destination}</Text>
            </Cell>
            <Cell align="center">
              <Text>{trip.client.firstName + " " + trip.client.lastName}</Text>
            </Cell>
            <Cell align="center">
              <Text>${trip.price}</Text>
            </Cell>
          </Row>))}
        </BasicTable>
      </TableBox>
    </OrderHistoryBox>
  );
};
