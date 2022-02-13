import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import map from "../assets/map.png";

const MyMarker = () => {
  return (
    <Marker
      coordinate={{
        latitude: 42.3394,
        longitude: -71.094,
      }}
      onPress={() => navigation.navigate("Attraction Page")}
      image={map}
      title={"Museum of Fine Arts"}
      pinColor={"#fff"}
    ></Marker>
  );
}

const MapScreen = ({navigation}) => {
        return (
            //<View style={mapStyles.background}>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: 37.78825,
                        longitude: 65.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >
                        <MyMarker />
                    </MapView>
                </View>
            //     <View style={{flex: 1}}>
            //         <TouchableOpacity 
            //         style={mapStyles.button}
            //         onPress={() => {}}>
            //             <Text style={{fontFamily: 'Rockwell'}, {fontSize: 16}, {fontWeight:'bold'}}>Filter (0)</Text>
            //         </TouchableOpacity>
            //     </View>
            // </View>
        );
}

const mapStyles = StyleSheet.create({
    background: {
      alignItems: "center",
      justifyContent: "center",
    },
    mapView: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        height: 500,
    },
    text: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'Rockwell',
        fontWeight: 'bold',
    },
    button: {
      marginTop: 10,
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

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      ...StyleSheet.absoluteFillObject,
    },
    mapbutton: {
      height: 50,
      width: 50,
      margin: 20,
      alignSelf: "center",
    },
  });


export default MapScreen;