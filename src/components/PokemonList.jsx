import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import pokemon from "../data/pokemon.js";
import PokemonItem from "./PokemonItem.jsx";

const PokemonList = () => {
  return (
    <View>
      <FlatList
        alwaysBounceVertical={false}
        data={pokemon}
        renderItem={({item: pokemon}) => {
          return <PokemonItem {...pokemon} />;
        }}
      />
    </View>
  );
};

export default PokemonList;
