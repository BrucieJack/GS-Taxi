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
import { BlackSmallButton } from "../../components/button/components";
import { useEffect, useState } from "react";
import BasicModal from "../../components/modal/BasicModal";
import { CarModal } from "../../components/modal/components";
import {
  CarBox,
  CarImg,
  InfoText,
  ItemText,
  TextBox,
  ValueText,
} from "../currentOrder/components";
import { Box } from "@mui/material";
import { useTripMutation } from "../../services/TripService";
import { ITrip } from "../../model/ITrip";

const colums2 = ["Date", "From", "To", "Driver", "Rating", "Cost", "Report"];

//доделать

export const ClientOrderHistory = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState({make: "", model: "", year: 0, color: ""})
  const handleOpen = (trip: ITrip) => {
    setModal({make: trip.driver?.car.make,
      model: trip.driver?.car.model,
      year: trip.driver?.car.year,
      color: trip.driver?.car.color})
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

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
          {trips.map(trip => (<Row>
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
              <>
                <Text>
                  {trip.driver.firstName + " " + trip.driver.lastName}
                  <BlackSmallButton onClick={() => handleOpen(trip)}>Car</BlackSmallButton>
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
          </Row>) )}
          
        </BasicTable>
      </TableBox>
    </OrderHistoryBox>
  );
};
