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
<<<<<<< HEAD
import { useTripMutation } from "../../services/TripService";
import { useEffect, useState } from "react";
import { ITrip } from "../../model/ITrip";
=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd

const colums2 = ["Date", "From", "To", "Client", "Cost"];

export const DriverOrderHstory = () => {
<<<<<<< HEAD
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

=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
  return (
    <OrderHistoryBox>
      <Header />
      <Title>Order’s History</Title>
      <Line />
      <TableBox>
        <BasicTable columns={colums2}>
<<<<<<< HEAD
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
      
=======
          <Row>
            <Cell component="th" scope="row" align="center">
              <Text>01.11.2021</Text>
            </Cell>
            <Cell align="center">
              <Text>Chkalova street, 28/3</Text>
            </Cell>
            <Cell align="center">
              <Text>Lenina 53</Text>
            </Cell>
            <Cell align="center">
              <Text>Ivan Ivanov</Text>
            </Cell>
            <Cell align="center">
              <Text>$ 4.2</Text>
            </Cell>
          </Row>
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
        </BasicTable>
      </TableBox>
    </OrderHistoryBox>
  );
};
