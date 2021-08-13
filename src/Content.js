import React, { useContext } from "react";
import LocaleContext from "./LocaleContext";

const Content = () => {
  const context = useContext(LocaleContext)
  return <h2>{context.localeObj.content}</h2>;
}

export default Content;
