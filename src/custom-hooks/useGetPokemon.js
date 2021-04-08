import { useState } from "react";
import axios from "axios";
const useGetPokemon = () => {
  const pokemonIndexUrl = window.location.pathname.split("/")[2];

  const [pokeInfo, setPokeInfo] = useState();
  const [pokeIndex, setPokeIndex] = useState(pokemonIndexUrl);
  const [load, setLoad] = useState(false);
  //const { pokeInfo, fetchData } = useContext(CardsContext);
  //console.log("poke index modal", pokemonIndex);

  //const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndexUrl}/`;
  //const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeIndex}/`;
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokeIndex}/`;

  const fetchData = async () => {
    await axios
      .get(pokemonUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .then((data) => {
        setLoad(true);
        setPokeInfo(data);
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
  };

  return { pokeInfo, load, pokeIndex, fetchData };
};

export default useGetPokemon;
