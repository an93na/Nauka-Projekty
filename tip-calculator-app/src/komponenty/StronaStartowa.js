import React from 'react'
import classes from '../style/Animacja1.module.css'
import rocket from '../assets/rocket.svg'

export const StronaStartowa = (props) => {
  const { setStartowa } = props
  return (
    <div className={classes.containerStartowa}>
      <button className={classes.boxStartowa} onClick={() => setStartowa(true)}>
        Rozpocznij
      </button>
      <div>
        <img src={rocket} alt="rocket" className={classes.rocket} />
      </div>
    </div>
  )
}
