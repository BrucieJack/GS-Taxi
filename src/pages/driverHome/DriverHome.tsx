import Header from "@components/header/Header";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BigBrownButton } from "@components/button/components";
import { clientHome as clientHomeStyle } from "./style";
import {
  Best,
  ButtonBox,
  ClientHomeBox,
  ClientHomeTitleBox,
  Marketing,
  MarketingBox,
  SimpleText,
  Welcome,
} from "./styles";

export const DriverHome = () => {
  const navigate = useNavigate();

  const handleCreateOrderClick = () => {
    navigate("/driver/activeOrders");
  };

  const handleViewHistoryClick = () => {
    navigate("/driver/ordersHistory");
  };

  const { t } = useTranslation();

  return (
    <ClientHomeBox>
      <Header />
      <ClientHomeTitleBox>
        <Best>{t("create_home.best")}</Best>
        <Welcome>{t("create_home.welcome")}</Welcome>
      </ClientHomeTitleBox>
      <hr style={clientHomeStyle.other.line} />
      <SimpleText>{t("create_home.text")}</SimpleText>
      <MarketingBox>
        <Marketing>{t("create_home.marketing1")}</Marketing>
        <div style={clientHomeStyle.other.circle}></div>
        <Marketing>{t("create_home.marketing2")}</Marketing>
        <div style={clientHomeStyle.other.circle}></div>
        <Marketing>{t("create_home.marketing3")}</Marketing>
      </MarketingBox>
      <ButtonBox>
        <BigBrownButton onClick={handleCreateOrderClick}>
          Start trip
        </BigBrownButton>
        <BigBrownButton onClick={handleViewHistoryClick}>
          View history
        </BigBrownButton>
      </ButtonBox>
    </ClientHomeBox>
  );
};
