import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SignUpContainer from './containers/SignUp';
import LogInContainer from './containers/LogIn';DateRequestContainer
import HomeContainer from './containers/Home';
import DateRequestContainer from './containers/DateRequest';

export const createRootNavigator = (signUpUser = false) => {

  return createStackNavigator({
    Home: {
    //   screen: HomeContainer,
    //   navigationOptions: () => ({
    //     header: null
    //   })
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
        screen: HomeContainer,
        navigationOptions: {
            headerStyle: {
                height: 100
            }
        }
    },
    DateRequest: {
        screen: DateRequestContainer,
        navigationOptions: {
            headerStyle: {
                height: 100
            }
        }
    }
  },
    {
      initialRouteName: signUpUser ? 'Home' : 'Register'
    });
}
