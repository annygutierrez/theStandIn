import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

class SwitchSelectorComponent extends Component {

  state = {
    isOn: false,
    animatedValue: new Animated.Value(0)
  }

  toggleHandle() {
    this.setState(
      { isOn: !this.state.isOn },
      () => {
        Animated.timing(
          this.state.animatedValue,
          {
            toValue: this.state.isOn ? (this.props.width) / 2 : 0,
            duration: 500,         // in milliseconds, default is 500
            easing: Easing.bounce, // Easing function, default is Easing.inOut(Easing.ease)
            delay: 0,              // in milliseconds, default is 0
          }
        ).start()
      }
    )
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          {
            marginTop: 18,
            backgroundColor: '#ededed'
          },
          this.props.containerStyle,
          {
            height: this.props.height,
            borderRadius: this.props.height
          }
        ]}
        onPress={() => this.toggleHandle()}
      >
        <View style={{ flexDirection: 'row', position: 'absolute', justifyContent: 'space-around', alignItems: 'center', height: this.props.height, width: this.props.width }}>
          <Text style={{ color: this.state.isOn ? '#C4C4C4' : '#ededed', fontWeight: 'bold', fontSize: 16 }}>{this.props.firstOption}</Text>
          <Text style={{ color: this.state.isOn ? '#ededed' : '#C4C4C4', fontWeight: 'bold', fontSize: 16 }}>{this.props.secondOption}</Text>
        </View>
        <Animated.View style={{
          width: (this.props.width) / 2,
          height: this.props.height,
          borderRadius: this.props.height,
          backgroundColor: '#000e91',
          transform: [{
            translateX: this.state.animatedValue,
          }],
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            {this.state.isOn ? this.props.secondOption : this.props.firstOption}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
};

export default SwitchSelectorComponent;
