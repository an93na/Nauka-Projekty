import React from 'react'
import classes from '../style/HamburgerStyleCSSModule.module.css'
import Burger from "./hamb.png"

export const HamburgerMenu = () => {
    let hamburger = classes.hamburger
  return (
    <button>
        <span className={classes.hamburger__box}>
            <span className={classes.hamburger__inner}></span>
        </span>
    </button>
  )
}
