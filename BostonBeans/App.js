import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Icon } from "react-native";
import HomeScreen from "./frontend/HomeScreen";
import React from "react";
import LoginPage from "./frontend/LoginPage";
import MapScreen from "./frontend/MapScreen";
import Attraction from "./frontend/Attraction";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';
import Mfa from "./frontend/Attractions/mfa";
import Bistro from "./frontend/Attractions/bistro";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login Page" component={LoginPage} />
          <Stack.Screen name="Map Page" component={MapScreen} />
          <Stack.Screen name="MFA" component={Mfa} />
          <Stack.Screen name="Bistro" component={Bistro} />
          {/* <Stack.Screen
            name="Filter Page"
            component={Filter}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
