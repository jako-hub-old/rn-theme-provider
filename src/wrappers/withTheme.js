import React from "react";
import ThemeContext from "../contexts/ThemeContext";

export default WrappedComponent => (props) => (
  <ThemeContext.Consumer>
    {({styles={}}) => (<WrappedComponent classes={styles} {...props}/>)}
  </ThemeContext.Consumer>
);
