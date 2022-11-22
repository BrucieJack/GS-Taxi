import { Box, Typography } from "@mui/material";
import { Button } from "../../components/button/Button";
import Header from "../../components/header/Header";
import { button as buttonStyle } from "../../components/button/style";
import { clientHome as clientHomeStyle } from "./style";
import { useTranslation } from "react-i18next";

export const ClientHome = () => {
  const { t } = useTranslation();
  return (
    <Box sx={clientHomeStyle.box.main}>
      <Header />
      <Box sx={clientHomeStyle.box.title}>
        <Typography sx={clientHomeStyle.text.best}>
          {t("create_home.best")}
        </Typography>
        <Typography sx={clientHomeStyle.text.welcome}>
          {t("create_home.welcome")}
        </Typography>
      </Box>
      <hr style={clientHomeStyle.other.line} />
      <Typography sx={clientHomeStyle.text.simpleText}>
        {t("create_home.text")}
      </Typography>
      <Box sx={clientHomeStyle.box.marketing}>
        <Typography sx={clientHomeStyle.text.marketing}>
          {t("create_home.marketing1")}
        </Typography>
        <div style={clientHomeStyle.other.circle}></div>

        <Typography sx={clientHomeStyle.text.marketing}>
          {t("create_home.marketing2")}
        </Typography>
        <div style={clientHomeStyle.other.circle}></div>
        <Typography sx={clientHomeStyle.text.marketing}>
          {t("create_home.marketing3")}
        </Typography>
      </Box>
      <Box sx={clientHomeStyle.box.buttons}>
        <Button label="Create order" sx={buttonStyle.round.brownBig} />
        <Button label="View history" sx={buttonStyle.round.brownBig} />
      </Box>
    </Box>
  );
};
