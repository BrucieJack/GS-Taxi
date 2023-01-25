/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import Header from "@components/header/Header";
import BasicTable from "@components/table/Table";
import { useLazyTripsQuery } from "@services/TripService";
import { DriverColumns } from "@components/table/consts";
import { PageSize } from "@components/pagination/PageSize";
import { Pagination } from "@components/pagination/Pagination";
import BasicModal from "@components/modal/BasicModal";
import { NewCircularProgress } from "@pages/ClientOrderHistory/components";
import "typeface-rasa";
import {
  Cell,
  Line,
  OrderHistoryBox,
  Row,
  TableBox,
  Text,
  Title,
  TitleBox,
} from "./components";
import { useRole } from "@hooks/useRole";

export const DriverOrderHstory = () => {
  //Page
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  //Size
  const [size, setSize] = useState(10);
  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
  };

  const [getTrips, { data, isLoading }] = useLazyTripsQuery();

  useEffect(() => {
    getTrips({ active: "false", page: page - 1, size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, size]);

  useRole("driver");

  return (
    <OrderHistoryBox>
      <Header />
      <BasicModal open={isLoading} handleClose={undefined}>
        <NewCircularProgress size={"15rem"} />
      </BasicModal>
      <TitleBox>
        <div>
          <Title>Order’s History</Title>
          <Line />
        </div>
        <PageSize size={size} handleChange={handleSizeChange} />
      </TitleBox>
      <TableBox>
        <BasicTable columns={DriverColumns}>
          {data?.items.map((trip) => (
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
        {data?.total && (
          <Pagination
            page={page}
            handleClick={handlePageChange}
            size={Math.ceil(data?.total / size)}
          />
        )}
      </TableBox>
    </OrderHistoryBox>
  );
};
