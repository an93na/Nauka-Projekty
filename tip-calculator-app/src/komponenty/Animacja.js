import React from 'react'
import classes from '../style/Animacja1.module.css'

export const Animacja = (props) => {
  const { nazwa, zad, setZad } = props
  return (
    <div>
      <button className={classes.box} value={zad} onClick={() => setZad((e) => !e)}>
        {nazwa}
      </button>
    </div>
  )
}
