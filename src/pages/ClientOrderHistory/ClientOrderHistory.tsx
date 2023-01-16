/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from "react";
import Header from "@components/header/Header";
import { Box } from "@mui/material";
import { useTripQuery } from "@services/TripService";
import { ITrip } from "@model/ITrip";
import BasicTable from "@components/table/Table";
import { BlackSmallButton } from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
import { CarModal } from "@components/modal/components";
import { ClientColumns } from "@components/table/consts";
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
import {
  CarBox,
  CarImg,
  InfoText,
  ItemText,
  TextBox,
  ValueText,
} from "@pages/currentOrder/components";

export const ClientOrderHistory = () => {
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

  // const [trips, setTrips] = useState(Array<ITrip>);
  const { data } = useTripQuery("false");

  // useEffect(() => {
  //   getTrips("false");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   if (isSuccess) {
  //     if (data) {
  //       setTrips(data);
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
        <BasicTable columns={ClientColumns}>
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
      </TableBox>
    </OrderHistoryBox>
  );
};
