import React from 'react'
import classes from '../style/Animacja1.module.css';
import przyklad from '../assets/przykład.png'
import przyklad2 from '../assets/przyklad2.png'

export const Zadanie2 = () => {
    return (
        <div style={{paddingLeft: '23px'}}>
            <h3>Przykład</h3>
            <p>Część 1 zadania</p>
            <div>
                <img src={przyklad} alt="przykład" className={classes.imgPrzyk}/>
                <p>Tutaj wpisane mamy numerki i po ich zatwierdzeniu pokazuje nam się kolejna seria pytań.</p>
            </div>
            <p>Część 2 zadania</p>
            <div>
                <img src={przyklad2} alt="przykład" className={classes.imgPrzyk}/>
                <p>Tutaj mamy pytania do poprzedniej części w celu sprawdzenia naszej wiedzy.</p>
            </div>
        </div>
    )
}
