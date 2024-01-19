import React from 'react'
import classes from '../style/Animacja1.module.css'

export const StronaStartowa = (props) => {
  const { setStartowa, startow } = props
  return (
    <div className={classes.containerStartowa}>
      <button className={classes.box} onClick={() => setStartowa(true)}>
        Rozpocznij
      </button>
    </div>
  )
}
