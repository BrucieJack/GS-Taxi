import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/redux";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { CarCard } from "@components/carCard/CarCard";
import { AcceptModal, CarModal } from "@components/modal/components";
import Header from "@components/header/Header";
import {
  AcceptMediumButton,
  BigBrownButton,
  CancelMediumButton,
} from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
import { orderApi } from "@services/OrderService";
import { useLazyClientOfferQuery } from "@services/OfferService";
import { IOffer } from "@model/IOffer";
import { tripApi } from "@services/TripService";
import "typeface-rasa";
import star from "./assets/star.png";
import {
  AcceptText,
  ButtonBox,
  CancelBox,
  CarBox,
  CardBox,
  CarImg,
  CurrentOrderBox,
  InfoText,
  ItemText,
  Line,
  LineStar,
  NoDriversBox,
  NoDriversText,
  Numbers,
  RowBox,
  SimpleText,
  Star,
  TextBox,
  Title,
  ValueText,
} from "./components";
import { NewCircularProgress } from "@pages/ClientOrderHistory/components";

export const CurrentOrder = () => {
  const dispatch = useAppDispatch();
  const [openCar, setOpenCar] = useState(false);
  const [modal, setModal] = useState({
    id: "",
    make: "",
    model: "",
    year: 0,
    color: "",
    price: 0,
  });
  const handleCarOpen = (offer: IOffer) => {
    setModal({
      id: offer.id,
      make: offer.driver?.car.make,
      model: offer.driver?.car.model,
      year: offer.driver?.car.year,
      color: offer.driver?.car.color,
      price: offer.price,
    });
    setOpenCar(true);
  };
  const handleCarClose = () => setOpenCar(false);
  const [openAccept, setOpenAccept] = useState(false);
  const handleOpenAccept = () => setOpenAccept(true);
  const handleCloseAccept = () => setOpenAccept(false);
  const [offers, setOffers] = useState(Array<IOffer>);
  const navigate = useNavigate();
  const [fromTo, setFromTo] = useState("");

  const [getOffers, { data, isLoading, isSuccess, error, isError }] =
    useLazyClientOfferQuery();

  async function getOrderId(): Promise<void> {
    const order = await dispatch(orderApi.endpoints.clientOrder.initiate(null));
    if ("data" in order && order.data) {
      setFromTo(order.data.source + " - " + order.data.destination);
      getOffers(order.data.id);
    }
  }

  const handleAccept = (id: string) => {
    dispatch(tripApi.endpoints.activateTrip.initiate({ offerId: id }));
    navigate("/activeTrip");
  };

  const handleCancel = async () => {
    const order = await dispatch(orderApi.endpoints.clientOrder.initiate(null));
    if ("data" in order && order.data) {
      dispatch(orderApi.endpoints.cancelOrder.initiate(order.data.id));
      navigate("/");
    }
  };

  useEffect(() => {
    getOrderId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setOffers(data);
      }
    } else if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <CurrentOrderBox>
      <Header />
      <BasicModal open={isLoading} handleClose={undefined}>
        <NewCircularProgress size={"15rem"} />
      </BasicModal>
      <Title>Current order</Title>
      <Line />
      <SimpleText>{fromTo}</SimpleText>
      {offers.length === 0 && (
        <>
          <NoDriversBox>
            <NoDriversText>
              No drivers found at this time. Refresh the list to see driver‘s
              offers.
            </NoDriversText>
          </NoDriversBox>
          <CancelBox>
            <BigBrownButton onClick={handleCancel}>Cancel order</BigBrownButton>
          </CancelBox>
        </>
      )}
      <CardBox>
        <Grid container sx={{ width: 2 / 3 }}>
          {offers.map((offer) => (
            <Grid item xs={4} key={offer.id}>
              <CarCard
                handleClick={() => handleCarOpen(offer)}
                driver={offer.driver?.firstName + " " + offer.driver?.lastName}
                car={offer.driver?.car.make + " " + offer.driver?.car.model}
                cost={offer.price}
              />
              <BasicModal open={openCar} handleClose={handleCarClose}>
                <CarModal>
                  <CarBox>
                    <Box sx={{ flexDirection: "column" }}>
                      <CarImg />
                      <RowBox>
                        <Numbers>4</Numbers>
                        <Star src={star} />
                        <LineStar />
                        <Numbers>${modal.price}</Numbers>
                      </RowBox>
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
                      <AcceptMediumButton onClick={handleOpenAccept}>
                        Accept
                      </AcceptMediumButton>
                    </Box>
                  </CarBox>
                  <BasicModal open={openAccept} handleClose={handleCloseAccept}>
                    <AcceptModal>
                      <AcceptText>
                        Are you sure you want to accept the offer from Ivan
                        Ivanov?
                      </AcceptText>
                      <ButtonBox>
                        <CancelMediumButton onClick={handleCloseAccept}>
                          Cancel
                        </CancelMediumButton>
                        <AcceptMediumButton
                          onClick={() => handleAccept(modal.id)}
                        >
                          OK
                        </AcceptMediumButton>
                      </ButtonBox>
                    </AcceptModal>
                  </BasicModal>
                </CarModal>
              </BasicModal>
            </Grid>
          ))}
        </Grid>
      </CardBox>
    </CurrentOrderBox>
  );
};
