import { Box, styled, Typography } from "@mui/material";

export const CreateOrderBox = styled(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
});

export const CreateOrderRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

export const CreateOrderLeft = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "23vw",
  height: "31vh",
  marginRight: "10vw",
  marginLeft: "2vw",
  marginTop: "46vh",
});

export const CreateOrderCenter = styled(Box)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "20vh",
});

export const CreateOrderMt = styled(Box)({
  marginTop: "4vh",
});

export const CreateOrderInput = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "24vw",
  height: "28vh",
  background: "#FFFEFE",
  textAlign: "center",
});

export const CreateOrderButton = styled(Box)({
  marginTop: "12vh",
});

export const CreateOrderRight = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginLeft: "0,4vw",
  marginTop: "5vh",
});

export const Destination = styled(Typography)({
  fontFamily: "Rasa",
  fontWeight: 700,
  fontSize: "3rem",
  color: "#C4A267",
  position: "absolute",
  left: 220,
  top: -20,
});

export const Source = styled(Typography)({
  fontFamily: "Rasa",
  fontWeight: 700,
  fontSize: "3rem",
  color: "#C4A267",
  position: "absolute",
  left: 40,
  bottom: -40,
});

export const SimpleText = styled(Typography)({
  width: "40vw",
  fontFamily: "Rasa",
  fontWeight: 400,
  lineHeight: 1.3,
  fontSize: "3rem",
  color: "#FFFFFF",
  textAlign: "right",
  marginBottom: "7vh",
});
