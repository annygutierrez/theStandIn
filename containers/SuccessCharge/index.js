import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Animated,
} from 'react-native';
import checked from '../../assets/images/checked.png';
import completeCharge from '../../assets/images/completeCharge.png';
import LinearGradient from 'react-native-linear-gradient';

class SuccessChargeContainer extends Component {

    constructor(props) {
        super(props);
        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
        this.animatedValue = new Animated.Value(1);
    }

    state = {
        complete: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.handlePressIn();
        }, 500);
        setTimeout(() => {
            this.handlePressOut();
        }, 1000);
        setTimeout(() => {
            this.props.navigation.navigate('Historial');
        }, 1500);
    }

    handlePressIn() {
        Animated.spring(this.animatedValue, {
            toValue: .5
        }).start()
    }
    handlePressOut() {
        this.setState({ complete: true })
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 60
        }).start()
    }


    render() {
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }]
        }

        return (
            <SafeAreaView style={{ flex: 1 }} backgroundColor={'#0294bf'}>
                <LinearGradient
                    colors={['#0091BE', '#0073B4', '#000E91']}
                    ocations={[0.0, 0.22, 0.28]}
                    style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', flex: 1 }}
                >
                    <Animated.Image source={this.state.complete ? completeCharge : checked} style={[{ width: 228, height: 228 }, animatedStyle]} />
                </LinearGradient>
            </SafeAreaView>
        );
    }
};

export default SuccessChargeContainer;
