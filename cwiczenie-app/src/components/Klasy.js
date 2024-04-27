import React from 'react'

function Konstruktor(owner) {
    this.name = 'Gacek';
    this.owner = owner;
    this.hello = function () {
        console.log(`Cześć jestem ${this.name} mój właściciel to ${this.owner}`)
    }
}

export const Klasy = () => {

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

    return (
        <div><h3>Klasy</h3>
            <p>{kowalski.LastName} {kowalski.firstName}</p>
            <p>{reksio.imie}</p>
            <p>{reksio.rodzaj}</p>
            <p>{reksio.waga}</p>
            <p>{reksio.wiek}</p>
        </div>
    )
}
