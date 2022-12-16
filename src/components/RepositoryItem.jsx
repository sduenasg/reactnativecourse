import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItem = (repo) => {
  return (
    <View style={styles.repositoryItem} key={repo.id}>
      <View style={styles.headerRow}>
        <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />

        <View style={styles.headerRightColumn}>
          <StyledText fontSize="subheading" fontWeight="bold">
            {repo.fullName}
          </StyledText>

          <StyledText>Description: {repo.description}</StyledText>

          <StyledText style={styles.language}>{repo.language}</StyledText>
        </View>
      </View>
      <RepositoryStats {...repo} />
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  repositoryItem: {
    flexDirection: "column",
    padding: 20,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    alignSelf:'flex-start'
  },
  headerRightColumn: {
    alignSelf:'flex-start',
    paddingHorizontal: 8,
    flexDirection: "column",
    flexGrow: 1,
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
  },
  language: {
    marginVertical:4,
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", // en texto es necesario para que apareza el border radius
  },
});
