/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from "react";
import Header from "@components/header/Header";
import BasicTable from "@components/table/Table";
import { useTripQuery } from "@services/TripService";
import { DriverColumns } from "@components/table/consts";
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
  const { data } = useTripQuery("false");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (isSuccess) {
  //     if (data) {
  //     }
  //   } else if (isError) {
  //     console.log(error);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading]);

  return (
    <OrderHistoryBox>
      <Header />
      <Title>Order’s History</Title>
      <Line />
      <TableBox>
        <BasicTable columns={DriverColumns}>
          {data?.map((trip) => (
            <Row key={trip.id}>
              <Cell component="th" scope="row" align="center">
                <Text>{new Date(trip.createdAt!).toLocaleDateString()}</Text>
              </Cell>
              <Cell align="center">
                <Text>{trip.source}</Text>
              </Cell>
              <Cell align="center">
                <Text>{trip.destination}</Text>
              </Cell>
              <Cell align="center">
                <Text>
                  {trip.client.firstName + " " + trip.client.lastName}
                </Text>
              </Cell>
              <Cell align="center">
                <Text>${trip.price}</Text>
              </Cell>
            </Row>
          ))}
        </BasicTable>
      </TableBox>
    </OrderHistoryBox>
  );
};
