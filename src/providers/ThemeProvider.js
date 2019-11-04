import React from 'react';
import { StyleSheet } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

class ThemeProvider extends React.PureComponent {
  styles = {};

  constructor(props) {
    super(props);
    this.initializeStyles();
  }

  initializeStyles() {
    const { theme={} } = this.props;
    this.styles = StyleSheet.create(theme);
  }

  render() {
    const {children} = this.props;
    return (<ThemeContext.Provider value={this.styles}>{children}</ThemeContext.Provider>);
  }
}

export default ThemeProvider;
