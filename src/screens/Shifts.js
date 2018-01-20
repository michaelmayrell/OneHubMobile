import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ListView,
    Image,
    TouchableOpacity,
    div
} from 'react-native';

import { oauth, net } from 'react-native-force';
import { Header, List, ListItem} from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialIcons';

const TopNav = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            alignItems: 'center',
            
            backgroundColor:'#16325C'
          }}>
         
            <Icon size={24} name="menu" />
            <Image  source={require('../../images/OneHubLogoRev.png')} />
            <Icon size={25} name="search" />
        </View>

    );
}


export default class ShiftsScreen extends React.Component {
   
    static navigationOptions = {
     header: <TopNav />
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
         net.query('SELECT Id, Name FROM CMKOneHub__Shift__c LIMIT 10',
                   (response) => that.setState({data: response.records})
                  );
     }
 
    
 
     render() {        
        
 
         return (
         <View >			            
          <View>
            <Text>4819 WALGREENS</Text>
            <Text>Project Name etc..</Text>
          </View>
          <View>
            <Text>SHIFTS</Text>
          </View>

          <View>
             <List  containerStyle={{marginTop: 20}}>             
             {
               this.state.data.map((l, i) => (
                 <ListItem
                   roundAvatar                   
                   key={i}
                   title={l.Name}
                   subtitle={
                    <View style={{flexDirection: 'column'}}>
                        <View style={{ flexDirection: 'row'}}>                            
                            <Icon size={15} name='person' />  
                            <Text> 5 Expected Team Members  </Text>                       
                        </View>    
                        <View style={{ flexDirection: 'row'}}>
                            <Icon size={15} name='event'/>                            
                            <Text >Start Date: 02/27/18</Text>
                            
                        </View>
                    </View>
                  }
                   
                   
                 />
               ))
             }
            </List>
           </View>
        </View>
            
         );
     }
 }