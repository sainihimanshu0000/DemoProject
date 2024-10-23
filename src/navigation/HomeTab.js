import { StyleSheet, View, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SvgIcon from '../components/SvgIcon'; 
import CustomTab from './CustomTab';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator 
      tabBar={props => <CustomTab {...props} />}
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: { display: 'none' } 

      })}
    >
      <Tab.Screen
        name='Explore'
        component={require("../screen/Home/Explore").default}
       
      />

      <Tab.Screen
        name='Inbox'
        component={require("../screen/Home/Inbox").default}
      
      />
      
      <Tab.Screen
        name='Trips'
        component={require("../screen/Home/Trips").default}
      
      />
      
      <Tab.Screen
        name='Saved'
        component={require("../screen/Home/Saved").default}
       
      />
      
      <Tab.Screen
        name='More'
        component={require("../screen/Home/More").default}
       
      />
    </Tab.Navigator>
  );
}

export default HomeStack;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  tripIconContainer: {
    backgroundColor: "#DA4726",
    width: 59.06,
    height: 59.06,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 40,
  },
});
