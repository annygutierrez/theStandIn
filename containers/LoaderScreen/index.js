import React, { Component } from 'react';
import {
    SafeAreaView,
    Animated,
} from 'react-native';
import logo from '../../assets/images/logo_opacity.png';
import LinearGradient from 'react-native-linear-gradient';

class LoaderScreenContainer extends Component {

    constructor () {
        super()
        this.springValue = new Animated.Value(0.3)
      }

    componentDidMount() {
        this.spring();
    }

    spring () {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1
          }
        ).start();
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 1900);
      }


    render() {

        return (
            <SafeAreaView style={{ flex: 1 }} backgroundColor={'#0294bf'}>
                <LinearGradient
                    colors={['#0091BE', '#0073B4', '#000E91']}
                    ocations={[0.0, 0.22, 0.28]}
                    style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flex: 1 }}
                >
                    <Animated.Image
                        style={{ width: 400, height: 400, transform: [{ scale: this.springValue }] }}
                        resizeMode={'contain'}
                        source={logo}
                    />
                </LinearGradient>
            </SafeAreaView >
        );
    }
};

export default LoaderScreenContainer;
