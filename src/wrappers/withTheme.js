import React from "react";
import ThemeContext from "../contexts/ThemeContext";

export default WrappedComponent => (props) => (
  <ThemeContext.Consumer>
    {(processedStyles) => (<WrappedComponent classes={processedStyles} {...props}/>)}
  </ThemeContext.Consumer>
);
