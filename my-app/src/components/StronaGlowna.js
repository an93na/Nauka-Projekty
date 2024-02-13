import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Opis } from './Opis'
import { Przyklad } from './Przyklad'
import { Zadanie } from './Zadanie'

export const StronaGlowna = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/opis'>Opis</Link>
        <Link to='/przyklad'>Przykład</Link>
        <Link to='/zadanie'>Zadanie</Link>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Opis/>}/>
          <Route path='/' element={<Przyklad/>}/>
          <Route path='/' element={<Zadanie/>}/>
        </Routes>
      </div>
    </div>
  )
}
