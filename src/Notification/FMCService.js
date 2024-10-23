import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { localNotificationService } from './LocalNotificationService';
import { notificationOpen } from './notificationAction';

class FCMService {
    register = () => {
        this.checkPermission()
        this.createNotificationListeners()
        localNotificationService.configure();
        if (Platform.OS === 'ios') {
            this.registerAppWithFCM();
        }
    }
    registerAppWithFCM = async () => {
        if (Platform.OS === 'ios') {
            await messaging().registerDeviceForRemoteMessages();
            await messaging().setAutoInitEnabled(true)
        }
    }
    checkPermission = () => {
        messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    this.getFcmToken()
                } else {
                    this.requestPermission()
                }
            }).catch(error => {

            })
    }
    getFcmToken = () => {
        return new Promise(res => {
            // console.log(res, 'resfcm');
            messaging().getToken()
                .then(fcmToken => {
                    if (fcmToken) {
                        AsyncStorage.setItem('fcm_token', fcmToken)
                        console.log('[FCM TOKEN] => ', fcmToken)
                        // res(fcmToken)
                    } else {
                        console.log("[FCMService] User Does not have a device token")
                    }
                }).catch(error => {
                    console.log("[FCMService] getToken rejected", error);
                })
        })
    }
    requestPermission = () => {
        messaging().requestPermission()
            .then(() => {
                this.getFcmToken()
            }).catch(error => {
                console.log("[FCMService] Request Permission rejected", error);
            })
    }

    deleteToken = () => {
        messaging().deleteToken()
            .catch(error => {
                console.log("[FCMService] Delete Token error", error);
            })
    }

    createNotificationListeners = () => {
        // When the application is running but in the background
        messaging().onNotificationOpenedApp(remoteMessage => {
            if (remoteMessage) {
                notificationOpen(remoteMessage);
            }
        });
    
        // When the application is opened from a quit state
        messaging().getInitialNotification().then(remoteMessage => {
            if (remoteMessage) {
                notificationOpen(remoteMessage);
            }
        });
    
        // Foreground state messages
        this.messageListener = messaging().onMessage(async remoteMessage => {
            if (remoteMessage) {
                localNotificationService.showlocalNotification(remoteMessage);
            }
        });
    
        // Background Message Handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Background Message handled:', remoteMessage);
            if (remoteMessage) {
                localNotificationService.showlocalNotification(remoteMessage);
            }
        });
    
        // Triggered when a new token is generated
        messaging().onTokenRefresh(fcmToken => {
            console.log('[FCMService] new token refresh', fcmToken);
        });
    }
    
    unRegister = () => {
        if (this.messageListener) {
            this.messageListener()
        }
    };
}

export const fcmService = new FCMService()