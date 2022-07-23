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
        <li>
          <NavLink to="/lessons/3">Lesson 3: Transform translate</NavLink>
        </li>
        <li>
          <NavLink to="/lessons/4">
            Lesson 4: Transform rotate, scale, skew, Transform origin y matrix
          </NavLink>
        </li>
        <li>
          <NavLink to="/lessons/5">
            Lesson 5: Transform style y perspective
          </NavLink>
        </li>
        <li>
          <NavLink to="/lessons/6">Lesson 6: Backface visibility</NavLink>
        </li>
        <li>
          <NavLink to="/lessons/7">
            Lesson 7: Efecto parallax: estructura HTML
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};
