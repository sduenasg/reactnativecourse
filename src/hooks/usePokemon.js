import { useEffect, useState } from "react";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    setPokemonList((currentPokemonList) => []);

    const response = await globalThis.fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0"
    );
    const json = await response.json();

    json.results.forEach(async (pokemon) => {
      const responseDetail = await globalThis.fetch(pokemon.url);
      const jsonDetail = await responseDetail.json();

      setPokemonList((currentPokemonList) =>
        [...currentPokemonList, jsonDetail].sort((a, b) =>
          a.id < b.id ? -1 : 1
        )
      );
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemonList: pokemonList };
};

export default usePokemon;
