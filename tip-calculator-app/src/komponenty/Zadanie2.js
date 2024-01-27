import React from 'react'
import classes from '../style/Animacja1.module.css';
import przyklad from '../assets/przykład.png'

export const Zadanie2 = () => {
    return (
        <div>
            <h3>Przykład</h3>
            <p>Część 1 zadania</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={przyklad} alt="przykład" />
                <p>Tutaj wpisane mamy numerki i po ich zatwierdzeniu pokazuje nam się kolejna seria pytań.</p>
            </div>
            <p>Część 2 zadania</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={przyklad} alt="przykład" />
                <p>Tutaj mamy pytania do poprzedniej części w celu sprawdzenia naszej wiedzy.</p>
            </div>
        </div>
    )
}
