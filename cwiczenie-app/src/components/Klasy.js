import React, { useState } from 'react'
import classes from '../style/Style.module.css'

export const Klasy = () => {
    const [isOpen, setIsOpen] = useState(false)
    function Konstruktor(owner) {
        this.name = 'Gacek';
        this.owner = owner;
        this.hello = function () {
            console.log(`Cześć jestem ${this.name} mój właściciel to ${this.owner}`)
        }
    }

    const GacekAgi = new Konstruktor("Aga")
    GacekAgi.hello()

    class Osoba {
        constructor(firstNameVal, LastNameVal) {
            this.firstName = firstNameVal
            this.LastName = LastNameVal
        }
    }

    class Zwierze {
        constructor(rodzajVal, rasaVal, wiekVal, imieVal) {
            this.rodzaj = rodzajVal
            this.rasa = rasaVal
            this.wiek = wiekVal
            this.imie = imieVal
        }
        czyJestesGlodny() {
            console.log('Czy jesteś głodny?')
        }
        glodny() {
            console.log('Tak. Zjadłbym coś')
        }
        najedzony() {
            console.log('Nie dziękuję')
        }
        zabawa() {
            console.log('Tak')
        }
        lenistwo() {
            console.log('jestem senny')
        }
    }

    const kowalski = new Osoba('Jan', 'Kowalski')
    console.log(kowalski)

    const azor = new Zwierze('pies', 'lablador', 3, 'Azor')
    console.log(azor)

    class Pies extends Zwierze {
        constructor(rodzajVal, rasaVal, wiekVal, imieVal, kolorVal, wagaVal) {
            super(rodzajVal, rasaVal, wiekVal, imieVal)
            this.kolor = kolorVal
            this.waga = wagaVal
        }
    }

    const reksio = new Pies('pies', 'pudel', 2, 'Reksio', 'bialy', 15)
    console.log(reksio);

    reksio.czyJestesGlodny()
    reksio.najedzony()

    class NazwaKlasyZawszeZWielkiejLitery {
        stala = 100;
        // metoda klass służy do inicjalizacji instancji klasy, czyli towrzenia obiektów na podstawie klasy
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
        // metody funkcje które są w klasie
        metoda(){
            console.log('Hello');
            this.stala = this.stala - 10
        }
    }

    const nowyObiektNaPodstKlasy = new NazwaKlasyZawszeZWielkiejLitery('Imie', 'Typ');
    console.log(nowyObiektNaPodstKlasy);
    nowyObiektNaPodstKlasy.metoda()
    console.log(nowyObiektNaPodstKlasy);

    class rozszerzenieKlasy extends NazwaKlasyZawszeZWielkiejLitery{
        constructor(name, parametr){
            super(name, "TypjakiZawszeMaByć")
            this.parametr = parametr
        }
    }
    const nowyRozszerzonyObiekt = new rozszerzenieKlasy("Jacek", true)

    console.log(nowyRozszerzonyObiekt)

    const rozwin = {borderBottom: '1px solid red', marginBottom: '5px'}
    const zwin1 = {margin: '10px', width:'50px', transform: 'rotateZ(45deg)', borderBottom: 'solid 1px red'}
    const zwin2 = {margin: '10px', width: '50px', transform: 'rotateZ(-45deg)', borderBottom: 'solid 1px red'}

    return (
        <div>
            <div>
            <h3>Klasy</h3>
            <p>{kowalski.LastName} {kowalski.firstName}</p>
            <p>{reksio.imie}</p>
            <p>{reksio.rodzaj}</p>
            <p>{reksio.waga}</p>
            <p>{reksio.wiek}</p>
            </div>
            <div>
                <div id='hamburger' className={classes.hamburger}>
                    <div className={classes.linia}></div>
                    <div className={classes.linia}></div>
                    <div className={classes.linia}></div>
                </div>
                <div className={classes.krzyzyk}></div>
            </div>

        </div>
    )
}
