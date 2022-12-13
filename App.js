import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import slothImage from "./assets/sloth.png";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world 🐈</Text>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/200" }}
      />
      <Image style={styles.image} source={slothImage} />
      <Button
        title="ZZZZzzzzZZZZ 💤😴"
        color="cyan"
        onPress={() => console.log("Hej sekai")}
      />
      <Button title="Hej" color="blue" onPress={() => Alert.alert("Hej!!!")} />
      <TouchableOpacity
        style={styles.button}
        title="Hej"
        color="blue"
        onPress={() => Alert.alert("Hej!!!")}
      >
        <Text style={styles.buttonText}> Press me 🐱‍👤 </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20
  },
  image: {
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  button: {
    backgroundColor: "deepskyblue",
    padding:7,
    marginTop:10
  },
});
