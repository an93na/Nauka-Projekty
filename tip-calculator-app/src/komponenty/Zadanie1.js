import React from 'react'
import classes from '../style/Animacja1.module.css'

export const Zadanie1 = () => {
  return (
    <div>
      <h3>Opis zadania</h3>
      <p className={classes.pHome}>
        Twoim zadaniem jest ułoenie elementów w kolejności hronologicznej powstania (od lewej do prawej). Czyli w wyznaczone miejsce pod grafiką wpisujesz numerek od 1-4. 1 oznacza, że dana rzecz powstała najwczesniej, a 4 najpóźniej. Po dopasowaniu elementów wciśnij przycisk Zatwierdź.
      </p>
      <p className={classes.pHome}>
        Po zatwierdzeniu pojawi się seria pytań sprawdzająca czy wiesz dlaczego dany element powinien znaleźć się na wybranym przez Ciebie miejscu.
      </p>
    </div>
  )
}
