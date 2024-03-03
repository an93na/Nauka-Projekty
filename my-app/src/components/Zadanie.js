import React from 'react'
import classes from '../style/StyleModule.module.css'
import { Zadanie1 } from './Zadanie1'
import { Zadanie2 } from './Zadanie2'
import { Zadanie3 } from './Zadanie3'

export const Zadanie = () => {
  return (
    <div className={classes.sekcja}>
      <h3>Zadanie</h3>
      <Zadanie1 />
      <Zadanie2/>
      <Zadanie3/>
    </div>
  )
}
