import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ReadNews from '../ReadNews/index';
import Search from '../Search/index';
import Profile from '../Profile/index';
import Bookmarks from '../Bookmarks/index';
import Comments from '../ReadNews/Comments/index';
import Home from '../Home/index';
import { linking, requestUserPermission } from '../../Services/FirebaseNotification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => (
          <Icon name="home" size={24} color="black" />
        )}}/>
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: () => (
          <Icon name="person" size={24} color="black" />
        )}}/>
      </Tab.Navigator>
  );
};

const RootNavigator = () => {
  useEffect(() => {
    requestUserPermission()
  }, [])

  return (
    <NavigationContainer linking={linking} >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="main-screen" component={MainScreen} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="ReadNews" component={ReadNews} />
          <Stack.Screen name='bookmarks' component={Bookmarks}/>
          <Stack.Screen name="search" component={Search} />
          {/* <Stack.Screen name="profile" component={Profile} /> */}
          <Stack.Screen name="comments" component={Comments} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;