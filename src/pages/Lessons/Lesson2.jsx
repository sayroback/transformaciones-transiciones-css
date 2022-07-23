import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lesson2 = () => {
  const numLesson = 2;
  return (
    <LayoutLessons>
      <div className={`lesson${numLesson}`}>
        <h1>L{`Lesson ${numLesson}:`} Pseudo-elementos</h1>
        <h2>Ejercicio</h2>
        <div className={`lesson${numLesson}__exercise`}>
          <div>Hola</div>
        </div>
        <div className={`lesson${numLesson}__notes`}>
          <h1>Notas</h1>
          <h3>::before</h3>
          <p>
            Crea un pseudoelemento que es el primer hijo del elemento
            seleccionado. Es usado normalmente para añadir contenido estético a
            un elemento, usando la propiedad content. Este elemento se muestra
            en línea con el texto de forma predeterminada.
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
