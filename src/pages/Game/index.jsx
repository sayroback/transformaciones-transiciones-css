import React from "react";
import "../../styles/game/game.scss";
import { Counter } from "./Counter";

export const Game = () => {
  return (
    <div className="game">
      <div className="phone">
        <div className="layer-1"></div>
        <div className="layer-2"></div>
        <div className="layer-3"></div>
        <div className="layer-4"></div>
        <div className="layer-5"></div>
        <div className="layer-6"></div>
        <div className="layer-7"></div>
        <div className="layer-8"></div>
        <div className="layer-9"></div>
        <div className="layer-10"></div>
      </div>
      <Counter />
    </div>
  );
};
