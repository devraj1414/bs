// Homescreen.js
import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableHighlight } from 'react-native';
import style from './LoginScreen.style';
export default class LoginScreen extends Component {
    render() {
      return (
        <View style={styles.formStyle}>
          <Text style = {styles.title}>Login Screen</Text>
          
          <View style={{flexDirection: 'row', marginTop : 50}}>
              <Text style = {styles.text}>User Name : </Text>
        
              <TextInput 
                    style={{textAlign: 'center',
                    height: 25,
                    width : 200,
                    fontSize: 20,
                    borderWidth: 1,
                    borderColor: '#009688',
                    marginLeft : 30,
                    borderRadius: 7 ,
                    backgroundColor : "#FFFFFF"}}
                    placeholder="Username"
                    />
          
      </View>
      <View style={{flexDirection: 'row', marginTop : 10}}>
              <Text style = {styles.text}>Passsword : </Text>
        
              <TextInput 
                    style={{textAlign: 'center',
                    height: 25,
                    width : 200,
                    fontSize: 20,
                    borderWidth: 1,
                    borderColor: '#009688',
                    marginLeft : 30,
                    borderRadius: 7 ,
                    backgroundColor : "#FFFFFF"}}
                    placeholder="Password"
                    />
          
      </View>

      <TouchableHighlight
  style={styles.submit}
  onPress={() => this.props.navigation.navigate('BreweryList', {selectedItem : ' '})}
  underlayColor='#fff'>
    <Text style = {styles.title}>Login</Text>
</TouchableHighlight>
        </View>
      );
    }
  }