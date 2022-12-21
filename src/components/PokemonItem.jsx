import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme";

const getTypeColor = (typeName) =>{
  const typeColors = new Map([
    ["normal", '#5E5D5C'],
    ["fighting", '#F7D4D4'],
    ["flying", '#749799'],
    ["poison", '#295A36'],
    ["ground", '#8C6262'],
    ["rock", '#886C5E'],
    ["ghost", '#8C4BA4'],
    ["steel", '#888888'],
    ["fire", '#FF5613'],
    ["water", '#3062D0'],
    ["grass", '#46FF03'],
    ["electric", '#FFEA05'],
    ["psychic", '#EB8041'],
    ["ice", '#B7F3FB'],
    ["dragon", '#2F0A63'],
    ["dark", '#181818'],
    ["fairy", '#F6B2ED'],
    ["unknown", '#000000'],
    ["shadow", '#272727'],
  ]);

  return typeColors.get(typeName)?typeColors.get(typeName) : typeColors.get('unknown')
}

const PokemonItem = (pokemon) => {
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.pokemonItem} key={pokemon.id.toString()}>
      <View style={styles.headerRow}>
        <Image
          style={styles.image}
          source={{ uri: pokemon.sprites.front_default }}
        />

        <View style={styles.headerRightColumn}>
          <StyledText fontSize="subheading" fontWeight="bold">
            {pokemon.id + " " + capitalizeFirst(pokemon.name)}
          </StyledText>

          <StyledText>Weight: {pokemon.weight}</StyledText>
          <View style={styles.typesList}>
            {pokemon.types.map((type) => (
              <StyledText style={{...styles.pokemonType, backgroundColor: getTypeColor(type.type.name)}} key={type.type.name}>
                {type.type.name}
              </StyledText>
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
    marginHorizontal: 20,
    marginVertical:10,
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#E6E6E6",
    cornerRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  headerRightColumn: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    flexDirection: "column",
    flexGrow: 1,
    alignSelf:"center"
  },
  headerRow: {
    flexDirection: "row",
  },
  typesList: {
    flexDirection: "row",
  },
  pokemonType: {
    marginRight: 4,
    padding: 4,
    color: theme.colors.white,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden", // en texto es necesario para que apareza el border radius
  },
});
