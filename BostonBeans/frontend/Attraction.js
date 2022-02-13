import { StatusBar } from "expo-status-bar";
import museum from "../assets/museum.jpeg";
import map from "../assets/map.png";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.tinyLogo} source={museum} />
        <Text style={styles.title}>Boston Museum of Fine Arts</Text>
        <Text style={styles.des}>Distance from You:</Text>
        <Text style={styles.more}>4.8 miles</Text>
        <Text style={styles.des}>Hours:</Text>
        <Text style={styles.more}>Sunday 10AM–5PM</Text>
        <Text style={styles.more}>Monday 10AM–5PM</Text>
        <Text style={styles.more}>Tuesday Closed</Text>
        <Text style={styles.more}>Wednesday Closed</Text>
        <Text style={styles.more}>Thursday 10AM–5PM</Text>
        <Text style={styles.more}>Friday 10AM–5PM</Text>
        <Text style={styles.more}>Saturday 10AM–5PM</Text>
        <Text style={styles.des}>Cost:</Text>
        <Text style={styles.more}>Free! (if you're a student)</Text>
        <Text style={styles.des}>Time Commitment:</Text>
        <Text style={styles.more}>Hours</Text>
        <Text style={styles.des}>Party Size:</Text>
        <Text style={styles.more}>1+</Text>
        <Text style={styles.des}>Website:</Text>
        <Text style={styles.more}
        onPress={() => Linking.openURL('https://www.mfa.org/')}>https://www.mfa.org/</Text>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Map Page")}}>
          <Image style={styles.mapbutton} source={map} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#B0A1BA",
  },
  contentContainer: {
    paddingVertical: 40,
    backgroundColor: "#B0A1BA",
    flexGrow: 1,
  },
  tinyLogo: {
    height: 217,
    width: 325,
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: "center",
  },
  des: {
    color: "#5E4C5A",
    fontSize: 28,
    fontFamily: "Optima-ExtraBlack",
    marginBottom: 10,
    marginLeft: 30,
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Optima-ExtraBlack",
    color: "#5E4C5A",
    fontSize: 35,
    marginRight: 40,
    marginBottom: 12,
    marginLeft: 25,
  },
  more: {
    color: "#5E4C5A",
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 35,
  },
  mapbutton: {
    height: 50,
    width: 50,
    margin: 20,
    alignSelf: "center",
  },
  topbar: {
    height: 50,
    width: 50,
    margin: 20,
    backgroundColor: "#E2DFDF",
  },
});
