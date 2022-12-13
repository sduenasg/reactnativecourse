import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import slothImage from "./assets/sloth.png";


export default function App() {
  
  return (
    <View style={styles.container}>
      <Image style={styles.imageIcon} source={slothImage} />
      <Text style={styles.title}>hello world 🐈</Text>
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
    fontSize: 20,
  },
  image: {
    //resizeMode: "contain",
    borderRadius: 100,
    height: 200,
    width: 200,
  },
  imageIcon: {
    height: 50,
    width: 50,
  },
  button: {
    backgroundColor: "deepskyblue",
    padding: 7,
    marginTop: 10,
  },
});
