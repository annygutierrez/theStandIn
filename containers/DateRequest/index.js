import React, { Component, Fragment } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  View,
  Easing,
  Animated,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Text
} from 'react-native';
import HeaderComponent from '../../components/Header';
import SwitchSelector from '../../components/SwitchSelector';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

class DateRequestContainer extends Component {

  state = {
    isOn: false,
    animatedValue: new Animated.Value(0),
    text: ''
  }

  toggleHandle() {
    this.setState(
      { isOn: !this.state.isOn },
      () => {
        Animated.timing(
          this.state.animatedValue,
          {
            toValue: this.state.isOn ? (width - 60) / 2 : 0,
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
      <Fragment>
        <SafeAreaView backgroundColor={'#00B0C9'}>
          <HeaderComponent />
        </SafeAreaView>
        <View style={{ backgroundColor: '#fff', flex: 1, paddingVertical: 22, paddingHorizontal: 30 }}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
            <Text style={{ color: '#00b0c9', fontSize: 30 }}>DATE NAME</Text>
            <TextInput
              style={{ height: 36, marginVertical: 8, fontSize: 14, color: '#333', fontSize: 16, paddingBottom: 0, borderBottomColor: '#e5e5e5', borderBottomWidth: 1 }}
              placeholder={'John Doe'}
              placeholderTextColor={'#CFCECE'}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
            <TextInput
              multiline={true}
              numberOfLines={10}
              placeholder={'Describe your date'}
              placeholderTextColor={'#ababab'}
              style={{ height: 110, textAlignVertical: 'top', backgroundColor: '#ededed', marginTop: 16, paddingHorizontal: 8, fontSize: 16, marginBottom: 20 }}
            />
            <SwitchSelector width={width - 60} height={54} firstOption={'FUNNY'} secondOption={'SERIOUS'} />
            <SwitchSelector width={width - 60} height={54} firstOption={'TALKER'} secondOption={'LISTENER'} />
            <SwitchSelector width={width - 60} height={54} firstOption={'OUTDOING'} secondOption={'CONSERVATIVE'} />
            <SwitchSelector width={width - 60} height={54} firstOption={'OUTDOING'} secondOption={'CONSERVATIVE'} />
            <SwitchSelector width={width - 60} height={54} firstOption={'OUTDOING'} secondOption={'CONSERVATIVE'} />
            <SwitchSelector width={width - 60} height={54} firstOption={'OUTDOING'} secondOption={'CONSERVATIVE'} />
          </ScrollView>
          <View style={{ backgroundColor: 'red', height: 60, marginHorizontal: 5 }}></View>
        </View>
      </Fragment>
    );
  }
};

export default DateRequestContainer;
