import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack =createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='AuthStack' component={require("./AuthStack").default} options={{headerShown:false}}/>
        <Stack.Screen name='HomeStack' component={require("./HomeTab").default} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})