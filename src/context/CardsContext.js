import React, { createContext, useState, useEffect } from "react";
import { allCards } from "./../constants";
import axios from "axios";
export const CardsContext = createContext();

const CardsContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [showModal, setShowModal] = useState(false);
  //const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokeInfo, setPokeInfo] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => getAllCards(), []);
  //useEffect(() => fetchData(), []);

  const getAllCards = () => {
    fetch(allCards())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetch(true);
        setCards(data.results);
      })
      .catch((err) => console.log(err));
  };

  const fetchData = async (pokemonIndexUrl) => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndexUrl}/`;
    const pokemonRes = await axios.get(pokemonUrl);
    const poke = await pokemonRes.data;
    setDoneFetch(true);

    setPokeInfo(poke);

    console.log("res", pokeInfo);
    //setPokeInfo(poke);
  };

  //console.log(cards);
  return (
    <CardsContext.Provider
      value={{
        doneFetch,
        cards,
        showModal,
        setShowModal,
        pokeInfo,
        fetchData,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
