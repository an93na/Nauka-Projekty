import React from 'react'
import classes from '../style/StyleModule.module.css'
import przyklad1 from '../assets/przyklad1.png'
import przyklad2 from '../assets/przyklad2.png'

export const Przyklad = () => {
  return (
    <div className={classes.sekcja}>
      <h3>
        Przyklad
      </h3>
      <p>Część 1 zadania</p>
      <img src={przyklad1} alt="przyklad1" className={classes.imgPrzyklad} />
      <p>Po wpisaniu numerków klikamy przycisk Zatwierdź i jeśli jest dobrze do przechodzimy do drugiego zadania</p>
      <p>Część 2 zadania</p>
      <img src={przyklad2} alt="przyklad1" className={classes.imgPrzyklad} />
      <p>W tej części wybieramy jedną prawidłową odpowiedź. A następnie klikamy przycisk Zatwierdź. Jeśli odpowiedzi są prawidłowe to przechodzimy do ostatniego zadania</p>
    </div>
  )
}
