import React from 'react'
import classes from '../style/StyleModule.module.css'
import { Zadanie1 } from './Zadanie1'

export const Zadanie = () => {
  return (
    <div className={classes.sekcja}>
      <h3>Zadanie</h3>
      <Zadanie1 />
    </div>
  )
}
