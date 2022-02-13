import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./frontend/LoginPage";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Attraction from "./frontend/Attraction";

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login Page" component={LoginPage} />
          <Stack.Screen name="Attraction Page" component={Attraction} />
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
