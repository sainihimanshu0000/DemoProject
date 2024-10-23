import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {


  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name='ChooseLanguage'
        component={require('../screen/Auth/ChooseLanguage').default}
        options={{ headerShown: false }}
      />



      <Stack.Screen
        name='intro'
        component={require("../screen/Auth/IntroScreen").default}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name='Login'
        component={require("../screen/Auth/Login").default}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='SignUp'
        component={require("../screen/Auth/SignUp").default}
      />

      <Stack.Screen
        name='OtpVerification'
        component={require("../screen/Auth/OtpVerification").default}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

const styles = StyleSheet.create({});
