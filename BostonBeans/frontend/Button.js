import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class MyButton extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 80,
        marginBottom: 120,
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 17,
        height: 50,
        width: 140,
        borderRadius: 100,
      },
      text: {
          borderTopWidth: 2,
          fontFamily: 'Rockwell',
          fontSize: 15,
      }
});