import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import SignUpContainer from './containers/SignUp';
import LogInContainer from './containers/LogIn';
import HomeContainer from './containers/Home';
import DateRequestContainer from './containers/DateRequest';
import SuccessChargeContainer from './containers/SuccessCharge';
import HistorialContainer from './containers/Historial';
import DrawerNavigation from './containers/DrawerNavigation';
import LoaderScreenContainer from './containers/LoaderScreen';

const { width } = Dimensions.get('window');

const Drawer = (initialRoute) => createDrawerNavigator(
  {
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        header: null
      }
    },
    DateRequest: {
      screen: DateRequestContainer,
      navigationOptions: {
        header: null
      }
    },
    Historial: {
      screen: HistorialContainer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: initialRoute,
    contentComponent: DrawerNavigation,
    drawerWidth: width,
    drawerType: 'slide',
    overlayColor: 'transparent'
  }
);

export const createRootNavigator = (signUpUser = false) => {

  return createStackNavigator({
    SignUp: {
      screen: SignUpContainer,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: SignUpContainer,
      navigationOptions: {
        header: null
      }
    },
    LogIn: {
      screen: LogInContainer,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Drawer('Home'),
      navigationOptions: {
        header: null
      }
    },
    DateRequest: {
      screen: Drawer('DateRequest'),
      navigationOptions: {
        header: null
      }
    },
    SuccessCharge: {
      screen: SuccessChargeContainer,
      navigationOptions: {
        header: null
      }
    },
    LoaderScreen: {
      screen: LoaderScreenContainer,
      navigationOptions: {
        header: null
      }
    },
    Historial: {
      screen: Drawer('Historial'),
      navigationOptions: {
        header: null
      }
    },
  },
    {
      initialRouteName: signUpUser ? 'Home' : 'Register'
    });
};


