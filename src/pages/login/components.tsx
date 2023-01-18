import { Box, styled, Typography } from "@mui/material";

export const LoginBox = styled(Box)({
  width: "99.1vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#000000",
});

export const LoginInputBox = styled(Box)({
  width: "26vw",
  height: "56vh",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "#ffffff",
});

export const LoginInput = styled(Box)({
  marginTop: "4vh",
});

export const Row = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

export const ResetRow = styled(Box)({
  marginLeft: "2vw",
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
});

export const LoginRow = styled(Box)({
  marginLeft: "2vw",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Title = styled(Typography)({
  fontWeight: 400,
  fontSize: "3.2rem",
  lineHeight: 2,
  color: "#FFFFFF",
});

export const Check = styled(Typography)({
  fontWeight: 400,
  fontSize: "1.6rem",
});

export const ResetText = styled(Typography)({
  marginTop: "1vh",
  marginLeft: "2vw",
  fontWeight: 400,
  fontSize: "1.6rem",
});

export const Line = styled(Typography)({
  fontWeight: 400,
  fontSize: "1.6rem",
  marginTop: "2vh",
  textDecoration: "underline",
});
