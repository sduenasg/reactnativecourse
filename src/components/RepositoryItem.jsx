import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepositoryItem = (repo) => {
  return (
    <View style={styles.repositoryItem} key={repo.id}>
      <StyledText fontSize="subheading" fontWeight="bold">
        FullName: {repo.fullName}
      </StyledText>
      <StyledText>Description: {repo.description}</StyledText>
      <StyledText>Language: {repo.language}</StyledText>
      <StyledText>Stars: {repo.stargazersCount}</StyledText>
      <StyledText>Forks: {repo.forksCount}</StyledText>
      <StyledText>Reviews: {repo.reviewCount}</StyledText>
      <StyledText>Rating: {repo.ratingAverage}</StyledText>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  repositoryItem: {
    flexDirection: "column",
    padding: 20,
  },
});
