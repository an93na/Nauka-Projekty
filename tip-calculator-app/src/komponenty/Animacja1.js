import classes from '../style/Animacja1.module.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Zadanie1 } from './Zadanie1'
import { Zadanie2 } from './Zadanie2'
import { Zadanie3 } from './Zadanie3'

export const Animacja1 = () => {
  return (
    <div>
      <nav className={classes.container}>
        <Link to="/" className={classes.box}>Home</Link>
        <Link to="/zad1" className={classes.box}>Zadanie1</Link>
        <Link to="/zad2" className={classes.box}>Zadanie2</Link>
        <Link to="/zad3" className={classes.box}>Zadanie3</Link>
      </nav>

      <div className={classes.paragraf}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="zad1" element={<Zadanie1 />} />
          <Route path="zad2" element={<Zadanie2 />} />
          <Route path="zad3" element={<Zadanie3 />} />
        </Routes>
      </div>
    </div>
  )
}
