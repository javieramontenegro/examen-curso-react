import React, { useState, useEffect, useContext } from "react";
import { CardsContext } from "../../context/CardsContext";
import "../../assets/css/styles.css";

import { Link } from "react-router-dom";

const Card = ({ name, url }) => {
  const [pokeName, setPokeName] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState("");
  const { doneFetch } = useContext(CardsContext);

  console.log("poke index", pokemonIndex);
  useEffect(() => {
    const pokeIndex = url.split("/")[url.split("/").length - 2];
    //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`;
    setImageUrl(imageUrl);
    setPokeName(name);
    setPokemonIndex(pokeIndex);
  }, [name, url]);

  return (
    <>
      <Link
        to={`pokemon/${pokemonIndex}`}
        className=" w-full h-auto m-4 back-poke"
        style={{ maxWidth: "300px" }}
      >
        <div className="w-full h-auto flex justify-between flex-col items-center img-card p-6">
          <div className="w-full h-auto flex justify-between">
            <h1 className="text-2xl font-bold">#{pokemonIndex}</h1>
          </div>
          <h2 className="text-xl">{pokeName}</h2>
          {doneFetch ? null : <p>LOADING</p>}

          <img
            src={imageUrl}
            className="w-full h-auto"
            style={{
              maxWidth: "150px",
              display: `${doneFetch ? "block" : "none"} `,
            }}
            alt={pokeName}
            loading="lazy"
          />
        </div>
      </Link>
    </>
  );
};

export default Card;
