import React, { useState } from "react";
import GoalItem from "./src/components/GoalItem";
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
import GoalInput from "./src/components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "esto", key: "a" },
    { text: "es una", key: "b" },
    { text: "prueba", key: "c" },
  ]);

  const [modalIsVisible, setModalIsvisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsvisible(true);
  }

  function endAddGoalHandler() {
    setModalIsvisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    // new state depends on the previous state
    // key prop is automatically used by Flatlist to identify items
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log("DELETE " + id);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style = 'light'/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "column",
    paddig: 50,
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
