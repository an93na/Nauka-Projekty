import React from 'react'
import classes from '../style/HamburgerStyleCSSModule.module.css'

export const HamburgerMenu = () => {
  return (
    <button className={classes.hamburger}>
        <span className={classes.hamburger__box}>
            <span className={classes.hamburger__inner}></span>
        </span>
    </button>
  )
}
