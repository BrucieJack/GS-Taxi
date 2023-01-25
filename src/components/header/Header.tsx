import { Box, MenuItem, Select, Typography } from "@mui/material";
import "typeface-rubik";
import "typeface-rasa";
import i18n from "../../i18";
import { header as headerStyle } from "./style";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/reducers/AuthSlice";
import { removeUser } from "@store/reducers/UserSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeUser());
    navigate("/login");
  };

  const userRole = localStorage.getItem("userRole");

  const handleHome = () => {
    if (userRole === "client") {
      navigate("/");
    } else if (userRole === "driver") {
      navigate("/driver/home");
    } else if (userRole === "admin") {
      navigate("/admin");
    }
  };

  return (
    <>
      <Box sx={headerStyle.box.leng}>
        <Typography sx={headerStyle.text.logout} onClick={handleHome}>
          Home
        </Typography>
        <Select
          id="locationSelect"
          sx={headerStyle.box.select}
          value={i18n.language}
          onChange={(e) => changeLanguage(e)}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Русский</MenuItem>
        </Select>
        <Typography sx={headerStyle.text.logout} onClick={handleLogout}>
          Log Out
        </Typography>
      </Box>
      <Box sx={headerStyle.box.title}>
        <Typography sx={headerStyle.text.title}>GeneralSoft Taxi</Typography>
      </Box>
    </>
  );
}
