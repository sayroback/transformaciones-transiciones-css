import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lesson7 = () => {
  const numLesson = 7;

  return (
    <LayoutLessons>
      <div className={`lesson${numLesson}`}>
        <h1>{`Lesson ${numLesson}:`} Backface visibility</h1>
        <h2>Ejercicio</h2>
        <div className={`lesson${numLesson}__exercise`}>
          <div class="parallax-container">
            <div class="image image_background">
              <img
                src="https://i.ibb.co/jbLKgvX/Background.png"
                alt="background"
              />
            </div>
            <div class="image image_middle">
              <div class="card one"></div>
              <div class="card two"></div>
              <div class="card three"></div>
            </div>
            <div class="image image_foreground">
              <img src="https://i.ibb.co/vJdbRkj/Alice.png" alt="Alice" />
            </div>
          </div>
        </div>
        <div className={`lesson${numLesson}__notes`}>
          <h1>Notas</h1>
          <h3>Efecto parallax</h3>
          <p>
            El efecto de paralaje o parallax es una técnica en la que el fondo
            se mueve a una velocidad distinta que la del contenido. El resultado
            es un ligero efecto de profundidad, dejando ver partes que antes no
            podías visualizar. Te ayuda a sumergirte totalmente en el contenido,
            similar al efecto 3D.
          </p>
        </div>
      </div>
    </LayoutLessons>
  );
};
