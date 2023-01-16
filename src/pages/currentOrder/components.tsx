import { Box, Typography, styled as mui } from "@mui/material";
import styled from "styled-components";

export const Title = mui(Typography)({
  fontWeight: 300,
  fontSize: "4rem",
  color: "#ffffff",
  fontFamily: "Rasa",
  marginRight: "4vw",
  marginLeft: "74vw",
  marginTop: "2vh",
});

export const SimpleText = mui(Typography)({
  fontWeight: 300,
  fontSize: "2.25rem",
  color: "#ffffff",
  marginRight: "4vw",
  marginLeft: "68vw",
  marginTop: "2vh",
  marginBottom: "10vh",
});

export const ItemText = mui(Typography)({
  fontSize: "3rem",
  fontFamily: "Rasa",
  fontWeight: 500,
  textAlign: "left",
  color: "black",
  lineHeight: "4rem",
});

export const ValueText = mui(Typography)({
  fontSize: "3rem",
  fontFamily: "Rasa",
  fontWeight: 600,
  textAlign: "left",
  color: "black",
  lineHeight: "4rem",
});

export const InfoText = mui(Typography)({
  fontSize: "4rem",
  fontFamily: "Rasa",
  fontWeight: 700,
  textAlign: "center",
  color: "#C4A267",
});

export const CurrentOrderBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
  alignItems: "center",
  textAlign: "left",
});

export const CardBox = mui(Box)({
  marginLeft: "20vw",
});

export const CarBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marhinTop: 5,
});

export const TextBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 2,
});

export const CarImg = styled.img`
  width: 24vw;
  height: 28vh;
  border-radius: 8px;
`;

export const Line = styled.hr`
  width: 20vw;
  height: 5px;
  background-color: #c4a267;
  border: 0;
  margin-right: 71.5vw;
`;

export const Numbers = mui(Typography)({
  fontWeight: 700,
  fontFamily: "Rasa",
  fontSize: "1.9rem",
  color: "#000000",
});

export const RowBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const LineStar = styled.hr`
  width: 3vh;
  height: 0;
  border: 1px solid #000000;
  transform: rotate(90deg);
  margin-top: 1.8vh;
  margin-left: 0.2vw;
  margin-right: 1vw;
`;

export const Star = styled.img`
  width: 1.5vw;
  height: 2.8vh;
  margin-top: 0.4vh;
  margin-left: 0.2vw;
`;

export const ButtonBox = mui(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "3.1vh",
});

export const AcceptText = mui(Typography)({
  fontSize: "2.6rem",
  fontFamily: "Rasa",
  fontWeight: 400,
  textAlign: "center",
});
