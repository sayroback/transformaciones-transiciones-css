import React from "react";
import { NavLink } from "react-router-dom";

export const NavLessons = () => {
  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/lessons">Index</NavLink>
        </li>
        <li>
          <NavLink to="/lessons/1">Lessons1</NavLink>
        </li>
      </ol>
    </nav>
  );
};
