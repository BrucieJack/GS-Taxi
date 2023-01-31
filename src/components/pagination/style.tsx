import { Box, Typography, styled as mui } from "@mui/material";
// import styled from "styled-components";

export const PaginationBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  margin: "0 auto",
  justifyContent: "center",
  marginTop: "5vh",
});

export const ActivePage = mui(Box)({
  width: "69px",
  height: "39px",
  borderRadius: "50px",
  background: "#494357",
  border: "2px solid #FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#FFFFFF",
  fontFamily: "Rasa",
  fontWeight: 700,
  fontSize: "1.8rem",
  marginRight: "1vw",
  cursor: "pointer",
});

export const Page = mui(Box)({
  width: "48px",
  height: "39px",
  borderRadius: "50px",
  background: "#898199",
  border: "1px solid #FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#FFFFFF",
  fontFamily: "Rasa",
  fontWeight: 700,
  fontSize: "1.8rem",
  marginRight: "1vw",
  cursor: "pointer",
});

export const PageSizeBox = mui(Box)({
  marginLeft: "40vw",
  marginTop: "5vh",
});

export const SizeText = mui(Typography)({
  fontWeight: 400,
  color: "#FFFFFF",
  fontFamily: "Rasa",
  fontSize: "1.8rem",
});

export const SizeTextBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
});

export const SizeBox = mui(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "3vw",
});
