import React from "react";
import styled from "styled-components";
import "../../styles/game/game.scss";
import { Bonny } from "./Bonny";
import { Cloud } from "./Cloud";
import { Tree } from "./Tree";
import { Wall } from "./Wall";

const Layer = styled.div`
  animation-name: layer;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  &.layer-1 {
    animation-duration: ${(props) => Math.random() + props.speed}s;
    animation-delay: ${(props) => Math.random() * 2}s;
  }
  &.layer-2 {
    animation-duration: ${(props) => Math.random() + props.speed}s;
    animation-delay: ${(props) => Math.random() * 2}s;
  }
  &.layer-4 {
    animation-duration: ${(props) => Math.random() + props.speed}s;
    animation-delay: ${(props) => Math.random() * 2}s;
  }
  &.layer-6 {
    animation-duration: ${(props) => Math.random() + props.speed}s;
    animation-delay: ${(props) => Math.random() * 2}s;
  }
  @keyframes layer {
    0% {
      bottom: 0;
    }
    50% {
      bottom: -80px;
    }
    100% {
      bottom: 0;
    }
  }
`;

export const Game = () => {
  const [score, setScore] = React.useState(0);
  const [speed, setSpeed] = React.useState(2.5);

  const handleClick = () => {
    if (score >= 35) {
      let newScore = score + 1;
      setScore(newScore);
      console.log(speed);
    } else if (score >= 20) {
      let newScore = score + 1;
      setScore(newScore);
      let newSpeed = -0.07 * newScore + 2.8;
      setSpeed(newSpeed);
      console.log(speed);
    } else {
      let newScore = score + 1;
      setScore(newScore);
      let newSpeed = -0.075 * newScore + 2.8;
      setSpeed(newSpeed);
      console.log(speed);
    }
  };

  const bonnys = [1, 2, 4, 6];

  return (
    <div className="game">
      <div className="phone">
        <div className="Title">
          <h1>Take a rabbit</h1>
          <h3 className="score">Score: {score}</h3>
        </div>
        {bonnys.map((bonny) => (
          <Layer
            key={bonny}
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
