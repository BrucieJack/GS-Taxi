export const header = {
  box: {
    leng: {
      width: 1,
      height: 49,
      background: "rgba(60, 50, 52, 0.9)",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    select: {
      fontFamily: "Rasa",
      fontWeight: 400,
      fontSize: 28,
      borderRadius: 0,
      color: "#FFFFFF",
      "& .MuiInputBase-root": {
        height: 49,
      },

      "& .MuiOutlinedInput-notchedOutline": {
        border: 0,
        borderRadius: 0,
      },
      mr: 3,
    },
    title: {
      width: 1,
      height: 116,
      background: "#241D1E",
      opacity: 0.9,
      display: "flex",
      alignItems: "center",
    },
  },
  text: {
    logout: {
      fontFamily: "Rasa",
      fontWeight: 400,
      fontSize: 28,
      color: "#FFFFFF",
      mr: 4,
      cursor: "pointer",
    },
    title: {
      fontFamily: "Rubik",
      fontWeight: 400,
      fontSize: 90,
      lineHeight: 1,
      color: "#C4A267",
      ml: 20,
    },
  },
};
