import React from "react";
import pikachu from "../../assets/img/pokemon-sad.jpg";
const index = () => {
  return (
    <div
      className="w-full flex  justify-center items-center"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <div
        className="flex flex-col h-full items-center justify-around text-3xl font-bold"
        style={{ width: "800px" }}
      >
        <p>Not Found!</p>
        <img
          src={pikachu}
          className="w-full h-auto"
          style={{ maxWidth: "400px" }}
          alt="not found"
        />
      </div>
    </div>
  );
};

export default index;
