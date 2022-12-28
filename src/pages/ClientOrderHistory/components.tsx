import {
  Box,
  Typography,
  styled as mui,
  TableRow,
  TableCell,
} from "@mui/material";
import styled from "styled-components";

export const OrderHistoryBox = mui(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
  alignItems: "center",
  textAlign: "left",
});

export const TableBox = mui(Box)({
  width: "84.7vw",
  marginTop: "5vh",
});

export const Row = mui(TableRow)({
  textAlign: "center",
});

export const Cell = mui(TableCell)({
  border: 1,
  borderStyle: "solid",
  borderColor: "black",
});

export const Title = mui(Typography)({
  fontWeight: 300,
  fontSize: "4rem",
  color: "#ffffff",
  fontFamily: "Rasa",
  marginRight: "74vw",
  marginLeft: "4vw",
  marginTop: "2vh",
});

export const Line = styled.hr`
  width: 20vw;
  height: 5px;
  background-color: #c4a267;
  border: 0;
  margin-right: 71.5vw;
`;

export const Text = mui(Typography)({
  color: "#FFFFFF",
  fontSize: "1.75rem",
  fontWeight: 400,
  textTransform: "none",
});
