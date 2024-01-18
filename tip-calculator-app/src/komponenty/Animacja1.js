import React from 'react'
import classes from './Animacja1.module.css'

export const Animacja1 = () => {
  return (
    <div className={classes.container}>
        <button className={classes.box}>
            Kwadrat1
        </button>
        <button className={classes.box}>
            Kwadrat2
        </button>
        <button className={classes.box}>
            Kwadrat3
        </button>
        <button className={classes.box}>
            Kwadrat4
        </button>
        <div className={classes.obrot}>
          obracaj w koło
        </div>
    </div>
  )
}
