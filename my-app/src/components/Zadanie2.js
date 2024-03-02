import React from 'react'
import classes from '../style/StyleModule.module.css'

export const Zadanie2 = () => {
    return (
        <div>
            <p>Część II</p>
            <p>W tym zadaniu należy wybrać jedną prawidłową odpowiedź. Nie ma łatwo ponieważ tutaj zakresem wiedzy jest całe moje CV.</p>
            <form action="" style={{display: 'flex', flexDirection: 'column'}}>
                <p>1) Ile umiejętności technicznych wymieniłam?</p>
                <label>
                    <input type='radio' /> 1
                </label>
                <label>
                    <input type='radio' /> 2
                </label>
                <label>
                    <input type='radio' /> 3
                </label>
                <label>
                    <input type='radio' /> 4
                </label>
                <p>2) Jakie jest moje wykształcenie?</p>
                <label>
                    <input type='radio' /> inżynier
                </label>
                <label>
                    <input type='radio' /> magister
                </label>
                <label>
                    <input type='radio' /> magister inżynier
                </label>
                <label>
                    <input type='radio' /> doktor
                </label>
                <p>3) Jaki kierunek studiowałam jako ostatni?</p>
                <label>
                    <input type='radio' /> Nawigacja Morska
                </label>
                <label>
                    <input type='radio' /> Hydrografia
                </label>
                <label>
                    <input type='radio' /> Technologie Kosmiczne i Satelitarne
                </label>
                <label>
                    <input type='radio' /> Informatyka
                </label>
                <p>4) W którym roku uczestniczyłam w kursie Front-end developer?</p>
                <label>
                    <input type='radio' /> 2020/2021
                </label>
                <label>
                    <input type='radio' /> 2021/2022
                </label>
                <label>
                    <input type='radio' /> 2022/2023
                </label>
                <label>
                    <input type='radio' /> 2023/2024
                </label>
                <p>5) Jakim jezyku obcy oprócz angielskiego wspominam w CV?</p>
                <label>
                    <input type='radio' /> niemiecki
                </label>
                <label>
                    <input type='radio' /> rosyjski
                </label>
                <label>
                    <input type='radio' /> francuski
                </label>
                <label>
                    <input type='radio' /> hiszpański
                </label>
                <div>
                    <button type='submit' className={classes.btnZ1}>Zatwierdź</button>
                </div>
            </form>
        </div>
    )
}
