import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import ButtonComponent from '../../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/images/main_logo.png';

class LogInContainer extends Component {

  state = {
    text: '',
    hideElement: false
  }

  componentDidMount() {
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    );
  }

  startSession() {
    const navigateAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "LoaderScreen" })],
    });
  
    this.props.navigation.dispatch(navigateAction);
  }

  _keyboardDidShow() {
    this.setState({ hideElement: true });
  }

  _keyboardDidHide() {
    this.setState({ hideElement: false });
  }

  render() {
    const formOpenStyle = Platform.OS === 'ios' ? { paddingBottom: 240 } : null;
    return (
      <KeyboardAvoidingView enabled style={{ flex: 1 }}>
        <LinearGradient colors={['#00B0C9', '#0064AE', '#000E91']} locations={[0.0, 0.16, 0.31]} style={{ flex: 1 }}>
          {!this.state.hideElement ? <View style={{ flex: 11, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Image source={logo} style={{ width: 253, height: 247 }} />
          </View> : null}
          <View style={[{ flex: 11.5, paddingHorizontal: 65, paddingTop: !this.state.hideElement ? 34 : 60 }, !this.state.hideElement ? null : { justifyContent: 'center', ...formOpenStyle }]}>
            <TextInput
              style={{ height: 46, backgroundColor: '#4c56b1', marginVertical: 8, paddingHorizontal: 14, fontSize: 16 }}
              placeholder={'Username'}
              onChangeText={(text) => this.setState({ text })}
              placeholderTextColor={'#fff'}
              value={this.state.text}
            />
            <TextInput
              style={{ height: 46, backgroundColor: '#4c56b1', marginVertical: 8, paddingHorizontal: 14, fontSize: 16 }}
              placeholder={'Password'}
              onChangeText={(text) => this.setState({ text })}
              placeholderTextColor={'#fff'}
              value={this.state.text}
            />
            <ButtonComponent action={() => this.startSession()} text={'Log in'} />
          </View>
          {
            !this.state.hideElement ? <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={{ flex: 2.5, backgroundColor: '#4c56b1', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>Don’t have an account? <Text style={{ fontWeight: 'bold' }}>Sign up.</Text></Text>
            </TouchableOpacity> : null
          }
        </LinearGradient>
      </KeyboardAvoidingView>
    );
  }
};

// const styles = StyleSheet.create({

// });

export default LogInContainer;
