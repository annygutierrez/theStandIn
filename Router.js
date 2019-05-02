import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import React from 'react';
import HomeContainer from './src/containers/Home';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground
} from 'react-native';

export const createRootNavigator = (logIn = false) => {
  const commonNavigationOptions = {
    header: null
  };

  const LogIn = createStackNavigator(
    {
      Home: {
        screen: HomeContainer,
        navigationOptions: () => ({
          header: null
        })
      }
    },
    {
      navigationOptions: () => commonNavigationOptions
    }
  );

  const LogOut = createStackNavigator(
    {
      Home: {
        screen: HomeContainer,
        navigationOptions: () => ({
          header: null
        })
      }
    },
    {
      navigationOptions: () => commonNavigationOptions
    }
  );

  return createSwitchNavigator(
    {
      LogIn: { screen: LogIn },
      LogOut: { screen: LogOut }
    },
    {
      initialRouteName: logIn ? 'LogIn' : 'LogOut'
    }
  );
};
