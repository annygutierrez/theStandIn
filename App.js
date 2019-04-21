import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={{ flex: 1 }} source={require('./src/assets/background.png')}>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
});
