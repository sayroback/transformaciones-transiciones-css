import React from "react";
import "../../styles/game/game.scss";
import { Bonny } from "./Bonny";
import { Counter } from "./Counter";
import { Wall } from "./Wall";

export const Game = () => {
  return (
    <div className="game">
      <div className="phone">
        <div className="layer-1">
          <Bonny />
        </div>
        <div className="layer-2">
          <Bonny />
        </div>
        <div className="layer-3">
          <Wall />
        </div>
        <div className="layer-4">
          <Bonny />
        </div>
        <div className="layer-5">
          <Wall />
        </div>
        <div className="layer-6">
          <Bonny />
        </div>
        <div className="layer-7">
          <Wall />
        </div>
        <div className="layer-8"></div>
        <div className="layer-9"></div>
        <div className="layer-10"></div>
      </div>
      <Counter />
    </div>
  );
};
