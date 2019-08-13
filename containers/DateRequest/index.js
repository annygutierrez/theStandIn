import React, { Component } from 'react';
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

class DateRequestContainer extends Component {

  state = {
    text: ''
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, paddingVertical: 22, paddingHorizontal: 30 }}>
        <Text style={{ color: '#00b0c9', fontSize: 35 }}>DATE NAME</Text>
        <TextInput
          style={{ height: 36, marginVertical: 8, fontSize: 14, color: '#333', fontSize: 16, paddingBottom: 4, borderBottomColor: '#e5e5e5', borderBottomWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder={'Describe your date'}
          placeholderTextColor={'#ababab'}
          style={{ height: 100, textAlignVertical: 'top', backgroundColor: '#ededed', marginTop: 16, paddingHorizontal: 8, fontSize: 16 }} />
      </View>
    );
  }
};

export default DateRequestContainer;
