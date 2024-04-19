import React from 'react'
import classes from '../style/StyleModule.module.css'
import obraz from '../assets/obrazTytulowa.jpg'
export const StronaStartowa = (props) => {
  const { setDalej } = props
  return (
    <div className={classes.startowa}>
      <img src={obraz} alt="strona tytułowa" className={classes.imgStart} />
      <button className={classes.btnStart} onClick={() => setDalej(true)}>Rozpocznij</button>
    </div>
  )
}
