import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/lessons">Lessons</Link>
      </nav>
    </div>
  );
};
