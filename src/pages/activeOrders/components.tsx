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
<<<<<<< HEAD
  marginBottom: "2vh",
=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
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
<<<<<<< HEAD

export const TextBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: "4vh",
});

export const FormBox = mui(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "2vh",
});

export const ButtonBox = mui(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "3.1vh",
});

export const ItemText = mui(Typography)({
  fontSize: "3rem",
  fontFamily: "Rasa",
  fontWeight: 500,
  textAlign: "left",
  color: "balck",
});

export const ValueText = mui(Typography)({
  fontSize: "3rem",
  fontFamily: "Rasa",
  fontWeight: 600,
  textAlign: "left",
  color: "balck",
});

export const BlueText = mui(Typography)({
  fontSize: "3rem",
  fontFamily: "Rasa",
  fontWeight: 600,
  textAlign: "center",
  color: "#1BBDA0",
  marginTop: "1.8vh",
});
=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
