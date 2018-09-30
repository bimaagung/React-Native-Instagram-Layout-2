import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from "./Components/MainScreen";

console.disableYellowBox = true;
console.ignoredYellowBox = ['Virtual','Warning'];

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({


  Main: {
    screen: MainScreen
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
