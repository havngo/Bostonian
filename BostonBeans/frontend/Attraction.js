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

<<<<<<< HEAD
const Attraction = (props) => {
=======
export default function App({navigation}) {
>>>>>>> main
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.tinyLogo} source={props.imgSource} />
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.des}>Distance from You:</Text>
        <Text style={styles.more}>{props.distance} miles</Text>
        <Text style={styles.des}>Hours:</Text>
        <Text style={styles.more}>Sunday {props.hours[0]}</Text>
        <Text style={styles.more}>Monday {props.hours[1]}</Text>
        <Text style={styles.more}>Tuesday {props.hours[2]}</Text>
        <Text style={styles.more}>Wednesday {props.hours[3]}</Text>
        <Text style={styles.more}>Thursday {props.hours[4]}</Text>
        <Text style={styles.more}>Friday {props.hours[5]}</Text>
        <Text style={styles.more}>Saturday {props.hours[6]}</Text>
        <Text style={styles.des}>Cost:</Text>
        <Text style={styles.more}>{props.cost}</Text>
        <Text style={styles.des}>Time Commitment:</Text>
        <Text style={styles.more}>{props.timeCommitment}</Text>
        <Text style={styles.des}>Party Size:</Text>
        <Text style={styles.more}>{props.partySize}</Text>
        <Text style={styles.des}>Website:</Text>
<<<<<<< HEAD
        <Text style={styles.more} href={props.website}>
          {props.website}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
=======
        <Text style={styles.more}
        onPress={() => Linking.openURL('https://www.mfa.org/')}>https://www.mfa.org/</Text>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Map Page")}}>
>>>>>>> main
          <Image style={styles.mapbutton} source={map} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

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

export default Attraction;
