import React from "react";
import propTypes from "prop-types";
import "../../assets/css/styles.css";
const Button = ({ loadMore }) => {
  return (
    <button
      className="w-full h-full text-xl  text-white btn-loading"
      onClick={() => loadMore()}
    >
      Cargar mas
    </button>
  );
};

Button.propTypes = {
  stats: propTypes.func,
};

export default Button;
