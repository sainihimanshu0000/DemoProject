
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { Platform } from 'react-native';
import { notificationOpen } from './notificationAction';

class LocalNotificationService {
  configure = () => {
    this.createChannel();
    this.configureNotification();
  }

  createChannel = () => {
    let config = {
      channelId: "channel-id", // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: true, // (optional) default: true
      allowWhileIdle: true,
      // soundName: (Platform.OS=='ios')?"rushs.wav":"rushs", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      // repeatType: 1 

    };

    PushNotification.createChannel(config, (created) => { });
  }

  configureNotification = () => {
    let config = {
      onRegister: function (token) { },
      onNotification: function (notification) {
        if (notification.userInteraction) {
          notificationOpen(notification)
        }
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: false,
      requestPermissions: true,
    }

    PushNotification.configure(config);
  }

  unRegister = () => {
    PushNotification.unregister()
  }

  showlocalNotification = ({ notification, data }) => {

    // console.log(data, 'datttmot------', notification, 'hhhhhhnotificationnnn');
    let config = {
      title: notification?.title,
      message: notification?.body,
      // userInfo: data,
      playSound: true,
      // soundName:(Platform.OS=='ios')?"rushs.wav":'rushs',
      // onlyAlertOnce: true,
      number: 1,
    }

    if (Platform.OS == 'android') {
      config.channelId = "channel-id";
      config.data = data;
      config.message = notification?.body;
    }
    // console.log(config, '----- >>> ');
    // console.log(notification, '----->>>>>--');

    PushNotification.localNotification(config);
  }

  cancelAllLocalNotifications = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  }

  clearNotificationBadge = () => {
    if (Platform.OS == 'ios') {
      PushNotificationIOS.getApplicationIconBadgeNumber((num) => { // get current number
        if (num >= 1) {
          PushNotificationIOS.setApplicationIconBadgeNumber(0) //set number to 0
        }
      });
    }
  }

  removeAllDeliveredNotificationByID = (notificationId) => {
    PushNotification.cancelLocalNotifications({ id: `${notificationId}` })
  }

}

export const localNotificationService = new LocalNotificationService()