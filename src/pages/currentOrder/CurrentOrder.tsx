import Header from "../../components/header/Header";
import {
  AcceptText,
  ButtonBox,
  CarBox,
  CardBox,
  CarImg,
  CurrentOrderBox,
  InfoText,
  ItemText,
  Line,
  LineStar,
  Numbers,
  RowBox,
  SimpleText,
  Star,
  TextBox,
  Title,
  ValueText,
} from "./components";
import "typeface-rasa";
import { Box, Grid} from "@mui/material";
import { CarCard } from "../../components/carCard/CarCard";
import { AcceptModal, CarModal } from "../../components/modal/components";
import { useEffect, useState } from "react";
import star from "./assets/star.png";
import {
  AcceptMediumButton,
  CancelMediumButton,
} from "../../components/button/components";
import BasicModal from "../../components/modal/BasicModal";
import { useAppDispatch } from "../../hooks/redux";
import { orderApi } from "../../services/OrderService";
import { useClientOfferMutation } from "../../services/OfferService";
import { IOffer } from "../../model/IOffer";
import { tripApi } from "../../services/TripService";
import { useNavigate } from "react-router-dom";

export const CurrentOrder = () => {
  const dispatch = useAppDispatch();
  const [open1, setOpen1] = useState(false);
  const [modal, setModal] = useState({id: "", make: "", model: "", year: 0, color: "", price: 0})
  const handleOpen1 = (offer: IOffer) => {
    console.log(offer)
    setModal({
      id: offer.id,
      make: offer.driver?.car.make,
      model: offer.driver?.car.model,
      year: offer.driver?.car.year,
      color: offer.driver?.car.color,
      price: offer.price,

    })
    console.log(modal)
    setOpen1(true)
  };
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [offers, setOffers] = useState(Array<IOffer>);
  const navigate = useNavigate();
  const [fromTo, setFromTo] = useState("");
  

  const [getOffers, { data, isLoading, isSuccess, error, isError }] =
    useClientOfferMutation();

  async function getOrderId(): Promise<void> {
    const order = await dispatch(orderApi.endpoints.clientOrder.initiate(null));
    if ("data" in order) {
      setFromTo(order.data.source + " - " + order.data.destination)
      getOffers(order.data.id);
    }
  }

  const handleAccept = (id: string) => {
    dispatch(tripApi.endpoints.activateTrip.initiate({offerId: id}));
    navigate("/activeTrip");
  }

  useEffect(() => {
    getOrderId();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
    } else if (isSuccess) {
      setOffers(data!);
    } else if (isError) {
      console.log(error);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);


  return (
    <CurrentOrderBox>
      <Header />
      <Title>Current order</Title>
      <Line />
      <SimpleText>{fromTo}</SimpleText>
      <CardBox>
        <Grid container sx={{ width: 2 / 3 }}>
          {offers.map(offer => (<Grid item xs={4} key={offer.id}>
            <CarCard handleClick={() => handleOpen1(offer)} 
            driver={offer.driver?.firstName + " " + offer.driver?.lastName} 
            car={offer.driver?.car.make + " " + offer.driver?.car.model} 
            cost={offer.price}/>
            <BasicModal open={open1} handleClose={undefined}>
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
                    <AcceptMediumButton onClick={handleOpen2}>
                      Accept
                    </AcceptMediumButton>
                  </Box>
                </CarBox>
                <BasicModal open={open2} handleClose={undefined}>
                  <AcceptModal>
                    <AcceptText>
                      Are you sure you want to accept the offer from Ivan
                      Ivanov?
                    </AcceptText>
                    <ButtonBox>
                      <CancelMediumButton onClick={handleClose2}>
                        Cancel
                      </CancelMediumButton>
                      <AcceptMediumButton onClick={() => handleAccept(modal.id!)}>OK</AcceptMediumButton>
                    </ButtonBox>
                  </AcceptModal>
                </BasicModal>
              </CarModal>
            </BasicModal>
          </Grid>))}
        </Grid>
      </CardBox>
    </CurrentOrderBox>
  );
};
