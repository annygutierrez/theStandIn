import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import box from '../../assets/images/box.png';
import emptyText from '../../assets/images/emptyText.png';

class DateRequestContainer extends Component {

  state= {
  }

  render () {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Date request</Text>
        </View>
    );
  }
};

export default DateRequestContainer;
