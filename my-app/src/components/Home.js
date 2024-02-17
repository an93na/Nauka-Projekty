import React from 'react'
import classes from '../style/StyleModule.module.css'
import homeImg from '../assets/home.jpg';

export const Home = () => {
  return (
    <div className={classes.sekcja}>
      <h3>Home</h3>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <div>
      <p style={{marginTop: 0, marginBottom: 0}}>Witaj Szanowny Panie albo Pani.</p>
      <p style={{marginTop: 0, marginBottom: 0}}> Miło, że odwiedzasz moją stronę. Nie znajdziesz tu jednak żadnych informacji o mnie ponieważ wszystkie otrzymałeś wcześniej.</p> 
      <p style={{marginTop: 0, marginBottom: 0}}> Teraz sprawdzimy jak wnikliwie je przeanalizowałeś :D </p>
      </div>
      <img src={homeImg} alt="homeImg" className={classes.imgHome} />
      </div>
    </div>
  )
}
