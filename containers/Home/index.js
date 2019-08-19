import React, { Component, Fragment } from 'react';
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text
} from 'react-native';
import box from '../../assets/images/box.png';
import HeaderComponent from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

class HomeContainer extends Component {

  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#0294bf' }} />
        <SafeAreaView style={{ flex: 1 }} backgroundColor={'#000E91'}>
          <LinearGradient
            colors={['#0091BE', '#0073B4', '#000E91']}
            ocations={[0.0, 0.22, 0.28]}
            style={{ backgroundColor: '#fff', alignItems: 'center', flex: 1 }}
          >
            <HeaderComponent hideBackground containerStyle={{ paddingTop: 12 }} />
            <Image source={box} style={{ height: 240, width: 240, marginTop: 100 }} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DateRequest')} style={{ backgroundColor: '#33c0d3', paddingHorizontal: 28, paddingVertical: 16, borderRadius: 32, marginTop: 40, elevation: 5 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Add date</Text>
            </TouchableOpacity>
          </LinearGradient>
        </SafeAreaView>
      </Fragment>
    );
  }
};

export default HomeContainer;
