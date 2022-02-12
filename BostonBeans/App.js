import { StatusBar } from "expo-status-bar";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./frontend/LoginPage";
import React from "react";

export default class App extends React.Component {
  render() {
    return <LoginPage />;
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
