import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import logoText from '../../assets/images/logo_text.png';
import LinearGradient from 'react-native-linear-gradient';

class HeaderContainer extends Component {

    state = {
    }

    render() {
        return (
            <LinearGradient colors={['#00B0C9', '#0064AE', '#000E91']} locations={[0.0, 0.27, 0.68]} style={{ height: 100 }}>
                <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={logoText} style={{ width: 180, height: 46  }} />
                </View>
            </LinearGradient >
        );
    }
};

export default HeaderContainer;
