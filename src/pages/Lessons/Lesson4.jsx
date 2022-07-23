import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lesson4 = () => {
  const numLesson = 4;
  return (
    <LayoutLessons>
      <div className={`lesson${numLesson}`}>
        <h1>
          {`Lesson ${numLesson}:`} Transform rotate, scale, skew, Transform
          origin y matrix
        </h1>
        <h2>Ejercicio</h2>
        <div className={`lesson${numLesson}__exercise`}>
          <div className="skew"></div>
          <div className="scale"></div>
          <div className="rotate"></div>
          <div className="container">
            <div className="transform-origin"></div>
          </div>
        </div>
        <div className={`lesson${numLesson}__notes`}>
          <h1>Notas</h1>
          <h3>Rotate</h3>
          <p>
            Es una función de la propiedad transform que te permite rotar un
            elemento HTML a través de los ejes del navegador. El valor que
            recibe es un ángulo, por ejemplo, “45deg” (45 grados) o “2rad” (2
            radianes). Los ángulos positivos están en sentido horario, y los
            negativos en sentido antihorario.
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
                <td>rotate(angle)</td>
              </tr>
              <tr>
                <td>Eje X</td>
                <td>rotateX(angle)</td>
              </tr>
              <tr>
                <td>Eje Y</td>
                <td>rotateY(angle)</td>
              </tr>
              <tr>
                <td>Eje Z</td>
                <td>rotateZ(angle)</td>
              </tr>
              <tr>
                <td>Múltiple</td>
                <td>rotate3d(x,y,z,angle)</td>
              </tr>
            </tbody>
          </table>
          <h3>Scale</h3>
          <p>
            Es una función de la propiedad transform que te permite escalar un
            elemento HTML a través de sus ejes. El valor que recibe es un número
            multiplicador al elemento original. Si el elemento es igual a 1
            entonces sigue como el original; mayor a 1 aumenta de tamaño; y,
            menor a 1 disminuye de tamaño.
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
                <td>scale(x)</td>
              </tr>
              <tr>
                <td>Eje X</td>
                <td>scaleX(x)</td>
              </tr>
              <tr>
                <td>Eje Y</td>
                <td>scaleY(y)</td>
              </tr>
              <tr>
                <td>Eje Z</td>
                <td>scaleZ(z)</td>
              </tr>
              <tr>
                <td>Múltiple</td>
                <td>scale3d(x,y,z)</td>
              </tr>
            </tbody>
          </table>
          <h3>Scale</h3>
          <p>
            Es una función de la propiedad transform que te permite escalar un
            elemento HTML a través de sus ejes. El valor que recibe es un número
            multiplicador al elemento original. Si el elemento es igual a 1
            entonces sigue como el original; mayor a 1 aumenta de tamaño; y,
            menor a 1 disminuye de tamaño.
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
                <td>skew(angleX, angleY)</td>
              </tr>
              <tr>
                <td>Eje X</td>
                <td>skewX(angle)</td>
              </tr>
              <tr>
                <td>Eje Y</td>
                <td>skewY(angle)</td>
              </tr>
            </tbody>
          </table>
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
          <h3>Matrix </h3>
          <p>
            Es una función de la propiedad transform que te permite realizar
            varios efectos en uno solo.
          </p>
          <h3>Transform origin </h3>
          <p>
            El origen es el punto en el cual la transformación se ejecutará. La
            propiedad transform-origin permite cambiar el origen de las
            transformaciones, que por defecto está en el centro del elemento.{" "}
          </p>
          <figure>
            <img
              src="https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/animationland08.PNG"
              alt="Representación de la propiedad transform-origin"
            />
          </figure>
        </div>
      </div>
    </LayoutLessons>
  );
};
