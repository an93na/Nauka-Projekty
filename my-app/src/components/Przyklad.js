import React from 'react'
import classes from '../style/StyleModule.module.css'
import przyklad1 from '../assets/przyklad1.png'

export const Przyklad = () => {
  return (
    <div className={classes.sekcja}>
      <h3>
        Przyklad
      </h3>
      <p>Część 1 zadania</p>
      <img src={przyklad1} alt="przyklad1" className={classes.imgOpis} />
      <p>Po wpisaniu numerków klikamy przycisk Zatwierdź i jeśli jest dobrze do przechodzimy do drugiego zadania</p>
    </div>
  )
}
