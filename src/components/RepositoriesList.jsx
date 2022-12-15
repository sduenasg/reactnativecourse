import React from "react";
import { View, Text } from "react-native";
import respositories from "../data/respositories";

const RepositoryList = () => {
  return (
    <View>
      {respositories.map((repo) => (
        <View key={repo.id}>
          <Text>{repo.id}</Text>
        </View>
      ))}
    </View>
  );
};

export default RepositoryList