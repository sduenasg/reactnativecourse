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
  ScrollView,
  FlatList,
} from "react-native";
import slothImage from "./assets/sloth.png";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // new state depends on the previous state
    // key prop is automatically used by Flatlist to identify items
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text:enteredGoalText, key: Math.random().toString() }, 
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.topImage}>
        <Image style={styles.imageIcon} source={slothImage} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...🐈</Text>
        <FlatList
          alwaysBounceVertical = {false}
          data = {courseGoals}
          renderItem = {(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageIcon: {
    height: 50,
    width: 50,
  },
  topImage: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  appContainer: {
    flexDirection: "column",
    paddig: 50,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", //default is stretch
    padding: 24,
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0ecc",
    padding: 8,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
