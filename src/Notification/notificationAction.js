import * as React from "react";
// import { print } from "../constants";

export const navigationRef = React.createRef();

export function navigate(name, params) {
navigationRef?.current?.navigate(name, params);
}

export const notificationOpen = (notification) => {
console.log("/////------------------->", notification);
// if (notification?.data?.notification_type == 'admin_chat' ) {
// setTimeout(() => {
// navigate('MessageStack', {})
// }, 3000);
// }

setTimeout(() => {
navigate("HomeStack");
}, 2000);

};