import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import octopusImage from "../assets/octopus.png";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText !== "") {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    } else alert("Input your goal description");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imageIcon} source={octopusImage} />
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button onPress={props.onCancel} title="Cancel" color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", //default is stretch
    padding: 24,
    borderBottomWidth: 1,
    borderColor: "gray",
    marginBottom: 24,
    backgroundColor: "#311b6b",
  },
  textInput: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 10,
    borderRadius: 6,
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },

  imageIcon: {
    height: 50,
    width: 50,
  },
});
