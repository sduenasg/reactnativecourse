import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme";

const PokemonItem = (pokemon) => {
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.pokemonItem} key={pokemon.id}>
      <View style={styles.headerRow}>
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.front_default }}
        />

        <View style={styles.headerRightColumn}>
          <StyledText fontSize="subheading" fontWeight="bold">
            {capitalizeFirst(pokemon.name)}
          </StyledText>

          <StyledText>Weight: {pokemon.weight}</StyledText>
          <View style={styles.typesList}>
            {pokemon.types.map((type) => (
              <StyledText style={styles.language}>{type.name}</StyledText>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokemonItem;

const styles = StyleSheet.create({
  pokemonItem: {
    flexDirection: "column",
    padding: 20,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  headerRightColumn: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    flexDirection: "column",
    flexGrow: 1,
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
  },
  typesList: {
    flexDirection: "row",
  },
  language: {
    marginRight: 4,
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      web: "orange",
      ios: "green",
    }),
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", // en texto es necesario para que apareza el border radius
  },
});
