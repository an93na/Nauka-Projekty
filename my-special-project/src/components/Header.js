import React from 'react'
import { Link } from 'react-router-dom'
import headerStyle from '../styles/Header.module.css'
import linkStyle from '../styles/Link.module.css'


export const Header = () => {
    return (
        <header>
            <nav className={headerStyle.navi}>
                <div><Link to="/" className={linkStyle.linksty}>Home</Link></div>
                <div><Link to="/projects" className={linkStyle.linksty}>Projects</Link></div>
                <div><Link to="/contact" className={linkStyle.linksty}>Contact</Link></div>
            </nav>
            <h1>My Portfolio</h1>
        </header>
    )
}
