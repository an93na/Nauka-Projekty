import React from 'react'
import classes from '../style/Style.module.css'

export const Krzyzyk = (props) => {
    const { setIsOpen } = props
    return (
        <div className={classes.krzyzyk} onClick={() => { setIsOpen(prev => !prev) }}></div>
    )
}
