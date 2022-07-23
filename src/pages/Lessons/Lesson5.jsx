import React, { useState } from "react";
import styled from "styled-components";
import { LayoutLessons } from "./LayoutLessons";
import { useRef } from "react";

const Perspective = styled.div`
  transform: rotateX(${(props) => props.deg}deg);
  color: red;
`;

const Lesson5 = () => {
  const [deg, setDeg] = useState("20");
  const numLesson = 5;
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      rango: formData.get("deg"),
    };
    setDeg(data.rango);
  };

  return (
    <LayoutLessons>
      <div className={`lesson${numLesson}`}>
        <h1>{`Lesson ${numLesson}:`} Transform style y perspective</h1>
        <h2>Ejercicio</h2>
        <div className={`lesson${numLesson}__exercise`}>
          <form action="" ref={form}>
            <input
              onChange={handleSubmit}
              type="range"
              name="deg"
              min="-90"
              max="90"
              step="1"
              value={deg}
            />
          </form>
          <p>{`transform: rotateX(${deg}deg);`}</p>
          <div className="container">
            <Perspective deg={deg} className="item"></Perspective>
          </div>
        </div>
        <div className={`lesson${numLesson}__notes`}>
          <h1>Notas</h1>
          <h3>Transform-style</h3>
          <p>
            La propiedad transform-style de CSS establece si un elemento hijo
            está en el plano 2D (flat) o 3D (preserve-3d). Por defecto, el
            elemento está con valor flat.
          </p>
          <h3>Perspective</h3>
          <p>
            Se utiliza para proveer de profundidad a un elemento con respecto al
            usuario y dar la sensación de 3D. El valor que recibe la propiedad
            es una longitud (px, rem, etc.) que representa la profundidad del
            plano para construir la perspectiva.
          </p>
          <h3>Cambiar el origen de la perspectiva. </h3>
          <p>
            La propiedad perspective-origin es la encargada de cambiar el origen
            de la perspectiva, por lo que el usuario percibirá de diferente
            forma el elemento.
          </p>
        </div>
      </div>
    </LayoutLessons>
  );
};

export default Lesson5;
