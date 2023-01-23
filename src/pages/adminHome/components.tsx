import { Box, Typography, styled as mui } from "@mui/material";
import styled from "styled-components";

export const AdminHomeBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
});

export const AdminHomeTitleBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  marginLeft: "11vw",
  justifyContent: "space-between",
});

export const ButtonBox = mui(Box)({
  width: "32vw",
  display: "flex",
  justifyContent: "space-between",
  marginLeft: "19vw",
  marginTop: "10vh",
});

export const Best = mui(Typography)({
  width: "26vw",
  fontFamily: "Rasa",
  fontWeight: 300,
  fontSize: "6rem",
  color: "#FFFFFF",
  marginTop: "10vh",
});

export const Welcome = mui(Typography)({
  width: "26vw",
  fontFamily: "Rasa",
  fontWeight: 300,
  fontSize: "6rem",
  color: "#FFFFFF",
  textAlign: "right",
  marginRight: "2vw",
  lineHeight: "6rem",
});

export const Line = styled.hr`
  width: 14vw;
  height: 5px;
  background-color: #c4a267;
  border: 0;
  margin-left: 8vw;
`;

export const Img = styled.img`
  position: absolute;
  top: 60%;
  left 70%;
`;
