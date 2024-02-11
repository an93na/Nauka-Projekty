import React from 'react'
import classes from '../style/StyleModule.module.css'
import obraz from '../assets/obrazTytulowa.jpg'
export const StronaStartowa = () => {
  return (
    <div className={classes.startowa}>
      <img src={obraz} alt="strona tytułowa" className={classes.imgStart} />
        <button className={classes.btnStart}>Rozpocznij</button>
    </div>
  )
}
