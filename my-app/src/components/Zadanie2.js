import React from 'react'
import classes from '../style/StyleModule.module.css'

export const Zadanie2 = () => {
    return (
        <div>
            <p>Część II</p>
            <p>W tym zadaniu należy wybrać jedną prawidłową odpowiedź. Nie ma łatwo ponieważ tutaj zakresem wiedzy jest całe moje CV.</p>
            <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
                <p>1) Ile umiejętności technicznych wymieniłam?</p>
                <label>
                    <input type='radio' name='1' /> 1
                </label>
                <label>
                    <input type='radio' name='1' /> 2
                </label>
                <label>
                    <input type='radio' name='1' /> 3
                </label>
                <label>
                    <input type='radio' name='1' /> 4
                </label>
                <p>2) Jakie jest moje wykształcenie?</p>
                <label>
                    <input type='radio' name='2' /> inżynier
                </label>
                <label>
                    <input type='radio' name='2' /> magister
                </label>
                <label>
                    <input type='radio' name='2' /> magister inżynier
                </label>
                <label>
                    <input type='radio' name='2' /> doktor
                </label>
                <p>3) Jaki kierunek studiowałam jako ostatni?</p>
                <label>
                    <input type='radio' name='3' /> Nawigacja Morska
                </label>
                <label>
                    <input type='radio' name='3' /> Hydrografia
                </label>
                <label>
                    <input type='radio' name='3' /> Technologie Kosmiczne i Satelitarne
                </label>
                <label>
                    <input type='radio' name='3' /> Informatyka
                </label>
                <p>4) W którym roku uczestniczyłam w kursie Front-end developer?</p>
                <label>
                    <input type='radio' name='4' /> 2020/2021
                </label>
                <label>
                    <input type='radio' name='4' /> 2021/2022
                </label>
                <label>
                    <input type='radio' name='4' /> 2022/2023
                </label>
                <label>
                    <input type='radio' name='4' /> 2023/2024
                </label>
                <p>5) Jakim jezyku obcy oprócz angielskiego wspominam w CV?</p>
                <label>
                    <input type='radio' name='5' /> niemiecki
                </label>
                <label>
                    <input type='radio' name='5' /> rosyjski
                </label>
                <label>
                    <input type='radio' name='5' /> francuski
                </label>
                <label>
                    <input type='radio' name='5' /> hiszpański
                </label>
                    <button type='submit' className={classes.btnZ1}>Zatwierdź</button>
            </form>
        </div>
    )
}
