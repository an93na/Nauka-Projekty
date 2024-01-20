import React, { useState } from 'react'
import { Animacja } from './Animacja'
import classes from '../style/Animacja1.module.css'

export const Animacja1 = () => {
  const [zad1, setZad1] = useState(false)
  const [zad2, setZad2] = useState(false)
  const [zad3, setZad3] = useState(false)
  return (
    <div className={classes.container}>
      <Animacja nazwa="Zadanie1" zad={zad1} setZad={setZad1} />
      <Animacja nazwa="Zadanie2" zad={zad2} setZad={setZad2} />
      <Animacja nazwa="Zadanie3" zad={zad3} setZad={setZad3} />
    </div>
  )
}
