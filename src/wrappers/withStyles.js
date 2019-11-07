import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import {StyleSheet} from "react-native";

/**
 * This HOC allows to connect any other component with the theme variables.
 * @author Jorge Alejandro Quiroz Serna <jakop.box@gmail.com>
 * @param componentStyles
 */
export default (componentStyles) => WrappedComponent =>
  class extends React.PureComponent {
    static contextType = ThemeContext;
    processedStyles = {};

    constructor(props, context) {
      super(props, context);
      this.initializeStyles(context);
    }

    initializeStyles(context) {
      if(componentStyles instanceof Function) {
        this.processedStyles = StyleSheet.create(componentStyles({...context}) || {}) ;
      } else if(componentStyles instanceof Object) {
        this.processedStyles = StyleSheet.create(componentStyles);
      } else {
        this.processedStyles = {};
      }
    }

    render() {
      const {styles={}} = this.context || {};
      return <><WrappedComponent themeClasses={styles} classes={this.processedStyles} /></>;
    }
  };
