// BreweryDeatsils.js
import React, { Component } from 'react';
import {  Button, View , StyleSheet, Linking} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class BreweryDetails extends Component {
    static navigationOptions = {
        title: 'Brewery Deatils',
      };


      createDeatislComponent(){
        const item =  this.props.navigation.getParam('selectedItem', 'nothing sent')
        console.log()
      return( <Container>
        <Content >
          <Card>
            <CardItem header style = {styles.container}>
              <Text style = {styles.title}>{item.name}</Text>
                </CardItem>
                <CardItem >
                  <Text style = {styles.addressTitle}> Addrress :</Text>
                </CardItem>
                <CardItem>
                  <Text style = {styles.address}>{item.street}</Text>
                </CardItem>
                <CardItem>
                <Text style = {styles.address}>{item.city} -  {item.state}</Text>
            </CardItem>
            <CardItem>
                <Text style = {styles.address}>{item.country} -  {item.postal_code}</Text>
            </CardItem>
            <CardItem>
                <Text style = {styles.address}>Phone : {item.phone}</Text>
            </CardItem>
            <CardItem>
            <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('http://google.com')}>
                Web : {item.website_url}
                </Text>
            </CardItem>
         </Card>
        </Content>
      </Container>)
      }


    render() {
      return (
          this.createDeatislComponent()

      );
    }
  }

  const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      textAlign: "center",
      color : '#8B2323',
    },

    addressTitle: {
      fontSize: 30,
      textAlign: "center",
      color : '#8B2323',
    },

    address: {
      fontSize: 20,
      textAlign: "center",
      color : '#8B2323',
    },

    container:{
      backgroundColor: '#FFE4E1',
      flex: 1,
      position: "relative",
    },
   });