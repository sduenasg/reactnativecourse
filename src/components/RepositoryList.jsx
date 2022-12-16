import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import respositories from "../data/respositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
  return (
    <View>
      <FlatList
        alwaysBounceVertical={false}
        data={respositories}
        renderItem={({item: repo}) => {
          return <RepositoryItem {...repo} />;
        }}
      />
    </View>
  );
};

export default RepositoryList;
