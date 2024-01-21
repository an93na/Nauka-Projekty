import React, { useState } from 'react'
import { Animacja } from './Animacja'
import classes from '../style/Animacja1.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const Animacja1 = () => {
  const [zad1, setZad1] = useState(false)
  const [zad2, setZad2] = useState(false)
  const [zad3, setZad3] = useState(false)
  return (
    <div>
      <nav  className={classes.container}>
        <Link to="/">Home</Link>
        <Link to="/zad1">Zadanie1</Link>
        <Link to="/zad2">Zadanie2</Link>
        <Link to="/zad3">Zadanie3</Link>
      </nav>
      <div className={classes.container}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="zad1" element={<Animacja nazwa="Zadanie1" />} />
          <Route path="zad2" element={<Animacja nazwa="Zadanie2" />} />
          <Route path="zad3" element={<Animacja nazwa="Zadanie3" />} />
        </Routes>
        {/* <Animacja nazwa="Zadanie1" zad={zad1} setZad={setZad1} />
        <Animacja nazwa="Zadanie2" zad={zad2} setZad={setZad2} />
        <Animacja nazwa="Zadanie3" zad={zad3} setZad={setZad3} /> */}
      </div>
      {/* {zad1 ? <p>zad1</p> : <p></p>}
      {zad2 ? <p>zad2</p> : <p></p>}
      {zad3 ? <p>zad3</p> : <p></p>} */}
    </div>
  )
}
