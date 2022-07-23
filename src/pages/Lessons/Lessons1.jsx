import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lessons1 = () => {
  return (
    <LayoutLessons>
      <div className="lessons">
        <h1>Lessons 1: Pseudo-clases y pseudo-elementos en las animaciones</h1>
        <h2>Ejercicio</h2>
        <div className="lessons__exercise">
          <a href="/">Sayroback</a>
          <a href="/hola">Sayroback</a>
          <p className="yes">Si</p>
          <p className="not">No</p>
          <div className="container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <div className="lessons__notes">
          <h1>Notas</h1>
          <h3>:link</h3>
          <p>
            Es una pseudo clase que selecciona aquellos enlaces que{" "}
            <b>aun no han</b> sido visitados.
          </p>
          <h3>:visited</h3>
          <p>
            Es una pseudo clase que selecciona aquellos enlaces que <b>ya</b>{" "}
            han sido visitados.
          </p>
          <h3>:hover</h3>
          <p>
            Generalmente se activa cuando el usuario se desplaza sobre un
            elemento con el cursor
          </p>
          <h3>:not()</h3>
          <p>
            La pseudoclase :not() representa elementos que no coinciden con una
            lista de selectores. Como evita que se seleccionen elementos
            específicos, se lo conoce como la pseudoclase de negación.
          </p>
          <h3>:nth-child(A)</h3>
          <p>
            Toma al elemento según la posición en la que este. Comienza del 1
            hasta n.
          </p>
        </div>
      </div>
    </LayoutLessons>
  );
};