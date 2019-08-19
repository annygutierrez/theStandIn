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
import LinearGradient from 'react-native-linear-gradient';
import { isIphoneX } from '../../utils/is-iphone-x';

const BOTTOM_SPACE = isIphoneX() ? 34 : 18;

const { width } = Dimensions.get('window');

class DateRequestContainer extends Component {

  state = {
    text: ''
  }


  render() {
    return (
      <Fragment>
        <SafeAreaView backgroundColor={'#00B0C9'}>
          <HeaderComponent />
        </SafeAreaView>
        <View style={{ backgroundColor: '#fff', flex: 1, paddingTop: 22 }}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }} style={{ flexGrow: 1, paddingHorizontal: 30 }}>
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
              style={{ height: 110, textAlignVertical: 'top', backgroundColor: '#ededed', marginTop: 16, paddingHorizontal: 8, fontSize: 16, marginBottom: 10 }}
            />
            <SwitchSelector
              width={width - 60}
              height={54}
              firstOption={'FUNNY'}
              secondOption={'SERIOUS'}
            />
            <SwitchSelector
              width={width - 60}
              height={54}
              firstOption={'TALKER'}
              secondOption={'LISTENER'}
            />
            <SwitchSelector
              width={width - 60}
              height={54}
              firstOption={'OUTDOING'}
              secondOption={'CONSERVATIVE'}
            />
          </ScrollView>
          <LinearGradient
            colors={['rgba(255, 255, 255,0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.6)', '#FFFFFF']}
            locations={[0.0, 0.10, 0.20, 0.39]}
            style={{ height: 120, width, justifyContent: 'flex-end', paddingHorizontal: 30, paddingBottom: BOTTOM_SPACE, position: 'absolute', bottom: 0 }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SuccessCharge')} style={{ backgroundColor: '#00B0C9', paddingVertical: 16, alignItems: 'center', justifyContent: 'center', borderRadius: 27 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>REQUEST DATE</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Fragment>
    );
  }
};

export default DateRequestContainer;
