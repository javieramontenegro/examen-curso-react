import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/pokeball.svg";
import "../../assets/css/styles.css";
const Header = () => {
  return (
    <nav className=" relative w-full h-auto flex justify-between py-4 px-4 md:px-16 items-center rounded-b-3xl navbar">
      <div className="w-1/2 h-auto flex">
        <Link to={"/"}>
          <img src={logo} className="w-full h-auto img-logo" alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
