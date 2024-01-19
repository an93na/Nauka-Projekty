import React from 'react'
import classes from '../style/Animacja1.module.css'

export const Animacja = (props) => {
  const {nazwa} = props
  return (
    <div>
        <button className={classes.box}>
          {nazwa}
        </button>
    </div>
  )
}
