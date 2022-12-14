import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import slothImage from "./assets/sloth.png";
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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // new state depends on the previous state
    // key prop is automatically used by Flatlist to identify items
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.topImage}>
        <Image style={styles.imageIcon} source={slothImage} />
      </View>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>List of goals...🐈</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
  goalsContainer: {
    flex: 5,
  },
});
