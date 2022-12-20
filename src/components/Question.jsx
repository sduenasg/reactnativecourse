import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const QuestionCard = ({ question, image }) => {
  const onPress = (option) => {
    alert(option);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      <Image source={image} style={styles.image} />
      <View style={styles.answerContainer}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity key={value} onPress={() => onPress(value)}>
            <Text>{getEmojiForValue(value)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const getEmojiForValue = (value) => {
  switch (value) {
    case 1:
      return "😞";
    case 2:
      return "😕";
    case 3:
      return "😐";
    case 4:
      return "😊";
    case 5:
      return "😍";
    default:
      return "🤔";
  }
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  answerContainer: {
    flexDirection: "row",
  },
};

export default QuestionCard;
