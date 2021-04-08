import React, { useEffect } from "react";
import useGetPokemon from "../../custom-hooks/useGetPokemon";
import Loading from "../Common/loading";
import ProgressBar from "../Common/ProgressBar";
import "../../assets/css/styles.css";

const Details = () => {
  const { pokeInfo, load, pokeIndex, fetchData } = useGetPokemon();

  //const pokemonIndexUrl = window.location.pathname.split("/")[2];

  useEffect(() => {
    fetchData(pokeIndex);
  }, [pokeIndex, fetchData]);

  const TYPE_COLORS = {
    bug: "B1C12E",
    dark: "4F3A2D",
    dragon: "755EDF",
    electric: "FCBC17",
    fairy: "F4B1F4",
    fighting: "823551D",
    fire: "E73B0C",
    flying: "A3B3F7",
    ghost: "6060B2",
    grass: "74C236",
    ground: "D3B357",
    ice: "A3E7FD",
    normal: "C8C4BC",
    poison: "934594",
    psychic: "ED4882",
    rock: "B9A156",
    steel: "B5B5C3",
    water: "3295F6",
  };
  console.log("res2", pokeInfo);

  return (
    <>
      {load ? (
        <div
          className="w-full  py-8 px-8 flex justify-center"
          style={{ height: "calc(100vh - 150px)" }}
        >
          {pokeInfo !== undefined && (
            <div
              className="w-full h-full flex flex-col justify-start items-center rounded-xl p-8"
              style={{ maxWidth: "800px", backgroundColor: "#E9EBEC" }}
            >
              <div className="w-full h-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">{pokeInfo.name}</h1>
                <div>
                  {pokeInfo.types &&
                    pokeInfo.types.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full mr-2 text-base font-bold"
                        style={{
                          backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
                          color: "white",
                        }}
                      >
                        {type.type.name}
                      </span>
                    ))}
                </div>
              </div>

              {/* SECCION IMG STATS */}
              <div className="w-full h-full flex justify-between items-center">
                <div className="w-1/2 h-auto flex justify-center">
                  {pokeInfo.sprites.front_default && (
                    <img
                      src={pokeInfo.sprites.front_default}
                      className="w-full h-auto"
                      style={{ maxWidth: "200px" }}
                      alt={pokeInfo.name}
                    />
                  )}
                </div>
                {/* SECCION STATS */}
                <div className="w-1/2 h-full flex flex-col justify-center">
                  <ProgressBar stats="hp" width={pokeInfo.stats[0].base_stat} />
                  <ProgressBar
                    stats="attack"
                    width={pokeInfo.stats[1].base_stat}
                  />
                  <ProgressBar
                    stats="defense"
                    width={pokeInfo.stats[2].base_stat}
                  />
                  <ProgressBar
                    stats="special-attack"
                    width={pokeInfo.stats[3].base_stat}
                  />
                  <ProgressBar
                    stats="special-defense"
                    width={pokeInfo.stats[4].base_stat}
                  />
                  <ProgressBar
                    stats="speed"
                    width={pokeInfo.stats[5].base_stat}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
