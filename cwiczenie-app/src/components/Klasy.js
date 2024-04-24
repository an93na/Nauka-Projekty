import React from 'react'

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
        glodny() {
            console.log('Tak')
        }
        najedzony(){
            console.log('zjadłbym coś')
        }
    }

    const kowalski = new Osoba('Jan', 'Kowalski')
    console.log(kowalski)

    const azor = new Zwierze('pies', 'lablador', 3, 'Azor')
    console.log(azor)

    class Pies extends Zwierze {
        constructor(rodzajVal, rasaVal, wiekVal, imieVal, kolorVal, wagaVal){
            super(rodzajVal, rasaVal, wiekVal, imieVal)
            this.kolor = kolorVal
            this.waga = wagaVal
        }
    }

    const reksio = new Pies('pies', 'pudel', 2, 'Reksio', 'bialy', 15)
    console.log(reksio);

    return (
        <div><h3>Klasy</h3>
            <p>{kowalski.LastName} {kowalski.firstName}</p>
        </div>
    )
}
