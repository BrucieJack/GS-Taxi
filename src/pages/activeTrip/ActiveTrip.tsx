import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useMessageSelector } from "../../hooks/redux";
import { tripApi, useLazyGetTripQuery } from "../../services/TripService";
import { ITrip } from "../../model/ITrip";
import { reportApi } from "../../services/ReportService";
import { userApi } from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { setAlert } from "@store/reducers/AlertSlice";
import TransitionAlerts from "@components/alert/TransitionAlert";
import { AlertBox } from "@components/alert/style";
import { field as inputStyle } from "../../components/inputs/style";
import { TField } from "@components/inputs/TField";
import { RatingModal } from "../../components/modal/components";
import "typeface-rasa";
import "typeface-rubik";
import Header from "../../components/header/Header";
import {
  LongBlackButton,
  LongGreenButton,
  LongRedButton,
} from "../../components/button/components";
import BasicModal from "../../components/modal/BasicModal";
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

const ActiveTrip = () => {
  const message = useMessageSelector();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(2);
  const [open, setOpen] = useState(false);
  const [isReport, setIsReport] = useState(false);
  const handleReportClick = () => setIsReport(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleSubmit = (values: { comment: string }, trip: ITrip) => {
    if (isReport) {
      const payload1 = { rating: value * 2, tripId: trip.id };
      dispatch(
        userApi.endpoints.setRating.initiate({
          id: trip.client.id,
          data: payload1,
        })
      );
      const payload2 = {
        comment: values.comment,
        tripId: trip.id,
        driverId: trip.driver.id,
      };
      dispatch(reportApi.endpoints.report.initiate(payload2));
      dispatch(tripApi.endpoints.finishTrip.initiate(trip.id));
      dispatch(setAlert("Your treep was finished"));
      navigate("/");
    } else {
      const payload1 = { rating: value * 2, tripId: trip.id };
      dispatch(
        userApi.endpoints.setRating.initiate({
          id: trip.client.id,
          data: payload1,
        })
      );
      dispatch(tripApi.endpoints.finishTrip.initiate(trip.id));
      dispatch(setAlert("Your treep was finished"));
      navigate("/");
    }
  };
  const [getTrips, { data, isLoading, isSuccess }] = useLazyGetTripQuery();

  useEffect(() => {
    getTrips("true");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isSuccess]);

  useEffect(() => {
    dispatch(setAlert("Offer was accepted. Your trip is started"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {/* <SimpleText>Rating:</SimpleText> */}
          </TextBox>
          {data !== undefined && (
            <TextBox>
              <SimpleText>{data[0]?.source}</SimpleText>
              <SimpleText>{data[0]?.destination}</SimpleText>
              <br />
              <SimpleText>${data[0]?.price}</SimpleText>
              <SimpleText>
                {data[0]?.driver?.firstName + " " + data[0]?.driver?.lastName}
              </SimpleText>
              <SimpleText>
                {data[0]?.driver?.car.color +
                  " " +
                  data[0]?.driver?.car.make +
                  " " +
                  data[0]?.driver?.car.model +
                  " " +
                  data[0]?.driver?.car.year}
              </SimpleText>
              {/* {data[0].rating && <SimpleText>{data[0].rating}</SimpleText>} */}
            </TextBox>
          )}
        </RowBox>
        <LongBlackButton onClick={handleOpen}>Finish trip</LongBlackButton>
        <BasicModal handleClose={handleClose} open={open}>
          <RatingModal isReport={isReport}>
            <Formik
              initialValues={{ comment: "" }}
              onSubmit={(values) => {
                if (data) {
                  handleSubmit(values, data[0]);
                }
              }}
            >
              <Form>
                <RatingText>Rate Driver</RatingText>
                <StarRating
                  name="half-rating"
                  precision={0.5}
                  value={value}
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setValue(newValue);
                    }
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
      {message && (
        <AlertBox>
          <TransitionAlerts>{message}</TransitionAlerts>
        </AlertBox>
      )}
    </ActiveTripBox>
  );
};

export default ActiveTrip;
