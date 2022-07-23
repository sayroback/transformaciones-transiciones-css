import React from "react";
import { NavLessons } from "../../components/NavLessons";

export const LayoutLessons = ({ children }) => {
  return (
    <div>
      <NavLessons />
      {children}
    </div>
  );
};
