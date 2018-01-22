/*
 * Copyright (c) 2017-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ListView,
    Platform,
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';



import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import { oauth, net } from 'react-native-force';
import { Header} from 'react-native-elements';
import { List, ListItem, Icon} from 'react-native-elements'

import MyTeamScreen from './src/screens/MyTeam';
import MyWorkScreen from './src/screens/MyWork';
import CasesScreen from './src/screens/Cases';
import ShiftsScreen from './src/screens/Shifts';



const MyTeamStack = StackNavigator({    
    MyTeam: {
        screen: MyTeamScreen,        
        navigationOptions: ({ navigation }) => ({
            title: 'My Teams',  // Title to appear in status bar
            icon: () => (<Icon size={24}  name='rowing' />)
          })
      },
      Shifts: {
        screen: ShiftsScreen,        
        navigationOptions: ({ navigation }) => ({
            title: 'Shifts',  // Title to appear in status bar
            icon: () => (<Icon size={24}  name='rowing' />)
          })
      }
})



export const App = DrawerNavigator({	
    MyTeam: { screen: MyTeamStack, 
      navigationOptions: ({ navigation }) => ({
        title: 'My Teams',  // Title to appear in status bar
        drawerIcon: () => (<Icon size={24}  name='group' />)
      })},
    MyWork: { screen: MyWorkScreen, 
      navigationOptions: ({ navigation }) => ({
        title: 'My Teams22',  // Title to appear in status bar
        drawerIcon: () => (<Icon size={24}  name='view-list' />)
      })},
	  Cases: { screen: CasesScreen, 
      navigationOptions: ({ navigation }) => ({
        title: 'My Teams22',  // Title to appear in status bar
        drawerIcon: () => (<Icon size={24}  name='flag' />)
      })}
}, {
    initialRouteName : 'MyTeam',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent : props =>
      <View>
          <View>
              <Text>Team Leader</Text>
              <Text>Emailaddress@emaladdress.com</Text>
          </View>  
        <SafeAreaView  forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems style={{color:'blue'}} {...props} />
        </SafeAreaView>
    </View>
  }
);
