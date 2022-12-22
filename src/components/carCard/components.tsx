import { Box, styled as mui, Typography } from "@mui/material";
import styled from "styled-components";

export const CarBox = mui(Box)({
  width: "13vw",
  height: "32.3vh",
  background: "#AEAEAE",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "7vh",
});

export const CarImg = styled.img`
  margin-top: 0.9vh;
  width: 11.5vw;
  height: 13vh;
  border-radius: 8px;
`;

export const Name = mui(Typography)({
  fontWeight: 500,
  fontFamily: "Rasa",
  fontSize: "1.9rem",
  lineHeight: 2,
  color: "#000000",
  textAlign: "center",
});

export const Car = mui(Typography)({
  fontWeight: 700,
  fontFamily: "Rasa",
  fontSize: "1.5rem",
  textAlign: "center",
  color: "#000000",
});

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

export const Line = styled.hr`
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
