import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";

const ThemeContainer = () => {
  const context = useContext(LocaleContext)
  return (
    <div className="haveMargin">
      <label className="labels">
        {context.localeObj.themeLabel}:{" "}
      </label>
      {context.theme === "light" ? (
        <span>
          {context.localeObj.light}
        </span>
      ) : (
        <span>
          {context.localeObj.dark}
        </span>
      )}
      <input type="checkbox" onChange={context.updateTheme} />
    </div>
  );
}

export default ThemeContainer;
