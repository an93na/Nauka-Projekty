import classes from '../style/Animacja1.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Zadanie1 } from './Zadanie1'
import { Zadanie2 } from './Zadanie2'
import { Zadanie4 } from './Zadanie4'

export const Animacja1 = () => {
  return (
    <div>
      <nav className={classes.container}>
        <Link to="/" className={classes.box}>Home</Link>
        <Link to="/opis" className={classes.box}>Opis zadania</Link>
        <Link to="/przyklad" className={classes.box}>Przykład</Link>
        <Link to="/zadanie" className={classes.box}>Zadanie</Link>
      </nav>

      <div className={classes.paragraf}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="opis" element={<Zadanie1 />} />
          <Route path="przyklad" element={<Zadanie2 />} />
          <Route path="zadanie" element={<Zadanie4 />} />
        </Routes>
      </div>
    </div>
  )
}
