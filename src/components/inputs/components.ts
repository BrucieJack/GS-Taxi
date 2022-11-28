import { styled, TextField } from "@mui/material";

export const Input = styled(TextField)({
  width: "20vw",
  "& .MuiInputBase-root": {
    height: "7vh",
  },
});

export const FileInput = styled(TextField)({
  "& .MuiInputBase-root": {
    position: "absolute",
    width: "14vw",
    height: "9vh",
    top: "-4.4vh",
    left: "-11.7vw",
    opacity: "0",
    borderRadius: 50,
  },
});
