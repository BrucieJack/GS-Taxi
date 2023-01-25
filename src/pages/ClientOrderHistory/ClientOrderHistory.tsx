/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import Header from "@components/header/Header";
import { Box } from "@mui/material";
import { useLazyTripsQuery } from "@services/TripService";
import { ITrip } from "@model/ITrip";
import BasicTable from "@components/table/Table";
import { BlackSmallButton } from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
import { CarModal } from "@components/modal/components";
import { ClientColumns } from "@components/table/consts";
import {
  Cell,
  Line,
  NewCircularProgress,
  OrderHistoryBox,
  PaginationBox,
  Row,
  TableBox,
  Text,
  Title,
  TitleBox,
} from "./components";
import "typeface-rasa";
import {
  CarBox,
  CarImg,
  InfoText,
  ItemText,
  TextBox,
  ValueText,
} from "@pages/currentOrder/components";
import { PageSize } from "@components/pagination/PageSize";
import { Pagination } from "@components/pagination/Pagination";
import { useRole } from "@hooks/useRole";

export const ClientOrderHistory = () => {
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
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({
    make: "",
    model: "",
    year: 0,
    color: "",
  });
  const handleOpen = (trip: ITrip) => {
    setModal({
      make: trip.driver?.car.make,
      model: trip.driver?.car.model,
      year: trip.driver?.car.year,
      color: trip.driver?.car.color,
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [getTrips, { data, isLoading }] = useLazyTripsQuery();
  useRole("client");

  useEffect(() => {
    getTrips({ active: "false", page: page - 1, size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, size]);

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
        <BasicTable columns={ClientColumns}>
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
                <>
                  <Text>
                    {trip.driver.firstName + " " + trip.driver.lastName}
                    <BlackSmallButton onClick={() => handleOpen(trip)}>
                      Car
                    </BlackSmallButton>
                  </Text>
                  <BasicModal open={open} handleClose={handleClose}>
                    <CarModal>
                      <CarBox>
                        <Box sx={{ flexDirection: "column" }}>
                          <CarImg />
                        </Box>
                        <Box>
                          <InfoText>Info</InfoText>
                          <TextBox>
                            <Box sx={{ mr: 8 }}>
                              <ItemText>Make:</ItemText>
                              <ItemText>Model:</ItemText>
                              <ItemText>Year:</ItemText>
                              <ItemText>Color:</ItemText>
                            </Box>
                            <Box>
                              <ValueText>{modal.make}</ValueText>
                              <ValueText>{modal.model}</ValueText>
                              <ValueText>{modal.year}</ValueText>
                              <ValueText>{modal.color}</ValueText>
                            </Box>
                          </TextBox>
                        </Box>
                      </CarBox>
                    </CarModal>
                  </BasicModal>
                </>
              </Cell>
              <Cell align="center">
                <Text>{trip.rating}</Text>
              </Cell>
              <Cell align="center">
                <Text>${trip.price}</Text>
              </Cell>
              <Cell align="center">
                <Text>{}</Text>
              </Cell>
            </Row>
          ))}
        </BasicTable>
        <PaginationBox>
          {data?.total && (
            <Pagination
              page={page}
              handleClick={handlePageChange}
              size={Math.ceil(data?.total / size)}
            />
          )}
        </PaginationBox>
      </TableBox>
    </OrderHistoryBox>
  );
};
