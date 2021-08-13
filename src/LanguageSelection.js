import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";

const LanguageSelection = () => {
  const context = useContext(LocaleContext)
  return (
    <div className="haveMargin">
      <label className="labels">
        {context.localeObj.language} : {" "}
      </label>
      <select
        value={context.localeObj.locale}
        onChange={context.updateLocaleObj}
      >
        <option value="en-US">English</option>
        <option value="fr-FR">French</option>
        <option value="es-ES">Spanish</option>
      </select>
    </div>
  );
}

export default LanguageSelection;
