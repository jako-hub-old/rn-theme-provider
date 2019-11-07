import React from 'react';
import { StyleSheet } from "react-native";
import ThemeContext from "../contexts/ThemeContext";

/**
 * Allows you to initialize theme variables and styles.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 */
class ThemeProvider extends React.PureComponent {
  theme = {};

  constructor(props) {
    super(props);
    this.initializeTheme();
  }

  initializeTheme() {
    const { theme={} } = this.props;
    const {styles={}, variables={}, palette={}} = theme;
    this.theme = {
      styles : StyleSheet.create(styles),
      variables,
      palette,
    };
  }

  render() {
    const {children} = this.props;
    return (<ThemeContext.Provider value={this.theme}>{children}</ThemeContext.Provider>);
  }
}

export default ThemeProvider;
