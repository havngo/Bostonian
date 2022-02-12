import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: "10%",
  },
  login: {
    backgroundColor: "white",
    color: "#3A59FF",
    width: "40%%",
    borderRadius: 25,
    textAlign: "center",
    padding: "1%",
    fontSize: 20,
    marginTop: "10%",
  },
  signup: {
    backgroundColor: "white",
    color: "#3A59FF",
    width: "40%%",
    borderRadius: 25,
    textAlign: "center",
    fontSize: 20,
    marginTop: "2%",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/images/homeScreen.jpg")}
      style={styles.background}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.text}>Boston Buddy</Text>
        <TextInput
          style={{
            color: "white",
            padding: 10,
            marginTop: "10%",
            height: 50,
            width: 250,
            borderColor: "white",
            borderWidth: 1,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            marginTop: "1%",
            height: 50,
            width: 250,
            borderColor: "white",
            borderWidth: 1,
          }}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Text style={styles.login}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

class Map extends Component {
  render() {
    const colorScheme = useColorScheme();
    return (
      <SafeAreaProvider>
        <Text>hello</Text>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
