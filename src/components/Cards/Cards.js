import React, { useState } from "react";
import propTypes from "prop-types";
import Card from "./Card";
import "../../assets/css/styles.css";
import Button from "../Common/Button";

const Cards = ({ cards }) => {
  console.log(cards);
  const [maxValue, setMaxValue] = useState(12);

  const loadMore = () => {
    setMaxValue(maxValue + maxValue);
  };

  return (
    <>
      <>
        <div className="flex flex-wrap justify-center w-full h-full">
          {cards.slice(0, maxValue).map((poke, index) => {
            const { url, name } = poke;
            return <Card name={name} url={url} key={index} />;
          })}
        </div>
        <div className=" w-full h-full flex justify-center my-8">
          {maxValue <= cards.length && <Button loadMore={loadMore} />}
        </div>
      </>
    </>
  );
};

Cards.propTypes = {
  cards: propTypes.array,
};

export default Cards;
