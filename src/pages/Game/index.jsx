import React from "react";
import styled from "styled-components";
import "../../styles/game/game.scss";
import { Bonny } from "./Bonny";
import { Cloud } from "./Cloud";
import { Tree } from "./Tree";
import { Wall } from "./Wall";

const Layer = styled.div`
  animation-name: layer;
  animation-duration: ${(props) => props.speed}s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @keyframes layer {
    0% {
      bottom: 0;
    }
    25% {
      bottom: -80px;
    }
    100% {
      bottom: 0;
    }
  }
`;

export const Game = () => {
  const [score, setScore] = React.useState(0);
  const [speed, setSpeed] = React.useState(3.5);

  const handleClick = () => {
    let newScore = score + 1;
    setScore(newScore);
    let newSpeed = -0.075 * newScore + 3.5;
    setSpeed(newSpeed);
  };
  console.log(speed);
  console.log(score);

  const bonnys = [1, 2, 4, 6];

  return (
    <div className="game">
      <div className="phone">
        <div className="Title">
          <h1>Hit a rabbit</h1>
          <h3 className="score">Score: {score}</h3>
        </div>
        {bonnys.map((bonny) => (
          <Layer
            speed={speed}
            className={`layer-${bonny}`}
            onClick={handleClick}
          >
            <Bonny />
          </Layer>
        ))}
        <div className="layer-3">
          <Wall />
        </div>
        <div className="layer-5">
          <Wall />
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
    </div>
  );
};
