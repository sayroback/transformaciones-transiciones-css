import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lesson3 = () => {
  const numLesson = 3;
  return (
    <LayoutLessons>
      <div className={`lesson${numLesson}`}>
        <h1>L{`Lesson ${numLesson}:`} Transform translate</h1>
        <h2>Ejercicio</h2>
        <div className={`lesson${numLesson}__exercise`}>
          <div className="shadow">
            <div className="circle"></div>
          </div>
        </div>
        <div className={`lesson${numLesson}__notes`}>
          <h1>Notas</h1>
          <h3>Transform</h3>
          <p>
            Es una propiedad CSS que sirve para transformar un elemento HTML
            mediante funciones. Estas funciones permitirán trasladar, escalar,
            rotar o torcer a lo largo, ancho y profundidad del elemento.
          </p>
          <h3>Translate</h3>
          <p>
            Es una función de la propiedad “transform” que te permite trasladar
            un elemento HTML a través de los ejes del navegador. El valor que
            recibe puede ser una longitud (px, rem, etc.) o un porcentaje.
          </p>
          <p>
            <a href="https://giphy.com/gifs/KRRSOKFINjskbRNENr">via GIPHY</a>
          </p>
          <table>
            <thead>
              <tr>
                <th>
                  <strong>Tipo</strong>
                </th>
                <th>
                  <strong>Valor con los argumentos que recibe</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eje X y Y</td>
                <td>translate(x,y)</td>
              </tr>
              <tr>
                <td>Eje X</td>
                <td>translateX(x)</td>
              </tr>
              <tr>
                <td>Eje Y</td>
                <td>translateY(y)</td>
              </tr>
              <tr>
                <td>Eje Z</td>
                <td>translateZ(z)</td>
              </tr>
              <tr>
                <td>Múltiple</td>
                <td>translate3d(x,y,z)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Además de translate, existen otras funciones que permiten
            transformar el elemento HTML para iniciar una animación.
          </p>
          <iframe
            title="This is a unique title"
            src="https://giphy.com/embed/KRRSOKFINjskbRNENr"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </div>
      </div>
    </LayoutLessons>
  );
};
