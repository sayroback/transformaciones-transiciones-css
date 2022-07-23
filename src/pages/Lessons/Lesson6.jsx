import React from "react";
import { LayoutLessons } from "./LayoutLessons";

export const Lesson6 = () => {
  const numLesson = 6;

  return (
    <LayoutLessons>
      <div className={`lesson${numLesson}`}>
        <h1>{`Lesson ${numLesson}:`} Backface visibility</h1>
        <h2>Ejercicio</h2>
        <div className={`lesson${numLesson}__exercise`}>
          <div className="card">
            <div className="face front"></div>
            <div className="face back"></div>
          </div>
        </div>
        <div className={`lesson${numLesson}__notes`}>
          <h1>Notas</h1>
          <h3>Backface-visibility</h3>
          <p>
            La propiedad backface-visibility de CSS permite mostrar la cara
            posterior de un elemento. Esta propiedad recibe dos valores: visible
            (visible) y hidden (oculto); por defecto, su valor es visible.
          </p>
          <p>
            La cara posterior de un elemento siempre tiene un fondo
            transparente, por lo que al ser visible y realizar una
            transformación en un solo eje, mostrará un efecto de imagen espejo.
            Mira la siguiente imagen y observa cómo Alicia cambia de lugar.
          </p>
          <figure>
            <img
              src="https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/animationland10.PNG"
              alt="Representación de la propiedad backfase-visibility"
            />
          </figure>
          <p>
            En cambio, si el valor es hidden no mostrará contenido. Con esto
            podemos realizar que un elemento se muestre al ocultarse otro, como
            un efecto de voltear una carta.
          </p>
        </div>
      </div>
    </LayoutLessons>
  );
};
