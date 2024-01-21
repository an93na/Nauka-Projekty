import React, { useState } from 'react'
import { Animacja } from './Animacja'
import classes from '../style/Animacja1.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const Animacja1 = () => {
  return (
    <div>
      <nav className={classes.container}>
        <Link to="/" className={classes.box}>Home</Link>
        <Link to="/zad1" className={classes.box}>Zadanie1</Link>
        <Link to="/zad2" className={classes.box}>Zadanie2</Link>
        <Link to="/zad3" className={classes.box}>Zadanie3</Link>
      </nav>
      <div className={classes.container}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="zad1" element={<Animacja nazwa="Zadanie1" />} />
          <Route path="zad2" element={<Animacja nazwa="Zadanie2" />} />
          <Route path="zad3" element={<Animacja nazwa="Zadanie3" />} />
        </Routes>
      </div>
    </div>
  )
}
