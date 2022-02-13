import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View, ImageBackground
} from "react-native";

const HomeScreen = ({navigation}) => {
        return (
            <ImageBackground 
                source={require('../assets/background.png')}
                style={homeStyles.background}>
                <Text style={homeStyles.text}>Bostonian</Text>
                <TouchableOpacity 
                style={homeStyles.button}
                onPress={() => {navigation.navigate("LoginPage")}}>
                    <Text style={{fontFamily: 'Rockwell'}, {fontSize: 16}}>Let's go</Text>
                </TouchableOpacity>
            </ImageBackground>);
}

const homeStyles = StyleSheet.create({
    background: {
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
    },
    text: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'Rockwell',
        fontWeight: 'bold',
    },
    button: {
      backgroundColor: "#E5E5E5",
      borderColor: "#003f5c",
      borderRadius: 100,
      height: 40,
      width: 120,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
})


export default HomeScreen;