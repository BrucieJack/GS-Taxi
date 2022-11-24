import { Button, styled } from "@mui/material";

export const AuthButton = styled(Button)({
  "&.MuiButton-root": {
    width: "20vw",
    height: "7vh",
    backgroundColor: "#00a1e5",
    fontSize: "2rem",
    color: "white",
    marginTop: "2vh",
  },
  "&.Mui-disabled": {
    width: "20vw",
    height: "7vh",
    backgroundColor: "#AEAEAE",
    fontSize: "2rem",
    color: "white",
    marginTop: "2vh",
  },
});

export const BigBrownButton = styled(Button)({
  "&.MuiButton-root": {
    width: "14vw",
    height: "9vh",
    backgroundColor: "#C4A267",
    fontSize: "2.25rem",
    borderRadius: 50,
    fontFamily: "Rasa",
    fontWeight: 700,
    textTransform: "none",
    color: "white",
  },
});

export const AcceptSmallButton = styled(Button)({
  "&.MuiButton-root": {
    width: "7vw",
    height: "4vh",
    backgroundColor: "#5DCE7C",
    fontSize: "1.9rem",
    borderRadius: 50,
    fontFamily: "Rasa",
    fontWeight: 700,
    textTransform: "none",
    color: "white",
  },
});
