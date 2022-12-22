import React from "react";
import car from "./assets/car.png";
import star from "./assets/star.png";
import {
  Car,
  CarBox,
  CarImg,
  Line,
  Name,
  Numbers,
  RowBox,
  Star,
} from "./components";
import { AcceptSmallButton } from "../button/components";

export const CarCard = () => (
  <CarBox>
    <CarImg src={car} />
    <Car>Chevrolet Camaro</Car>
    <Name>Ivan Ivanov</Name>
    <RowBox>
      <Numbers>4.8</Numbers>
      <Star src={star} />
      <Line />
      <Numbers>$5.3</Numbers>
    </RowBox>
    <AcceptSmallButton>Accept</AcceptSmallButton>
  </CarBox>
);
