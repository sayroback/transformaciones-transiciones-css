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
          <NavLink to="/lessons/1">Lesson 1: Pseudo-clases </NavLink>
        </li>
        <li>
          <NavLink to="/lessons/2">Lesson 2: Pseudo-elementos </NavLink>
        </li>
      </ol>
    </nav>
  );
};
