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


export default class MyTeamScreen extends React.Component {
   
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
         net.query('SELECT CMKOneHub__LocationName__c, Id, Name, CMKOneHub__Project__r.CMKOneHub__StartDate__c, CMKOneHub__Project__r.CMKOneHub__EndDate__c FROM CMKOneHub__ProjectLocation__c LIMIT 10',
                   (response) => that.setState({data: response.records})
                  );
     }
 
     goToOtherScreen() {
        this.props.navigation.navigate('Shifts');
    }
 
     render() {
         
        
 
         return (
         <View >			            
          <View style={{height: 50, flex: 1, flexDirection: 'row',  alignItems:'stretch'}}>
            <View style={{ flex: 1, flexDirection: 'column', height: 50,backgroundColor: '#1E579E', justifyContent: 'center', alignItems:'center'}} >
                <Text>ENDED</Text><Text>4</Text>
            </View>
            <View  style={{ flex: 1, flexDirection: 'column', height: 50, backgroundColor: '#0070D2', justifyContent: 'center', alignItems:'center'}} >
                <Text>CURRENT</Text><Text>2</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'column',height: 50, backgroundColor: '#32B3FF',justifyContent: 'center', alignItems:'center'}} >
                <Text>UPCOMING</Text><Text>18</Text>
            </View>
          </View>
          <View style={{ paddingTop:10, marginTop: 50, height: 50, backgroundColor: '#ffffff',alignItems:'center'}} >
              <Text style={{color:'#54698D', fontSize:30}}> Feb 17 </Text>
          </View>
          <View>
                <List  containerStyle={{marginTop: 20}} >   
                    <FlatList 
                        data={this.state.data}
                        renderItem={({item}) => (               
                            <ListItem
                                onPress={() => this.goToOtherScreen()}
                                roundAvatar                   
                                key={item}
                                title={item.CMKOneHub__LocationName__c}
                                subtitle={
                                    <View style={{flexDirection: 'column'}}>
                                        <View style={{ flexDirection: 'row'}}>
                                            <Text> Project Title... </Text>
                                            <Icon size={15} name='view-list' />  
                                            <Text> 127 Jobs  </Text>                       
                                        </View>    
                                        <View style={{ flexDirection: 'row'}}>
                                            <Icon size={15} name='event'/>                            
                                            <Text >Start Date: {item.CMKOneHub__Project__r.CMKOneHub__StartDate__c}</Text>
                                            <Icon size={15} name='event'/>                            
                                            <Text >End Date: {item.CMKOneHub__Project__r.CMKOneHub__EndDate__c}</Text>
                                        </View>
                                    </View>
                                }
                            />
                        )}
                        keyExtractor ={item=> item}
                    />
                </List>

           </View>
           </View>
            
         );
     }
 }