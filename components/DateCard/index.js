import React, { Component } from 'react';
import {
    View,
    Image,
    Platform,
    Text
} from 'react-native';
import logo from '../../assets/images/logo_badge.png';

class DateCardComponent extends Component {

    state = {
    }


    render() {
        return (
            <View style={{ paddingLeft: 15, paddingTop: 15, paddingBottom: 30, marginLeft: 30, marginRight: 30 }}>
                <View style={{ position: 'absolute', zIndex: 100, elevation: 6 }}>
                    <Image source={logo} style={{ width: 100, height: 100 }} />
                </View>
                <View style={[
                    { elevation: 5, backgroundColor: '#fff', borderRadius: 27, paddingVertical: 12, paddingLeft: 100 },
                    Platform.OS === 'ios' ? {
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowRadius: 2,
                        shadowOpacity: 0.3
                    } : null
                ]}>
                    <Text style={{ color: '#000E91', fontSize: 20, fontWeight: 'bold', lineHeight: 20 }}>80'S PARTY</Text>
                    <Text style={{ color: '#7E7E7E', fontSize: 14, lineHeight: 14 }}>Sabado, 17 de agosto del 2019</Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '700' }}>21:00 pm - 03:00 am</Text>
                    <View style={{ paddingHorizontal: 12, paddingVertical: 3, borderRadius: 50, backgroundColor: '#6e77c0', marginRight: 'auto', marginTop: 5 }}>
                        <Text style={{ color: '#fff', fontSize: 12 }}>Jake T. Austin</Text>
                    </View>
                </View>
            </View>
        );
    }
};

export default DateCardComponent;

