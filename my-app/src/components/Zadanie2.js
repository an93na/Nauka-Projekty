import React from 'react'
import classes from '../style/StyleModule.module.css'
import { UseSelector, useSelector } from 'react-redux'

export const Zadanie2 = () => {
    const oneValue = UseSelector(state => state.zad2.one);
    const twoValue = useSelector(state => state.zad2.two);
    const threeValue = useSelector(state => state.zad2.three);
    const fourValue = useSelector(state => state.zad2.four);
    const fiveValue = useSelector(state => state.zad2.five);
    return (
        <div>
            <p>Część II</p>
            <p>W tym zadaniu należy wybrać jedną prawidłową odpowiedź. Nie ma łatwo ponieważ tutaj zakresem wiedzy jest całe moje CV.</p>
            <form action="" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <p>1) Ile umiejętności technicznych wymieniłam?</p>
                    <label>
                        <input type='radio' name='1' value={'1'} /> 1
                    </label>
                    <label>
                        <input type='radio' name='1' value={'2'} /> 2
                    </label>
                    <label>
                        <input type='radio' name='1' value={'3'} /> 3
                    </label>
                    <label>
                        <input type='radio' name='1' value={'4'} /> 4
                    </label>
                    <p>2) Jakie jest moje wykształcenie?</p>
                    <label>
                        <input type='radio' name='2' value={'1'} /> inżynier
                    </label>
                    <label>
                        <input type='radio' name='2' value={'2'} /> magister
                    </label>
                    <label>
                        <input type='radio' name='2' value={'3'} /> magister inżynier
                    </label>
                    <label>
                        <input type='radio' name='2' value={'4'} /> doktor
                    </label>
                    <p>3) Jaki kierunek studiowałam jako ostatni?</p>
                    <label>
                        <input type='radio' name='3' value={'1'} /> Nawigacja Morska
                    </label>
                    <label>
                        <input type='radio' name='3' value={'2'} /> Hydrografia
                    </label>
                    <label>
                        <input type='radio' name='3' value={'3'} /> Technologie Kosmiczne i Satelitarne
                    </label>
                    <label>
                        <input type='radio' name='3' value={'4'} /> Informatyka
                    </label>
                    <p>4) W którym roku uczestniczyłam w kursie Front-end developer?</p>
                    <label>
                        <input type='radio' name='4' value={'1'} /> 2020/2021
                    </label>
                    <label>
                        <input type='radio' name='4' value={'2'} /> 2021/2022
                    </label>
                    <label>
                        <input type='radio' name='4' value={'3'} /> 2022/2023
                    </label>
                    <label>
                        <input type='radio' name='4' value={'4'} /> 2023/2024
                    </label>
                    <p>5) Jakim jezyku obcy oprócz angielskiego wspominam w CV?</p>
                    <label>
                        <input type='radio' name='5' value={'1'} /> niemiecki
                    </label>
                    <label>
                        <input type='radio' name='5' value={'2'} /> rosyjski
                    </label>
                    <label>
                        <input type='radio' name='5' value={'3'} /> francuski
                    </label>
                    <label>
                        <input type='radio' name='5' value={'4'} /> hiszpański
                    </label>
                </div>
                <button type='submit' className={classes.btnZ1}>Zatwierdź</button>
            </form>
        </div>
    )
}
