import React, { Component } from 'react';
import {Button,Icon, Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
 import styles from './BreweryList.style'
 export default class BreweryList extends Component{

      static navigationOptions = {
        title: 'Breweries',
      };
        constructor(props) {
          console.log(props.selectedItem)
            super(props);
            this.state = {     
            isLoading: false, 
            text: '',
            data: [],
            }
            
        }


        SearchFilterFunction(text){

            const newData = this.arrayholder.filter(function(item) {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
              });
              console.log(newData)
            this.setState({
                data : newData,
                text: text
            });

            console.log(this.state.data)
        }


        componentDidMount() {
            return fetch('https://api.openbrewerydb.org/breweries')
                .then(response => response.json())
                .then(responseJson => {
                    console.log(responseJson)
                   this.setState({
                        data : responseJson,
                        isLoading : false
                   },
                   function() {
                    this.arrayholder = responseJson;
                  })
                })
                .catch(error => {
                    console.error(error);
                });   
          }
         
        
          _onPress(item) {
                console.log(item)
          }

        renderItem = ({ item }) => (
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('BreweryDetails', {selectedItem : item})}
            >
            <View style={{ minHeight: 70, padding: 5 }}>
              <Text style={{ color: '#2E4053', fontWeight: 'bold', fontSize: 22 }}>
               {item.name}
              </Text>
              <Text style={{ color: '#2E4053', fontWeight: 'bold', fontSize: 18  }}>
                {item.brewery_type} 
              </Text>
            </View>
            </TouchableOpacity>
          );

          renderSeparator = () => (
            <View
              style={{
                backgroundColor: '#85929E',
                height: 0.5,
              }}
            />
          );

        render(){

          const text =  this.props.navigation.getParam('selectedItem', 'nothing sent')
        
            return(
                <View style = {{flex : 1}}>
                    <SafeAreaView/>
                    <TextInput 
                    style={{textAlign: 'center',
                    height: 40,
                    fontSize: 30,
                    borderWidth: 1,
                    borderColor: '#009688',
                    borderRadius: 7 ,
                    backgroundColor : "#FFFFFF"}}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    placeholder="Search Here"
                    />

                <View style = {{flex :1, marginTop : 10}}>
                    {this.state.isLoading? (
                             <View
                             style={{
                               ...StyleSheet.absoluteFill,
                               alignItems: 'center',
                               justifyContent: 'center'
                             }}
                           >
                             <ActivityIndicator size="large" color="#bad555" />
                           </View>
                         ) : null}
                         <FlatList
                           ItemSeparatorComponent={this.renderSeparator}
                           data={this.state.data}
                           renderItem={this.renderItem}
                           keyExtractor={(item, index) => index.toString()}
                           ListEmptyComponent={() => (
                             <View
                               style={{
                                 flex: 1,
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 marginTop: 50
                               }}
                             >
                               <Text style={{ color: '#bad555' }}>No Contacts Found</Text>
                             </View>
                           )}
                         />

                </View>

                
                </View>
            )
        }
}
