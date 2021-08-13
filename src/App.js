import React, { useState } from "react";
import localesData from "./data.json";

import "./styles.css";

import LocaleContext from "./LocaleContext";

import LanguageSelection from "./LanguageSelection";
import ThemeContainer from "./ThemeContainer";
import Content from "./Content";

const App = () => {
  const [theme, setTheme] = useState("light")
  const [currLocale, setCurrLocale] = useState(localesData[0])

  const updateTheme = e => e.target.checked ? setTheme("light") : setTheme("dark")
  const updateLocaleObj = e => {
    const newLocale = localesData.filter(loc => loc.locale === e.target.value)[0]
    setCurrLocale(newLocale)
  }
  
  return (
    <div className="App">
      <LocaleContext.Provider
        value={{
          theme,
          localeCodes: localesData.map(data => data.locale),
          localeObj: localesData.filter(data => data.locale === currLocale.locale)[0],
          updateTheme: updateTheme,
          updateLocaleObj: updateLocaleObj
        }}
      >
        <div className={theme}>
          <LanguageSelection />
          <ThemeContainer />
          <Content />
        </div>
      </LocaleContext.Provider>
    </div>
  );

}

export default App;
