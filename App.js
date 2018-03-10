import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import ListScreen from "./components/ListScreen.js";
import ItemDetailsScreen from "./components/ItemDetailsScreen.js";

const RootStack = StackNavigator(
  {
    Home: {
      screen: ListScreen,
    },
    Details: {
      screen: ItemDetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
