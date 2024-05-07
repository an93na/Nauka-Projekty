import React from 'react'
import classes from '../style/Style.module.css'

export const Hamburger = (props) => {
    const { setIsOpen } = props
    return (
        <div id='hamburger' className={classes.hamburger} onClick={() => { setIsOpen(prev => !prev) }}>
            <div className={classes.linia}></div>
            <div className={classes.linia}></div>
            <div className={classes.linia}></div></div>
    )
}
