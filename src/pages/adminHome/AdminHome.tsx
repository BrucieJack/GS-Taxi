import { useTranslation } from "react-i18next";
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

export const AdminHome = () => {
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/admin/reports");
  };
  const handleAllUsersClick = () => {
    navigate("/admin/allUsers");
  };
  const { t } = useTranslation();

  return (
    <AdminHomeBox>
      <Header />
      <AdminHomeTitleBox>
        <Best>Administration</Best>
        <Welcome>{t("create_home.welcome")}</Welcome>
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
