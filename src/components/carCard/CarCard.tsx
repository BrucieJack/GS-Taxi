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

interface IProps {
  car?: string;
  driver?: string;
  star?: number;
  cost?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick: any;
}

export const CarCard = (props: IProps) => (
  <CarBox>
    <CarImg src={car} />
    <Car>{props.car}</Car>
    <Name>{props.driver}</Name>
    <RowBox>
      <Numbers>4.8</Numbers>
      <Star src={star} />
      <Line />
      <Numbers>${props.cost}</Numbers>
    </RowBox>
    <AcceptSmallButton onClick={props.handleClick}>Accept</AcceptSmallButton>
  </CarBox>
);
