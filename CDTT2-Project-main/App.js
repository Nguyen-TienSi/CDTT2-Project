import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from '../CDTT2-Project-main/Src/HomeScreen';
import LuuBai from '../CDTT2-Project-main/Src/Luubai';
import AccounStackStack from '../CDTT2-Project-main/Src/Stacks/AccountStack';

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title='Chuyen trang detail' onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const Details = ({navigation}) => {
  return (
    <>
      <View style={{flexDirection:'row', justifyContent: 'space-between',paddingVertical:25}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cài chương</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    </>
  );
};

const Tab = createBottomTabNavigator(); // Create Tab Navigator

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false // Ẩn tiêu đề trong thanh điều hướng
        }}
      >
        <Tab.Screen name="Luubai" component={LuuBai} />
        <Tab.Screen name="AccountStack" component={AccounStackStack} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
