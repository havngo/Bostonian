import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import map from "../assets/map.png";

const MapScreen = ({ navigation }) => {
  return (
    //<View style={mapStyles.background}>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 42.3394,
          longitude: -71.05,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 42.3394,
            longitude: -71.094,
          }}
          onPress={() => navigation.navigate("MFA")}
          image={map}
          title={"Museum of Fine Arts"}
          pinColor={"#fff"}
        ></Marker>
        <Marker
          coordinate={{
            latitude: 42.350372,
            longitude: -71.060212,
          }}
          onPress={() => navigation.navigate("Bistro")}
          image={map}
          title={"Station Bistro & Ktv"}
          pinColor={"#fff"}
        ></Marker>
      </MapView>
      <TouchableOpacity
        style={mapStyles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text
          style={
            ({ fontFamily: "Rockwell" },
            { fontSize: 16 },
            { fontWeight: "bold" })
          }
        >
          Filter (0)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStyles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
  },
  mapView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
  text: {
    fontSize: 60,
    color: "white",
    fontFamily: "Rockwell",
    fontWeight: "bold",
  },
  button: {
    marginBottom: 20,
    backgroundColor: "#B0A1BA",
    borderColor: "#003f5c",
    borderRadius: 100,
    height: 40,
    width: 150,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

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
