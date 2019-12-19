// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class LoginScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Login Screen</Text>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
  }