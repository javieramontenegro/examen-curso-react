import React from "react";
import propTypes from "prop-types";
const ProgressBar = ({ stats, width }) => {
  return (
    <div>
      {stats === "hp" && (
        <div className="mt-2">
          <h3 className="text-lg font-bold">HP</h3>
          <div
            className="progress-bar w-full h-5 rounded flex items-center"
            style={{ backgroundColor: "#ddd" }}
          >
            <div
              style={{
                width: `${width}%`,
                backgroundColor: "#9EFF6E",
              }}
              className="h-5 rounded flex justify-center"
            >
              <p className="text-base font-semibold">{width}</p>
            </div>
          </div>
        </div>
      )}
      {stats === "attack" && (
        <div className="mt-2">
          <h3 className="text-lg font-bold">Attack</h3>
          <div
            className="progress-bar w-full h-5 rounded flex items-center"
            style={{ backgroundColor: "#ddd" }}
          >
            <div
              style={{
                width: `${width}%`,
                backgroundColor: "#FF5733",
              }}
              className="h-5 rounded flex justify-center"
            >
              <p className="text-base font-semibold">{width}</p>
            </div>
          </div>
        </div>
      )}
      {stats === "defense" && (
        <div className="mt-2">
          <h3 className="text-lg font-bold">Defense</h3>
          <div
            className="progress-bar w-full h-5 rounded flex items-center"
            style={{ backgroundColor: "#ddd" }}
          >
            <div
              style={{
                width: `${width}%`,
                backgroundColor: "#6EC6FF",
              }}
              className="h-5 rounded flex justify-center"
            >
              <p className="text-base font-semibold">{width}</p>
            </div>
          </div>
        </div>
      )}
      {stats === "special-attack" && (
        <div className="mt-2">
          <h3 className="text-lg font-bold">Special-attack</h3>
          <div
            className="progress-bar w-full h-5 rounded flex items-center"
            style={{ backgroundColor: "#ddd" }}
          >
            <div
              style={{
                width: `${width}%`,
                backgroundColor: "#8B6EFF",
              }}
              className="h-5 rounded flex justify-center"
            >
              <p className="text-base font-semibold">{width}</p>
            </div>
          </div>
        </div>
      )}
      {stats === "special-defense" && (
        <div className="mt-2">
          <h3 className="text-lg font-bold">Special-defense</h3>
          <div
            className="progress-bar w-full h-5 rounded flex items-center"
            style={{ backgroundColor: "#ddd" }}
          >
            <div
              style={{
                width: `${width}%`,
                backgroundColor: "#FFD76E",
              }}
              className="h-5 rounded flex justify-center"
            >
              <p className="text-base font-semibold">{width}</p>
            </div>
          </div>
        </div>
      )}
      {stats === "speed" && (
        <div className="mt-2">
          <h3 className="text-lg font-bold">Speed</h3>
          <div
            className="progress-bar w-full h-5 rounded flex items-center"
            style={{ backgroundColor: "#ddd" }}
          >
            <div
              style={{
                width: `${width}%`,
                backgroundColor: "#FF886E",
              }}
              className="h-5 rounded flex justify-center"
            >
              <p className="text-base font-semibold">{width}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  stats: propTypes.string,
};

export default ProgressBar;
