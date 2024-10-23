import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '../../Notification/notificationAction'

const Stack = createNativeStackNavigator()
const Explore = () => {
  return (
    <Stack.Navigator initialRouteName='Home'   ref={navigationRef}>
      <Stack.Screen name="Home" component={require("../Explore/Home").default} options={{ headerShown: false }} />
      <Stack.Screen name='Map' component={require("../Explore/Map").default} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Explore

const styles = StyleSheet.create({})