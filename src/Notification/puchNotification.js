import PushNotification from "react-native-push-notification";

// Must be called as early as possible in the app
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
        console.log("TOKEN:", token);
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    },

    // iOS only
    permissions: {
        alert: true,
        badge: true,
        sound: true,
    },

    // Should the initial notification be popped automatically
    popInitialNotification: true,

    requestPermissions: true,  // Request permissions on start
});
