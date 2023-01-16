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
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#000000",
  alignItems: "center",
  textAlign: "left",
});

// export const TableBox = mui(Box)({
//   width: "84.7vw",
//   marginTop: "5vh",
// });

export const TitleBox = mui(Box)({
  display: "flex",
  flexDirection: "row",
  marginRight: "55vw",
});

export const BlockBox = mui(Box)({
  position: "relative",
  // top: "50%",
  right: "25%",
  backgroundColor: "black",
  width: "8vw",
  height: "7vh",
  opacity: 0.75,
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
  marginRight: "65vw",
  marginTop: "2vh",
});

export const FormBox = mui(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "2vh",
});

// export const BrownText = mui(Typography)({
//   fontWeight: 300,
//   fontSize: "4rem",
//   color: "#C4A267",
//   fontFamily: "Rasa",
//   marginRight: "5vw",
//   marginTop: "2vh",
// });

export const Line = styled.hr`
  width: 15vw;
  height: 5px;
  background-color: #c4a267;
  border: 0;
  margin-right: 75vw;
`;

export const Text = mui(Typography)({
  color: "#FFFFFF",
  fontSize: "1.75rem",
  fontWeight: 400,
  textTransform: "none",
});

export const TableBox = styled.div`
  width: 78vw;
  margin-top: 5vh;
`;
