# rn-theme-provider
This plugin allows you to easily integrate your own themes for your Rect native applications.

#Installation
* **NPM**: npm install -S rn-theme-provider
* **Yarn**: yarn add rn-theme-provider

# Usage
> `./src/themes/my-theme.js`
```javascript
export default {
  variables: {
    customWidth: 10,
    ...
  },
  palette: {
    blue: '#0000FF',
    red: '#FF0000',
    ...
  },
  styles: {
    // global classes
    prettyText: {
      backgroundColor: 'blue',
    },
  },
};

```
> `App.js`
```javascript
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'rn-theme-provider';
import {basic} from './src/themes';
import MyStyledComponent from './src/components/MyStyledComponent';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={basic}>
        <MyStyledComponent />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
```
> `./src/components/MyStyledComponent`
```javascript
import React from 'react';
import {View, Text} from 'react-native';
import {withStyles} from 'rn-theme-provider';

const TextComponent = ({classes}) => {
  return (
    <View>
      <Text style={classes.textStyles}>My pretty text</Text>
    </View>
  );
};

const styles = ({palette}) => {
  return {
    textStyles: {
      backgroundColor: palette.red,
    },
  };
};

export default withStyles(styles)(TextComponent);

```

