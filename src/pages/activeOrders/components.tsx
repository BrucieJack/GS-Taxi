import { Box, Typography, styled as mui } from "@mui/material";
import styled from "styled-components";

export const ActiveOrdersBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
  alignItems: "center",
});

export const OrdersBox = mui(Box)({
  marginTop: "9vh",
  display: "flex",
  flexDirection: "column",
});

export const Order = mui(Box)({
  width: "77.6vw",
  height: "10vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(196, 162, 103, 0.7)",
});

export const Name = mui(Typography)({
  fontWeight: 300,
  fontSize: "3rem",
  fontFamily: "Rasa",
  color: "#000000",
});

export const Value = mui(Typography)({
  fontWeight: 300,
  fontSize: "3rem",
  fontFamily: "Rasa",
  color: "#ffffff",
  marginRight: "2vw",
});

export const Title = mui(Typography)({
  fontWeight: 300,
  fontSize: "4rem",
  color: "#ffffff",
  fontFamily: "Rasa",
  marginLeft: "7vw",
  marginRight: "81vw",
  marginTop: "2vh",
});

export const Line = styled.hr`
  width: 14vw;
  height: 5px;
  background-color: #c4a267;
  border: 0;
  margin-right: 84vw;
`;
