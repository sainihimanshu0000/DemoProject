import React, { useEffect } from 'react';
import { View, Button, PermissionsAndroid, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import PushNotification from 'react-native-push-notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { localNotificationService } from './src/Notification/LocalNotificationService'; // Import LocalNotificationService
import { fcmService } from './src/Notification/FMCService';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import auth from "@react-native-firebase/app";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

import { navigationRef } from './src/Notification/notificationAction';
import Map from './src/screen/Explore/Map';
import ChooseLanguage from './src/screen/Auth/ChooseLanguage';
import IntroScreen from './src/screen/Auth/IntroScreen';
const Stack= createNativeStackNavigator()

if (Platform.OS === 'android') {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
}


const App = () => {

 
  useEffect(() => {
    SplashScreen.hide();

    // Register FCM Service
    fcmService.register();
    
    // Create Notification Listeners
    fcmService.createNotificationListeners();
    // fcmService.createNotificationListeners
    
    // // Optional: Configure Local Notifications (if using react-native-push-notification)
    // localNotificationService.configure();

    // return () => {
    //   // Unregister listeners when component unmounts
    //   fcmService.unRegister();
    // };
  }, []);

  // Example function to handle local notification
  const handleLocalNotification = () => {
    PushNotification.localNotification({
      channelId: 'channel-id', // Make sure this channel exists in Android
      title: 'Local Notification',
      message: 'This is a test local notification',
      playSound: true,
      soundName: 'default',
      number: 1,
    });
    // console.log(mess)
  };

  return (
  <NavigationContainer
  ref={navigationRef}
>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='Main' component={require("./src/navigation/MainStack").default} />
    </Stack.Navigator>

  </NavigationContainer>
// {/* <View>
//   <Button title='notification' onPress={handleLocalNotification}/>

//   <Button
//       title="Facebook Sign-In"
//       onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
//     />
// </View> */}
// {/* <Map/> */}
//  <ChooseLanguage/> 

  );
};

export default App;
