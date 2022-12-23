import Header from "../../components/header/Header";
import {
  Cell,
  Line,
  OrderHistoryBox,
  Row,
  TableBox,
  Text,
  Title,
} from "./components";
import "typeface-rasa";

import BasicTable from "../../components/table/Table";

import { useTripMutation } from "../../services/TripService";
import { useEffect, useState } from "react";
import { ITrip } from "../../model/ITrip";


const colums2 = ["Date", "From", "To", "Client", "Cost"];

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
      console.log(data);
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
        <BasicTable columns={colums2}>
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
