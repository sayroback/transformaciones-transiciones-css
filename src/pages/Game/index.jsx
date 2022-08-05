import React from "react";
import "../../styles/game/game.scss";
import { Bony } from "./Bony";
import { Counter } from "./Counter";
import { Wall } from "./Wall";

export const Game = () => {
  return (
    <div className="game">
      <div className="phone">
        <div className="layer-1">
          <Bony />
        </div>
        <div className="layer-2">
          <Bony />
        </div>
        <div className="layer-3">
          <Wall />
        </div>
        <div className="layer-4">
          <Bony />
        </div>
        <div className="layer-5">
          <Wall />
        </div>
        <div className="layer-6">
          <Bony />
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
