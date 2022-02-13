import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Pressable, Switch, AppRegistry} from 'react-native';
import MyCheckbox from './MyCheckbox';
import Slider from '@react-native-community/slider'
import MyButton from './Button';
import reactDom from 'react-dom';

export default class Filter extends React.Component {

    render() {
        return(
            
            <View style={styles.background}>

                <Text style={styles.boldedFirstSubTitle}>Attraction Type</Text>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Athletics and Recreation</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Museums</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Food</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Shopping</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Historical Landmarks</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Cultural Centers</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.checkboxContainer}>
                        <MyCheckbox />
                        <Text style={styles.checkboxLabel}>Universities</Text>
                    </View>
                </View>




                <Text style={styles.boldedPrecedingSubTitle}>Cost</Text>

                <Slider 
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    value='initial value'
                />
                <View style={styles.spaceStyles}>
                    <Text style={styles.costStylesLeft}>$0</Text>
                    <Text style={styles.costStylesRight}>$100</Text>
                </View>





                <Text style={styles.boldedPrecedingSubTitle}>Distance</Text>

                <Slider 
                    maximumValue={100}
                    minimumValue={0}
                    step={1}
                    value='initial value'
                />

                <View style={styles.spaceStyles}>
                    <Text style={styles.distanceStylesLeft}>0 mi</Text>
                    <Text style={styles.distanceStylesRight}>20 mi</Text>
                </View>





                <View style={styles.footerStyles}>
                    <View>
                        <MyButton
                            text="Reset Filters"
                        />
                    </View>
                    <View>
                        <MyButton
                            text="Show Map"
                            />
                    </View>
                </View>



            </View>
        );
    }
}

export const styles = StyleSheet.create({
    background: {
        backgroundColor: '#5E4C5A',
        width: '100%',
        height: '100%',
        padding: 50,
    },

    boldedFirstSubTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Rockwell',
        fontSize: 25,
        padding: 10,
    },

    boldedPrecedingSubTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Rockwell',
        fontSize: 25,
        borderTopWidth: 30,
        padding: 10,
    },

    normalText: {
        color: 'white',
        fontFamily: 'Rockwell',
        fontSize: 20,
        padding: 5,
    },

    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    },

    buttonContainer: {
        margin: 3,
        flexDirection: 'row',
    },

    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
      },
    
      checkboxChecked: {
        backgroundColor: '#5E4C5A',
      },
    
      appContainer: {
        flex: 1,
        alignItems: 'center',
      },
    
      appTitle: {
        marginVertical: 16,
        fontWeight: 'bold',
        fontSize: 24,
      },
    
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    
      checkboxLabel: {
        marginLeft: 8,
        fontWeight: "500",
        fontSize: 18,
        fontFamily: 'Rockwell',
        color: 'white',
      },

      spaceStyles: {
        borderColor: '#5E4C5A',
        borderWidth: 10,
        //borderTopWidth: 10,
        //marginTopWidth: 10,
        flexDirection: 'row',
        justifyContent: "center"
      },

      costStylesLeft: {
        fontSize: 20,
        fontFamily: 'Rockwell',
        color: 'white',
        textAlign: 'left',
        marginRight: 220,
        borderTopWidth: 5,
      },

      costStylesRight: {
          fontSize: 20,
          fontFamily: 'Rockwell',
          color: 'white',
          textAlign: 'right',
          borderTopWidth: 5,
      },

      distanceStylesLeft: {
        fontSize: 20,
        fontFamily: 'Rockwell',
        color: 'white',
        textAlign: 'left',
        marginRight: 200,
        borderTopWidth: 5,
      },

      distanceStylesRight: {
          fontSize: 20,
          fontFamily: 'Rockwell',
          color: 'white',
          textAlign: 'right',
          borderTopWidth: 5,
      },

      footerStyles: {
        borderColor: '#5E4C5A',
        borderWidth: 30,
        flexDirection: 'row',
        justifyContent: "center"
      },
});