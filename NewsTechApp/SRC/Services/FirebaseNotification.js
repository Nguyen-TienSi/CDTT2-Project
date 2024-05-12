import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Linking } from 'react-native';

import Home from '../Screens/Home/index';
import ReadNews from '../Screens/ReadNews/index';

const NAVIGATION_IDS = ["home", "readnews"];

function buildDeepLinkFromNotificationData(data) {
    const navigationId = data?.navigationId;
    // if (!NAVIGATION_IDS.includes(navigationId)) {
    //     console.warn('Unverified navigationId', navigationId)
    //     return null;
    // }
    if (navigationId === "home") {
        return 'myapp://home';
    }
    const title = data?.title;
    if (typeof title === 'string') {
        return `myapp://readnews/${title}`
    }
    // console.warn('Missing news title')
    return null
}

const linking = {
    prefixes: ['myapp://'],
    config: {
        screens: {
            Home: "home",
            ReadNews: "readnews/:title",
        }
    },
    async getInitialURL() {
        const url = await Linking.getInitialURL();
        if (typeof url === 'string') {
            return url;
        }
        //getInitialNotification: When the application is opened from a quit state.
        const message = await messaging().getInitialNotification();
        const deeplinkURL = buildDeepLinkFromNotificationData(message?.data);
        if (typeof deeplinkURL === 'string') {
            return deeplinkURL;
        }
    },
    subscribe(listener) {
        const onReceiveURL = ({ url }) => listener(url);

        // Listen to incoming links from deep linking
        const linkingSubscription = Linking.addEventListener('url', onReceiveURL);
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
        });

        const foreground = messaging().onMessage(async remoteMessage => {
            console.log('A new FCM message arrived!', remoteMessage);

        });
        //onNotificationOpenedApp: When the application is running, but in the background.
        const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
            const url = buildDeepLinkFromNotificationData(remoteMessage.data)
            if (typeof url === 'string') {
                listener(url)
            }
        });

        return () => {
            linkingSubscription.remove();
            unsubscribe();
            foreground();
        };
    },
}

const requestUserPermission = async () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM token:', token);
    }
};

export {
    linking,
    requestUserPermission,
}
