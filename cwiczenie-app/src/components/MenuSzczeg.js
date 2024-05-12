import React from 'react'
import classes from '../style/Style.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Klasy } from './Klasy'
import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

export const MenuSzczeg = () => {
  return (
    <div>
      <div className={classes.menuszcze}>
        <div>
          <div><Link to='/'>Home</Link></div>
          <div> <Link to='/Page1'>Page1</Link></div>
          <div><Link to='/Page2'>Page2</Link></div>
        </div>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Page1' element={<Page1 />} />
          <Route path='/Page2' element={<Page2 />} />
        </Routes>
      </div>
    </div>
  )
}
