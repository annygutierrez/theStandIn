import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class App extends Component {
  render() {
    return (
      <ImageBackground imageStyle={{ height }} style={{ flex: 1 }} source={require('./src/assets/background.png')}>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
});
