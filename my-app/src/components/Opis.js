import React from 'react'
import classes from '../style/StyleModule.module.css'
import opis from '../assets/opis.jpg'

export const Opis = () => {
  return (
    <div className={classes.sekcja}>
      <h3>Opis</h3>
      <div className={classes.pOpis}>
        <p>Podobno najtrudniej jest zacząć ale spokojnie myślę, że się dogadamy.</p>
        <p>Twoim zadaniem jest odpowiedzenie na serię kilku pytań. </p>
        <p> W pierwszej części trzeba dopasować cechy w odpowiedniej kolejności wpisując 1-6. </p>
        <p>Druga część to test złożony z pytań jednokrotnego wyboru</p>
        <p>Natomiast trzecia część ostatnia to też pytania jednokrotnego wyboru. </p>
        <p>Nie pozostaje mi nic innego jak życzyć powodzenia! </p>
      <img src={opis} alt="opis" className={classes.imgOpis}/>
      </div>
    </div>
  )
}
