import { Box, styled } from "@mui/material";

export const ClientHomeBox = styled(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
});

export const ClientHomeTitleBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  marginLeft: "11vw",
  marginBottom: "3vh",
  justifyContent: "space-between",
});

export const MarketingBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: "10vw",
});

export const ButtonBox = styled(Box)({
  width: "32vw",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "19vw",
  marginTop: "4vh",
});

export const Best = styled(Box)({
  width: "26vw",
  fontFamily: "Rasa",
  fontWeight: 300,
  fontSize: "6rem",
  color: "#FFFFFF",
});

export const Welcome = styled(Box)({
  width: "26vw",
  fontFamily: "Rasa",
  fontWeight: 300,
  fontSize: "6rem",
  color: "#FFFFFF",
  textAlign: "right",
  marginRight: "2vw",
});

export const SimpleText = styled(Box)({
  marginTop: "4vh",
  width: "47vw",
  fontFamily: "Rasa",
  fontWeight: 400,
  fontSize: "3rem",
  color: "#FFFFFF",
  marginLeft: "11vh",
  marginBottom: "5vh",
});

export const Marketing = styled(Box)({
  fontFamily: "Rasa",
  fontWeight: 400,
  fontSize: "3rem",
  color: "#C4A267",
  marginRight: "1vw",
});
