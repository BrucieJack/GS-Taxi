export const modal = {
  box: {
    long: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 1100,
      height: 200,
      bgcolor: "background.paper",
      boxShadow: 24,
    },
    date: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 950,
      height: 360,
      bgcolor: "background.paper",
      boxShadow: 24,
    },
    price: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 900,
      height: 530,
      bgcolor: "background.paper",
      boxShadow: 24,
    },
    img: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 1100,
      height: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
    },
    rate: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      width: 781,
      height: 588,
      bgcolor: "background.paper",
      boxShadow: 24,
    },
  },
  insideBox: {
    long: {
      1: { display: "flex", justifyContent: "center" },
    },
    date: {
      1: { display: "flex", justifyContent: "center" },
      2: { display: "flex", justifyContent: "space-evenly", mt: 5 },
    },
    price: {
      1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        mt: 7,
      },
      2: { display: "flex", justifyContent: "center", mt: 3 },
      3: { display: "flex", justifyContent: "center", mt: 5 },
    },
    img: {
      1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        mt: 5,
      },
      2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mt: 2,
      },
    },
    rate: {
      1: { display: "flex", justifyContent: "center", mt: 3 },
      2: { display: "flex", justifyContent: "center", mt: 4 },
    },
  },
  text: {
    simpleText: {
      fontSize: 42,
      fontFamily: "Rasa",
      fontWeight: 400,
      lineHeight: 3,
      textAlign: "center",
    },
    simpleText2: {
      fontSize: 42,
      fontFamily: "Rasa",
      fontWeight: 400,
      lineHeight: 2,
      textAlign: "center",
    },
    block: {
      fontSize: 64,
      fontFamily: "Rasa",
      fontWeight: 700,
      lineHeight: 1.9,
      textAlign: "center",
      color: "#C4A267",
      mt: 2,
    },
    item: {
      fontSize: 48,
      fontFamily: "Rasa",
      fontWeight: 500,
      lineHeight: 1.2,
      textAlign: "left",
      color: "balck",
    },
    value: {
      fontSize: 48,
      fontFamily: "Rasa",
      fontWeight: 600,
      lineHeight: 1.2,
      textAlign: "left",
      color: "balck",
    },
    blue: {
      fontSize: 48,
      fontFamily: "Rasa",
      fontWeight: 600,
      lineHeight: 1.2,
      textAlign: "center",
      color: "#1BBDA0",
      mt: 2,
    },
    info: {
      fontSize: 64,
      fontFamily: "Rasa",
      fontWeight: 700,
      lineHeight: 1,
      textAlign: "center",
      color: "#C4A267",
    },
  },
  rating: { fontSize: "6rem", color: "#FFBC73" },
};
