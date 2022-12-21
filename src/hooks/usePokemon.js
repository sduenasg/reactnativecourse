import { useEffect, useState } from "react";
import axios from "axios";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonList = async () => {
    setPokemonList((currentPokemonList) => []);

    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0"
    );

    for (let i = 0; i < response.data.results.length; i++) {
      let pokemon = response.data.results[i];
      let pokemonDetail = await fetchPokemonDetail({ url: pokemon.url });

      setPokemonList((currentPokemonList) =>
        [...currentPokemonList, pokemonDetail].sort((a, b) =>
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

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return { pokemonList: pokemonList };
};

const fetchPokemonDetail = async (props) => {
  let res = await axios.get(props.url)
  return res.data;
};

export default usePokemon;
