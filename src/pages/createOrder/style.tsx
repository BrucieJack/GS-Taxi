export const createOrder = {
  box: {
    main: {
      width: 1,
      height: 1080,
      display: "flex",
      flexDirection: "column",
      bgcolor: "#000000",
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
    left: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: 453,
      height: 345,
      mr: 26,
      ml: 7,
      mt: 63,
    },
    img: {
      position: "absolute",
    },
    center: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      mt: 27,
    },
    input: {
      display: "flex",
      flexDirection: "column",
      width: 468,
      height: 303,
      background: "#FFFEFE",
      textAlign: "center",
    },
    mt: {
      mt: 5.5,
    },
    button: {
      mt: 17,
    },
    right: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      ml: 1,
      mt: 7,
    },
  },
  text: {
    destination: {
      fontFamily: "Rasa",
      fontWeight: 700,
      fontSize: 48,
      color: "#C4A267",
      position: "absolute",
      left: 220,
      top: -20,
    },
    source: {
      fontFamily: "Rasa",
      fontWeight: 700,
      fontSize: 48,
      color: "#C4A267",
      position: "absolute",
      left: 40,
      bottom: -40,
    },
    simpleText: {
      width: 770,
      fontFamily: "Rasa",
      fontWeight: 400,
      lineHeight: 1.3,
      fontSize: 48,
      color: "#FFFFFF",
      textAlign: "right",
      mb: 10,
    },
  },
  other: {
    line: {
      width: "390px",
      background: "#C4A267",
      height: "5px",
      marginRight: "65px",
      border: 0,
    },
  },
};
