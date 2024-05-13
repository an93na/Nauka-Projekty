import React from 'react'
import classes from '../style/Style.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

export const MenuSzczeg = () => {
  return (
    <div>
      <div >
        <div className={classes.menuszcze}>
          <Link to='/' className={classes.link}>Home</Link>
          <Link to='/Page1' className={classes.link}>Page1</Link>
          <Link to='/Page2' className={classes.link}>Page2</Link>
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
