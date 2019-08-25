import React, { Component, Fragment } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native';
import close from '../../assets/images/close.png';
import textLogo from '../../assets/images/text_logo_opacity.png';
import LinearGradient from 'react-native-linear-gradient';

class DrawerNavigationContainer extends Component {


    render() {

        return (
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#0294bf' }} />
                <SafeAreaView style={{ flex: 1 }} backgroundColor={'#000E91'}>
                    <LinearGradient
                        colors={['#0091BE', '#0073B4', '#000E91']}
                        ocations={[0.0, 0.22, 0.28]}
                        style={{ flex: 1 }}
                    >
                        <TouchableOpacity onPress={this.props.navigation.closeDrawer} style={{ flex: 2, justifyContent: 'center', paddingLeft: 30, paddingBottom: 12 }}>
                            <Image source={close} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 60 }}>
                            <Image resizeMode={'contain'} source={textLogo} style={{ width: 181, height: 55 }} />
                        </View>
                        <View style={{ flex: 4, paddingTop: 50, paddingLeft: 60 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Historial')}>
                            <Text style={{ color: '#fff', fontSize: 30, lineHeight: 49, opacity: 0.5 }}>Historial</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DateRequest')}>
                            <Text style={{ color: '#fff', fontSize: 30, lineHeight: 49, opacity: 0.5 }}>Request date</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('DateRequest')}>
                            <Text style={{ color: '#fff', fontSize: 30, lineHeight: 49, opacity: 0.5 }}>Profile</Text>
                        </TouchableOpacity> */}
                        </View>
                        <View style={{ flex: 2, paddingLeft: 60, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={{ color: '#fff', fontSize: 30, opacity: 0.5 }}>Log out</Text>
                        </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </SafeAreaView>
            </Fragment>
        );
    }
};

export default DrawerNavigationContainer;
