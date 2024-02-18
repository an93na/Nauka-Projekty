import React from 'react'
import classes from '../style/StyleModule.module.css'
import homeImg from '../assets/home.jpg';

export const Home = () => {
  return (
    <div className={classes.sekcja}>
      <h3>Home</h3>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <div>
      <p className={classes.pHome}>Witaj Szanowny Panie albo Pani.</p>
      <p className={classes.pHome}> Miło, że odwiedzasz moją stronę. Nie znajdziesz tu jednak żadnych informacji o mnie ponieważ wszystkie otrzymałeś wcześniej.</p> 
      <p className={classes.pHome}> Teraz sprawdzimy jak wnikliwie je przeanalizowałeś :D </p>
      </div>
      <img src={homeImg} alt="homeImg" className={classes.imgHome} />
      </div>
    </div>
  )
}
