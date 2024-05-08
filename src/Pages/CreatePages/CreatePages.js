import React from "react";
import { NavLink } from "react-router-dom";

const CreatePages = () => {
  return (
    <div className="d-flex justify-center flex-col items-center">
      <h1 className="p-8">Welcome to ADMIN menu</h1>
      <ul className="d-flex justify-center flex-col">
        <li className="nav-item">
          <NavLink to="/create-computer" className="nav-links text-black ">
            <button>Create new computer</button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create-game" className="nav-links text-black">
            <button>Create new game</button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create-keyboard" className="nav-links text-black">
            <button>Create new keyboard</button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/create-mouse" className="nav-links text-black">
            <button>Create new mouse</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CreatePages;
