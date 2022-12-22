import { Box, styled as mui, Typography } from "@mui/material";
import styled from "styled-components";

export const RegisterBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#000000",
});

export const RegisterBig = mui(Box)({
  width: "50vw",
  height: "69vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "#ffffff",
});

export const RegisterSmall = mui(Box)({
  width: "26vw",
  height: "69vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "#ffffff",
});

export const RegisterComponent = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "50vw" : "26vw")};
  height: 69vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #ffffff;
`;

export const RegisterRow = mui(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const RegisterColumn = mui(Box)({
  marginLeft: "4vw",
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
});

export const RegisterMt = mui(Box)({
  marginTop: "2vh",
});

export const Title = mui(Typography)({
  fontWeight: 400,
  fontSize: "3.2rem",
  lineHeight: 2,
  color: "#FFFFFF",
});

export const SimpleText = mui(Typography)({
  fontWeight: 400,
  fontSize: "2.25rem",
  textAlign: "left",
  color: "#000000",
  marginLeft: "1vw",
});
