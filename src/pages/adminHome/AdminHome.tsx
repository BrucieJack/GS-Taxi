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
import { useRole } from "@hooks/useRole";

export const AdminHome = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/admin/reports");
  };
  const handleAllUsersClick = () => {
    navigate("/admin/allUsers");
  };
  const userName = localStorage.getItem("userName");
  useRole("admin");

  return (
    <AdminHomeBox>
      <Header />
      <AdminHomeTitleBox>
        <Best>Administration</Best>
        <Welcome>{"Welcome " + userName}</Welcome>
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
