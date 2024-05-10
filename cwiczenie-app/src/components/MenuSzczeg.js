import React from 'react'
import classes from '../style/Style.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Klasy } from './Klasy'

export const MenuSzczeg = () => {
  return (
    <div className={classes.menuszcze}>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/Page1'>Page1</Link>
        <Link to='/Page2'>Page2</Link>
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  )
}
