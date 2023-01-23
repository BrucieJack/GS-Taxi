import { useNavigate } from "react-router-dom";
import Header from "@components/header/Header";
import { BigBrownButton } from "@components/button/components";
import arrow from "./assets/arrow.png";
import {
  Best,
  ButtonBox,
  AdminHomeBox,
  AdminHomeTitleBox,
  Welcome,
  Line,
  Img,
} from "./components";
import { useAppSelector } from "@hooks/redux";

export const AdminHome = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  const handleReportClick = () => {
    navigate("/admin/reports");
  };
  const handleAllUsersClick = () => {
    navigate("/admin/allUsers");
  };

  return (
    <AdminHomeBox>
      <Header />
      <AdminHomeTitleBox>
        <Best>Administration</Best>
        <Welcome>{"Welcome " + user?.firstName + " " + user?.lastName}</Welcome>
      </AdminHomeTitleBox>
      <Line />
      <ButtonBox>
        <BigBrownButton data-testid="button" onClick={handleReportClick}>
          Reports
        </BigBrownButton>
        <BigBrownButton onClick={handleAllUsersClick}>All users</BigBrownButton>
      </ButtonBox>
      <Img src={arrow}></Img>
    </AdminHomeBox>
  );
};
