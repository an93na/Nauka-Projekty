import React from 'react'
import headerStyle from '../styles/Header.module.css'

export const Header = () => {
    return (
        <header>
            <nav className={headerStyle.navi}>
                <div><p>1</p></div>
                <div><p>2</p></div>
                <div><p>3</p></div>
            </nav>
            <h1>My Portfolio</h1>
        </header>
    )
}
