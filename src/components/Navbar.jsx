import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row bg-black justify-center ">
        <div>
          <NavLink className="mr-3 hover:bg-red-500" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="mr-3 hover:bg-red-500" to="/about">
            About
          </NavLink>
        </div>
        <div>
          <NavLink className="mr-3 hover:bg-red-500" to="/post">
            Post content
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
