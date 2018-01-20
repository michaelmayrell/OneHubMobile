import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ListView,
    ScrollView
} from 'react-native';

import { oauth, net } from 'react-native-force';
import { Header} from 'react-native-elements';
import { List, ListItem} from 'react-native-elements'

export default class MyWorkScreen extends React.Component {
   
    static navigationOptions = {
     drawerLabel: 'My Work',
     
   };
 
     constructor(props) {
         super(props);
         this.state = {data: []};
     }
     
     componentDidMount() {
         var that = this;
         oauth.getAuthCredentials(
             () => that.fetchData(), // already logged in
             () => {
                 oauth.authenticate(
                     () => that.fetchData(),
                     (error) => console.log('Failed to authenticate:' + error)
                 );
             });
     }
 
     fetchData() {
         var that = this;
         net.query('SELECT Id, Name FROM Shift__c LIMIT 10',
                   (response) => that.setState({data: response.records})
                  );
     }
 
     render() {
         return (
             
             
                 <FlatList style={{height:800}}
                     data={this.state.data}
                     renderItem={({item}) => <Text >{item.Name}</Text>}
                     keyExtractor={(item, index) => index}
                 />
             
         );
     }
 }