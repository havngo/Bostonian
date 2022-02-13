import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginPage = ({ navigation }) => {
  let state = {
    email: "",
    password: "",
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.namePasswordContainer}>
        {/* name and password container */}
        <Text style={loginStyles.namePasswordText}>Name:</Text>
        <TextInput
          onChangeText={(text) => this.setState({ email: text })}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          style={loginStyles.inputText}
        />
        <Text style={loginStyles.namePasswordText}>Password:</Text>
        <TextInput
          onChangeText={(text) => this.setState({ password: text })}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          style={loginStyles.inputText}
        />
      </View>
      <View style={loginStyles.loginButtonContainer}>
        {/* login button container */}

        <TouchableOpacity>
          <Text
            style={loginStyles.loginButton}
            onPress={() => navigation.navigate("Attraction Page")}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={loginStyles.instructionText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={loginStyles.instructionTextButton}> Sign Up! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#69A297",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  inputText: {
    backgroundColor: "#E5E5E5",
    borderColor: "#003f5c",
    borderRadius: 10,
    height: 40,
    marginBottom: 30,
    marginTop: 10,
    padding: 10,
  },
  instructionText: {
    color: "white",
    fontFamily: "Rockwell",
    fontSize: 14,
    fontWeight: "700",
    margin: 2,
  },
  instructionTextButton: {
    color: "white",
    fontFamily: "Rockwell",
    fontSize: 14,
    fontWeight: "700",
    margin: 2,
    textDecorationLine: "underline",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "#E2DFDF",
    borderRadius: 300,
    color: "#50808E",
    fontFamily: "Rockwell",
    fontSize: 20,
    fontWeight: "700",
    justifyContent: "center",
    marginBottom: 30,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  loginButtonContainer: {
    alignItems: "center",
    flex: 2,
    justifyContent: "flex-start",
  },
  namePasswordContainer: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 100,
    width: "80%",
  },
  namePasswordText: {
    alignItems: "flex-start",
    color: "white",
    fontFamily: "Rockwell",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default LoginPage;
