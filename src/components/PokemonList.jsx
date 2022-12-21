import React from "react";
import { View, FlatList } from "react-native";
import PokemonItem from "./PokemonItem.jsx";
import usePokemon from "../hooks/usePokemon.js";

const PokemonList = () => {
  const { pokemonList } = usePokemon();

  return (
    <View>
      <FlatList
        alwaysBounceVertical={false}
        data={pokemonList}
        renderItem={({ item: pokemon }) => {
          return <PokemonItem {...pokemon} />;
        }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
      />
    </View>
  );
};

export default PokemonList;
