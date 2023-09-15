/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import Home from './screens/Home';
import Info from './screens/Info';
import Settings from './screens/Settings';
import {View} from 'react-native';

//Screen Names

const homeName = 'Home';
const detailsName = 'Info';
const settingsName = 'Settings';
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === detailsName) {
                iconName = focused ? 'help-circle' : 'help-circle-outline';
              } else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return (
                <Ionicons name={iconName as string} size={size} color={color} />
              );
            },
          })}
          // tabBarOptions={{
          //   activeTintColor: 'blue',
          //   inactiveTintColor: 'gray',
          //   labelStyle: {paddingBottom: 10, fontSize: 10},
          //   style: {padding: 10, height: 70},
          // }}>
        >
          <Tab.Screen
            name={homeName}
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={detailsName}
            component={Info}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={settingsName}
            component={Settings}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
