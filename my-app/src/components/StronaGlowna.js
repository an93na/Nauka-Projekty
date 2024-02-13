import React from 'react'
import { Link } from 'react-router-dom'

export const StronaGlowna = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/opis'>Opis</Link>
        <Link to='/przyklad'>Przykład</Link>
        <Link to='/zadanie'>Zadanie</Link>
      </nav>
    </div>
  )
}
