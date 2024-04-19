import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Opis } from './Opis'
import { Przyklad } from './Przyklad'
import { Zadanie } from './Zadanie'
import classes from '../style/StyleModule.module.css'

export const StronaGlowna = () => {
  return (
    <div>
      <nav className={classes.pasekLinkow}>
        <Link to='/' className={classes.kafelek}>Home</Link>
        <Link to='/opis' className={classes.kafelek}>Opis</Link>
        <Link to='/przyklad' className={classes.kafelek}>Przykład</Link>
        <Link to='/zadanie' className={classes.kafelek}>Zadanie</Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/opis' element={<Opis />} />
          <Route path='/przyklad' element={<Przyklad />} />
          <Route path='/zadanie' element={<Zadanie />} />
        </Routes>
      </div>
    </div>
  )
}
