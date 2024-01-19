import React from 'react'
import { Animacja } from './Animacja'
import classes from '../style/Animacja1.module.css'

export const Animacja1 = () => {
  return (
    <div className={classes.container}>
      <Animacja nazwa="Zadanie1" />
      <Animacja nazwa="Zadanie2" />
      <Animacja nazwa="Zadanie3" />
    </div>
  )
}
