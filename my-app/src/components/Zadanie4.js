import React from 'react'
import classes from '../style/StyleModule.module.css'

export const Zadanie4 = () => {
  return (
    <div style={{marginRight: '5px'}}>
      <p>Krzyżówka</p>
      <form action="">
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
          <input type="text" className={classes.krzyz} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div className={classes.krzyz} ></div>
          <div className={classes.krzyz} ></div>
          <div className={classes.krzyz} ></div>

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
