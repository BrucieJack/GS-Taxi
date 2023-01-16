import BasicModal from "./BasicModal";
import Modal from "@mui/material/Modal";
import { Box, Typography, styled as mui, Rating } from "@mui/material";
import styled from "styled-components";

export const PriceModal = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "47vw",
  height: "51vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const CarModal = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "57vw",
  height: "43.5vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const AcceptModal = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "57vw",
  height: "18.5vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const RatingModalSmall = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "41.6vw",
  height: "35vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const RatingModalBig = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "41.6vw",
  height: "54vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const BlockModal = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "57.3vw",
  height: "25vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const BlockDateModal = mui(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "49.4vw",
  height: "33.3vh",
  backgroundColor: "white",
  opacity: 1,
  boxShadow: "24",
});

export const RatingModal = styled.div<{ isReport: boolean }>`
  height: ${({ isReport }) => (isReport ? "54vh" : "35vh")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 41.6vw;
  background-color: white;
  opacity: 1;
  box-shadow: 24rem;
`;
