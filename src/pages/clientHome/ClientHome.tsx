import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@hooks/redux";
import Header from "@components/header/Header";
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
import { AlertBox } from "@components/alert/style";
import TransitionAlerts from "@components/alert/TransitionAlert";

export const ClientHome = () => {
  const navigate = useNavigate();
  const message = useAppSelector((state) => state.alert.message);
  const user = useAppSelector((state) => state.user.user);

  const handleCreateOrderClick = () => {
    if (user?.currentOrder) {
      navigate("/currentOrder");
    } else {
      navigate("/createOrder");
    }
  };
  const handleViewHistoryClick = () => {
    navigate("/ordersHistory");
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
        <BigBrownButton data-testid="button" onClick={handleCreateOrderClick}>
          Create order
        </BigBrownButton>
        <BigBrownButton onClick={handleViewHistoryClick}>
          View history
        </BigBrownButton>
      </ButtonBox>
      {message && (
        <AlertBox>
          <TransitionAlerts>{message}</TransitionAlerts>
        </AlertBox>
      )}
    </ClientHomeBox>
  );
};
