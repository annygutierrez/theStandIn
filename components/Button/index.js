import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

class ButtonComponent extends Component {

  render () {
    return (
        <TouchableOpacity onPress={() => this.props.action() } style={{ borderWidth: 1, borderColor: '#4c56b1', paddingVertical: 14, marginTop: 18, alignItems: 'center' }}>
             <Text style={{ color: '#4c56b1', fontSize: 16, fontWeight: 'bold' }}>{ this.props.text }</Text>
        </TouchableOpacity>
    );
  }
};

export default ButtonComponent;
