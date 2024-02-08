import React from 'react'
import classes from '../style/Animacja1.module.css'
import zarowka from '../assets/zarowka.jpg'
import wypor from '../assets/wypor.jpg'
import grawitacja from '../assets/grawitacja.jpg'
import helio from '../assets/helio.jpg'

export const Zadanie5 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <p>III. Przed Tobą ostania część zadania.</p>
            <p>Dopasuj naukowca do odkrycia:</p>
            <form action="" onSubmit={handleSubmit} >
                <div className={classes.zad5Form}>
                <div className={classes.zad5StyleDiv}>
                    <p className={classes.p5}>żarówka</p>
                    <img src={zarowka} alt="zarowka" className={classes.Zad5img} />
                    <select name="" id="" style={{width: 168}}>
                        <option value="" hidden>Wybierz</option>
                        <option value="1">Thomas Edison</option>
                        <option value="2">Ignacy Łukasiewicz</option>
                        <option value="3">Nicola Tesla</option>
                        <option value="4">Pitagoras</option>
                    </select>
                </div>
                <div className={classes.zad5StyleDiv}>
                    <p className={classes.p5}>teoria heliocentryczna</p>
                    <img src={helio} alt="teoria heliocentryczna" className={classes.Zad5img} />
                    <select name="" id="" style={{width: 168}}>
                        <option value="" hidden>Wybierz</option>
                        <option value="1">Neil Armstrong</option>
                        <option value="2">Mikołaj Kopernik</option>
                        <option value="3">Galileo Galilei</option>
                        <option value="4">Johannes Kepler</option>
                    </select>
                </div>
                <div className={classes.zad5StyleDiv}>
                    <p className={classes.p5}>zjawisko grawitacji</p>
                    <img src={grawitacja} alt="grawitacja" className={classes.Zad5img} />
                    <select name="" id="" style={{width: 168}}>
                        <option value="" hidden>Wybierz</option>
                        <option value="1">Maria Skłodowska-Curie</option>
                        <option value="2">Isaac Newton</option>
                        <option value="3">Alfred Nobel</option>
                        <option value="4">Leonardo da Vinci</option>
                    </select>
                </div>
                <div className={classes.zad5StyleDiv}>
                    <p className={classes.p5}>prawo wyporu</p>
                    <img src={wypor} alt="prawo wyporu" className={classes.Zad5img} />
                    <select name="" id="" style={{width: 168}}>
                        <option value="" hidden>Wybierz</option>
                        <option value="1">Galileusz</option>
                        <option value="2">Charles Darwin</option>
                        <option value="3">Pitagoras</option>
                        <option value="4">Archimedes</option>
                    </select>
                </div>
                </div>
                <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                <button className={classes.btnSub} style={{marginTop:20}}>Sprawdź</button>
                </div>
            </form>
        </div>
    )
}
