import React from 'react'
import classes from '../style/StyleModule.module.css'

export const Zadanie4 = () => {
  return (
    <div>
        <p>Krzyżówka</p>
        <form action="">
            <div style={{display: 'flex'}}>
            <input type="text" className={classes.krzyz} />
            <input type="text" className={classes.krzyz} />
            <input type="text" className={classes.krzyz} />
            <input type="text" className={classes.krzyz} />
            <input type="text" className={classes.krzyz} />
            <input type="text" className={classes.krzyz} />
            <input type="text" className={classes.krzyz} />

            </div>
        </form>
    </div>
  )
}
