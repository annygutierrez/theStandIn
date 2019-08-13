import React, { Component, Fragment } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import box from '../../assets/images/box.png';
import emptyText from '../../assets/images/emptyText.png';
import HeaderComponent from '../../components/Header';

class HomeContainer extends Component {

  state = {
  }

  render() {
    return (
      <Fragment>
        <HeaderComponent />
        <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={box} style={{ height: 240, width: 240, marginTop: -65 }} />
          <Image resizeMode={'contain'} source={emptyText} style={{ height: 100, width: 240 }} />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DateRequest')} style={{ backgroundColor: '#33c0d3', paddingHorizontal: 28, paddingVertical: 16, borderRadius: 32, marginTop: 40 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Add date</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
};

export default HomeContainer;
