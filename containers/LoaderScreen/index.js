import React, { Component, Fragment } from 'react';
import {
    SafeAreaView,
    Animated,
    ActivityIndicator
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import logo from '../../assets/images/logo_opacity.png';
import LinearGradient from 'react-native-linear-gradient';

class LoaderScreenContainer extends Component {

    constructor() {
        super()
        this.springValue = new Animated.Value(0.3)
    }

    componentDidMount() {
        this.spring();
    }

    spring() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 1
            }
        ).start();
        setTimeout(() => {
            this.startSession();
        }, 1900);
    }

    startSession() {
        const navigateAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })],
        });
      
        this.props.navigation.dispatch(navigateAction);
    }


    render() {

        return (
            <Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#0294bf' }} />
                <SafeAreaView style={{ flex: 1 }} backgroundColor={'#000E91'}>
                    <LinearGradient
                        colors={['#0091BE', '#0073B4', '#000E91']}
                        ocations={[0.0, 0.22, 0.28]}
                        style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flex: 1 }}
                    >
                        {/* <Animated.Image
                            style={{ width: 400, height: 400, transform: [{ scale: this.springValue }] }}
                            resizeMode={'contain'}
                            source={logo}
                        /> */}
                        <ActivityIndicator
                          size="large" color="#000E91"
                        />
                    </LinearGradient>
                </SafeAreaView >
            </Fragment>
        );
    }
};

export default LoaderScreenContainer;
