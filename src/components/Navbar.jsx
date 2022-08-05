import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link> | <Link to="/lessons">Lessons</Link> |{" "}
        <Link to="/game">Game</Link>
      </nav>
    </div>
  );
};
