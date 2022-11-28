import { Box, Typography, styled as mui } from "@mui/material";
import styled from "styled-components";

export const PhotoPageBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#000000",
});

export const PhotoBox = mui(Box)({
  width: "57.6vw",
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  marginTop: "5vh",
  backgroundColor: "rgba(196, 162, 103, 0.7)",
});

export const RowPhoto = mui(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Container = mui(Box)({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  marginTop: "4vh",
  marginRight: "7vw",
  marginLeft: "3vw",
});

export const CropContainer = mui(Box)({
  width: "28vw",
  height: "34.3vh",
});

export const CropController = mui(Box)({
  display: "flex",
  flexDirection: "column",
  width: "28vw",
  position: "absolute",
  bottom: -15,
});

export const ButtonBox = mui(Box)({
  display: "flex",
  flexDirection: "column",
  marginTop: "5vh",
});

export const MBox = mui(Box)({
  marginTop: "5vh",
});

export const SimpleText = mui(Typography)({
  fontWeight: 400,
  fontSize: "2.25rem",
  color: "#000000",
});

export const Title = mui(Typography)({
  fontWeight: 500,
  fontSize: "3rem",
  color: "#000000",
});

export const IMG = styled.img`
  width: 28vw;
  height: 34.3vh;
  object-fit: cover;
  margin-top: 4vh;
  margin-right: 7vw;
  margin-left: 3vw;
`;
