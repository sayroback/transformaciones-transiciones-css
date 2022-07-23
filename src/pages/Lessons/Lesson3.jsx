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
          <h3>::after</h3>
          <p>
            Crea un pseudo-elemento que es el último hijo del elemento
            seleccionado. Es comunmente usado para añadir contenido cosmético a
            un elemento con la propiedad content.Es en linea (inline) de forma
            predeterminada.
          </p>
        </div>
      </div>
    </LayoutLessons>
  );
};
