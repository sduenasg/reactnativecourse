import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItem = (repo) => {
  return (
    <View style={styles.repositoryItem} key={repo.id}>
      <Image style={styles.image} source={{uri: repo.ownerAvatarUrl}} />

      <StyledText fontSize="subheading" fontWeight="bold">
        {repo.fullName}
      </StyledText>

      <StyledText>Description: {repo.description}</StyledText>

      <StyledText style={styles.language}>{repo.language}</StyledText>
      <RepositoryStats {...repo} />
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    margin:'auto',
    borderRadius:4,
    borderWidth:4,
    resizeMode: "contain",
  },
  repositoryItem: {
    flexDirection: "column",
    padding: 20,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", //en texto es necesario para que apareza el border radius
  },
});
