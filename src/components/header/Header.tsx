import { Box, MenuItem, Select, Typography } from "@mui/material";
import "typeface-rubik";
import "typeface-rasa";
import i18n from "../../i18";
import { header as headerStyle } from "./style";

export default function Header() {
  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <Box sx={headerStyle.box.leng}>
        <Select
          id="locationSelect"
          sx={headerStyle.box.select}
          value={i18n.language}
          onChange={(e) => changeLanguage(e)}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Русский</MenuItem>
        </Select>
        <Typography sx={headerStyle.text.logout}>Log Out</Typography>
      </Box>
      <Box sx={headerStyle.box.title}>
        <Typography sx={headerStyle.text.title}>GeneralSoft Taxi</Typography>
      </Box>
    </>
  );
}
