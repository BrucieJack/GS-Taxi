import Header from "../../components/header/Header";
import {
  Line,
  ActiveTripBox,
  TripBox,
  Title,
  CarImg,
  RowBox,
  TextBox,
  SimpleText,
  RatingText,
  FormBox,
  ButtonBox,
  StarRating,
} from "./components";
import "typeface-rasa";
import "typeface-rubik";
import {
  LongBlackButton,
  LongGreenButton,
  LongRedButton,
} from "../../components/button/components";
import BasicModal from "../../components/modal/BasicModal";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { field as inputStyle } from "../../components/inputs/style";
import { TField } from "@components/inputs/TField";
import { RatingModal } from "../../components/modal/components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { tripApi, useTripMutation } from "../../services/TripService";
import { ITrip } from "../../model/ITrip";
import { reportApi } from "../../services/ReportService";
import { userApi } from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import TransitionAlerts from "@components/alert/TransitionAlert";
import { AlertBox } from "@components/alert/style";
import { setAlert } from "@store/reducers/AlertSlice";

export const ActiveTrip = () => {
  const message = useAppSelector((state) => state.alert.message);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number | null>(2);
  const [open, setOpen] = useState(false);
  const [trip, setTrip] = useState(Array<ITrip>);
  const [isReport, setIsReport] = useState(false);
  const handleReportClick = () => setIsReport(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleSubmit = (values: {comment: string}, trip: ITrip) => {
    if (isReport) {
      const payload1 = {rating: value!*2, tripId: trip.id} 
      dispatch(userApi.endpoints.setRating.initiate({ id: trip.client.id, data: payload1}));
      const payload2 = {comment: values.comment, tripId: trip.id, driverId: trip.driver.id} 
      dispatch(reportApi.endpoints.report.initiate(payload2));
      dispatch(tripApi.endpoints.finishTrip.initiate(trip.id));
      dispatch(setAlert("Your treep was finished"))
      navigate("/");
    } else {
      const payload1 = {rating: value!*2, tripId: trip.id} 
      dispatch(userApi.endpoints.setRating.initiate({ id: trip.client.id, data: payload1}));
      dispatch(tripApi.endpoints.finishTrip.initiate(trip.id));
      dispatch(setAlert("Your treep was finished"))
      navigate("/");           
  };
  }
  const [getTrip, { data, isLoading, isSuccess, error, isError }] =
    useTripMutation();

  useEffect(() => {
    getTrip("true");
    dispatch(setAlert("Offer was accepted. Your trip is started")) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading) {
    } else if (isSuccess) {
      setTrip(data!);
    } else if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <ActiveTripBox>
      <Header />
      <Title>Active trip</Title>
      <Line />
      <TripBox>
        <RowBox>
          <CarImg />
          <TextBox>
            <SimpleText>From:</SimpleText>
            <SimpleText>To:</SimpleText>
            <br />
            <SimpleText>Price:</SimpleText>
            <SimpleText>Driver:</SimpleText>
            <SimpleText>Car:</SimpleText>
            <SimpleText>Rating:</SimpleText>
          </TextBox>
          <TextBox>
            <SimpleText>{trip[0]?.source}</SimpleText>
            <SimpleText>{trip[0]?.destination}</SimpleText>
            <br />
            <SimpleText>${trip[0]?.price}</SimpleText>
            <SimpleText>
              {trip[0]?.driver?.firstName + " " + trip[0]?.driver?.lastName}
            </SimpleText>
            <SimpleText>
              {trip[0]?.driver?.car.color +
                " " +
                trip[0]?.driver?.car.make +
                " " +
                trip[0]?.driver?.car.model +
                " " +
                trip[0]?.driver?.car.year}
            </SimpleText>
            <SimpleText>{trip[0]?.rating}</SimpleText>
          </TextBox>
        </RowBox>
        <LongBlackButton onClick={handleOpen}>Finish trip</LongBlackButton>
        <BasicModal handleClose={handleClose} open={open}>
          <RatingModal isReport={isReport}>
            <Formik
              initialValues={{ comment: "" }}
              onSubmit={(values) => {
                handleSubmit(values, trip[0])
              }}
            >
              <Form>
                <RatingText>Rate Driver</RatingText>
                <StarRating
                  name="half-rating"
                  precision={0.5}
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                {isReport && (
                  <FormBox>
                    <Field
                      name="comment"
                      placeholder=""
                      type="text"
                      component={TField}
                      sx={inputStyle.longinput}
                    />
                  </FormBox>
                )}
                <ButtonBox>
                  {!isReport && (
                    <LongRedButton onClick={handleReportClick}>
                      Report driver
                    </LongRedButton>
                  )}
                  <LongGreenButton type="submit">Submit</LongGreenButton>
                </ButtonBox>
              </Form>
            </Formik>
          </RatingModal>
        </BasicModal>
      </TripBox>
      {message && (<AlertBox><TransitionAlerts>{message}</TransitionAlerts></AlertBox>)}
    </ActiveTripBox>
  );
};
