import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../Login";
import RegisterScreen from "./RegisterScreen";

const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="AccountStack" component={AccountStack} />
            <Stack.Screen name="Register" component={RegisterScreen} />


        </Stack.Navigator>
    );
}

export default AccountStack;
