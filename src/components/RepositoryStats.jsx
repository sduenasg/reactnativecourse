import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";

const parseThousands = value =>{
    return value>= 1000
    ? `${Math.round(value/100)/10}k`
    : String(value)
}

const RepositoryStats = (repo) => {
  return (
    <View style={styles.container} key={repo.id}>
      <View style={styles.statContainer}>
        <StyledText align="center" fontWeight="bold">
          Stars⭐
        </StyledText>
        <StyledText align="center">{parseThousands(repo.stargazersCount)}</StyledText>
      </View>
      <View style={styles.statContainer}>
        <StyledText align="center" fontWeight="bold">
          Forks🍴
        </StyledText>
        <StyledText align="center">{parseThousands(repo.forksCount)}</StyledText>
      </View>
      <View style={styles.statContainer}>
        <StyledText align="center" fontWeight="bold">
          Reviews#️⃣
        </StyledText>
        <StyledText align="center">{parseThousands(repo.reviewCount)}</StyledText>
      </View>
      <View style={styles.statContainer}>
        <StyledText align="center" fontWeight="bold">
          Avg Rating♥
        </StyledText>
        <StyledText align="center">{repo.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-around",
  },
  statContainer: {
    paddingHorizontal: 12,
    flexDirection: "column",
  },
});
