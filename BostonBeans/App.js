<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./frontend/LoginPage";
import React from "react";

export default class App extends React.Component {
  render() {
    return <LoginPage />;
  }
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
>>>>>>> origin/brickhouse
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> origin/brickhouse
  },
});
