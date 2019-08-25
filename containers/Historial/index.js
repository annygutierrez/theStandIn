import React, { Component, Fragment } from 'react';
import {
    View,
    Easing,
    Animated,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions,
    Text
} from 'react-native';
import HeaderComponent from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import DateCard from '../../components/DateCard';

class HistorialContainer extends Component {

    state = {
    }


    render() {
        return (
            <Fragment>
                <SafeAreaView backgroundColor={'#00B0C9'}>
                    <HeaderComponent />
                </SafeAreaView>
                <View style={{ backgroundColor: '#e9e9e9', flex: 1, paddingTop: 22 }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }} style={{ flexGrow: 1 }}>
                        <DateCard />
                        <DateCard />
                        <DateCard />
                        <DateCard />
                        <DateCard />
                        <DateCard />
                        <DateCard />
                        <DateCard />
                        <DateCard />
                    </ScrollView>
                </View>
            </Fragment>
        );
    }
};

export default HistorialContainer;

