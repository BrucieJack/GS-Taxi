import React from "react";
import "./App.css";
import "./components/button/button.css";
import { useTranslation } from "react-i18next";
import { Rating } from "@material-ui/core";
import { bgcolor } from "@material-ui/system";

function App() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState<number | null>(2);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <hr />
      <div>{t("title")}</div>
      <Rating
        name="half-rating"
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ fontSize: "4rem", color: "#FFBC73" }}
      />
    </div>
  );
}

export default App;
