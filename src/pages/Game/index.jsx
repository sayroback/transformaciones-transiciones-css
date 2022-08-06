import React from "react";
import "../../styles/game/game.scss";
import { Bonny } from "./Bonny";
import { Cloud } from "./Cloud";
import { Counter } from "./Counter";
import { Tree } from "./Tree";
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
        <div className="layer-8">
          <Cloud />
        </div>
        <div className="layer-9">
          <Tree />
        </div>
        <div className="layer-10">
          <Cloud />
        </div>
      </div>
      <Counter />
    </div>
  );
};
