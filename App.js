import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import slothImage from './assets/sloth.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world 🐈</Text>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/200" }}
      />
      <Image
        style={styles.image}
        source={slothImage}
      />
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
  image: {
    borderRadius: 100,
    height: 200,
    width: 200,
  },
});
