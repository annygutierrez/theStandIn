import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './router';

const AppContainer = createAppContainer(createRootNavigator());

export default class App extends Component {
  render() {
    return <AppContainer />
  }
};
