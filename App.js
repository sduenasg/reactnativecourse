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
  TextInput,
} from "react-native";
import slothImage from "./assets/sloth.png";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Image style={styles.imageIcon} source={slothImage} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...🐈</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddig:50,
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textInput: {
    borderWidth:1,
    borderColor: "#CCCCCC",
    width:'70%',
    marginRight:8,
    padding: 8
  },
  imageIcon: {
    height: 50,
    width: 50,
  },
});
