import React from 'react'
import classes from '../style/Animacja1.module.css'
import zarowka from '../assets/zarowka.png'

export const Zadanie5 = () => {
    return (
        <div>
            <p>III. Przed Tobą ostania część zadania.</p>
            <p>Dopasuj naukowca do odkrycia:</p>
            <form action="" className={classes.zad5Form} >
                <div>
                    <img src="" alt="" />
                    <select name="" id="">
                        <option value="" hidden>Wybierz</option>
                        <option value=""></option>
                    </select>
                </div>
                <div className={classes.zad4StyleDiv}>
                    <p>żarówka</p>
                    <img src={zarowka} alt="zarowka" className={classes.Zad4img} />
                    <select name="" id="">
                        <option value="" hidden>Wybierz</option>
                        <option value="1">Thomas Edison</option>
                        <option value="2">Ignacy Łukasiewicz</option>
                        <option value="3">Nicola Tesla</option>
                        <option value="4">Pitagoras</option>
                    </select>
                </div>
                <div>
                    <img src="" alt="" />
                    <select name="" id="">
                        <option value="" hidden>Wybierz</option>
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <img src="" alt="" />
                    <select name="" id="">
                        <option value="" hidden>Wybierz</option>
                        <option value=""></option>
                    </select>
                </div>
            </form>
        </div>
    )
}
