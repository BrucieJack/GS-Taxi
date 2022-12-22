import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const ActiveTripBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
  alignItems: "center",
  textAlign: "left",
});

export const TripBox = mui(Box)({
  width: "68vw",
  height: "51.4vh",
  marginTop: "5vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(196, 162, 103, 0.7)",
});

export const RowBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  marginTop: "9vh",
  marginLeft: "3vw",
  marginBottom: "4vh",
});

export const StarRating = mui(Rating)({
  "&.MuiRating-root": {
    fontSize: "6rem",
    color: "#FFBC73",
    marginLeft: "10vw",
  },
});

export const TextBox = mui(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "2vw",
});

export const FormBox = mui(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "2vh",
});

export const ButtonBox = mui(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "3vh",
});

export const Title = mui(Typography)({
  fontWeight: 300,
  fontSize: "4rem",
  color: "#ffffff",
  fontFamily: "Rasa",
  marginRight: "74vw",
  marginLeft: "4vw",
  marginTop: "2vh",
});

export const SimpleText = mui(Typography)({
  fontWeight: 400,
  fontFamily: "Rubik",
  fontSize: "2.25rem",
  lineHeight: "3rem",
  color: "#FFFFFF",
});

export const RatingText = mui(Typography)({
  fontSize: "2.6rem",
  fontFamily: "Rasa",
  fontWeight: 400,
  textAlign: "center",
  marginTop: "3vh",
});

export const Line = styled.hr`
  width: 20vw;
  height: 5px;
  background-color: #c4a267;
  border: 0;
  margin-right: 71.5vw;
`;

export const CarImg = styled.img`
  width: 24vw;
  height: 28vh;
  border-radius: 8px;
`;
