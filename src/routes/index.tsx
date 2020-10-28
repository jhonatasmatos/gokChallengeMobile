import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Login from '../pages/Login';
import UsersList from '../pages/UsersList';
import RepositoriesList from '../pages/RepositoriesList';

const RootStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="RepositoriesList" component={RepositoriesList} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="UsersList" component={UsersList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
