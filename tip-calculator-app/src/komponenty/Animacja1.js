import React from 'react'
import classes from './Animacja1.module.css'

export const Animacja1 = () => {
  return (
    <div>
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
      </div>
      <div className={classes.containerObr}>
      <div className={classes.obrot}>
      </div>
      <div className={classes.obrot}>
      </div>
      <div className={classes.obrot}>
      </div>
      <div className={classes.obrot}>
      </div>
      </div>
    </div>
  )
}
