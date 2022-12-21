import { useEffect, useState } from "react";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonList = async () => {
    setPokemonList((currentPokemonList) => []);

    const response = await globalThis.fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=15000&offset=0"
    );
    const json = await response.json();

    for (let i = 0; i < json.results.length; i++) {
      let pokemon = json.results[i];
      let jsonDetail = await fetchPokemonDetail({url: pokemon.url})

      setPokemonList((currentPokemonList) =>
        [...currentPokemonList, jsonDetail].sort((a, b) =>
          a.id < b.id ? -1 : 1
        )
      );
    }

    //json.results.forEach(async (pokemon) => {
    //  const responseDetail = await globalThis.fetch(pokemon.url);
    //  const jsonDetail = await responseDetail.json();
    //
    //  setPokemonList((currentPokemonList) =>
    //    [...currentPokemonList, jsonDetail].sort((a, b) =>
    //      a.id < b.id ? -1 : 1
    //    )
    //  );
    //});
  };

  const fetchPokemonDetail = async (props) => {
    let responseDetail = await globalThis.fetch(props.url);
    return await responseDetail.json();
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return { pokemonList: pokemonList };
};

export default usePokemon;
