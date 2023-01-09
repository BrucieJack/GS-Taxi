import { Box, styled as mui } from "@mui/material";

export const alert = {
  color: {
    red: { bgcolor: "#CF6402" },
    yellow: { bgcolor: "#E1CB00" },
    green: { bgcolor: "#00CB82" },
  },
};

export const AlertBox = mui(Box)({
  position: "absolute",
  top: "85%",
  left: "65%",
  width: "31vw",
});
