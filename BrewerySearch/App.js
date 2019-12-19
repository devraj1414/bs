import  React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  BreweryDetails from './components/Details/BreweryDeatils';
import  LoginScreen from './components/Login/LoginScreen';
import  BreweryList from './components/Brewery/BreweryList';

const RootStack = createStackNavigator(
  {
    Login : {screen : LoginScreen,
        navigationOptions: ({ navigation }) => ({
        headerTitle: '',
        headerShown: false,
      }),},
      BreweryList: {screen : BreweryList, navigationOptions: ({ navigation }) => ({
        headerShown: true,
       headerLeft : null,

      }),},
      BreweryDetails: {screen : BreweryDetails},
  },
  {
      initialRouteName : 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

