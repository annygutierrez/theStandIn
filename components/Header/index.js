import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import logoText from '../../assets/images/logo_text.png';
import burger from '../../assets/images/burger.png';
import LinearGradient from 'react-native-linear-gradient';

class HeaderContainer extends Component {

  state = {
  }

  render() {
    const backgroundColor = this.props.hideBackground ? ['rgba(255, 255, 255,0)', 'rgba(255, 255, 255,0)', 'rgba(255, 255, 255,0)'] : ['#00B0C9', '#0064AE', '#000E91'];
    return (
      <LinearGradient
        colors={backgroundColor}
        locations={[0.0, 0.27, 0.68]}
        style={[{ height: 100, flexDirection: 'row', alignItems: 'center' }, this.props.containerStyle]}
      >
        <TouchableOpacity onPress={this.props.navigation.openDrawer} style={{ flex: 1, alignItems: 'center', paddingTop: 7 }}>
          <Image source={burger} resizeMode={'stretch'} style={{ width: 33, height: 25 }} />
        </TouchableOpacity>
        <View style={{ flex: 2, alignItems: 'center', paddingLeft: 14 }}>
          <Image source={logoText} style={{ width: 180, height: 46 }} />
        </View>
        <View style={{ flex: 1 }}></View>
      </LinearGradient >
    );
  }
};

export default withNavigation(HeaderContainer);
