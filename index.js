/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/redux/store'; 

import messaging from '@react-native-firebase/messaging'; // Import messaging here
import { localNotificationService } from './src/Notification/LocalNotificationService';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Background Message handled:', remoteMessage);
//   if (remoteMessage) {
//       localNotificationService.showlocalNotification(remoteMessage);
//   }
// });

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!=================================================', remoteMessage);
  localNotificationService.showlocalNotification(remoteMessage);
});

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
