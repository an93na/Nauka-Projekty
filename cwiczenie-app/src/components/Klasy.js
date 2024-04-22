import React from 'react'




export const Klasy = () => {
    class Osoba {
        constructor(firstNameVal, LastNameVal) {
            this.firstName = firstNameVal
            this.LastName = LastNameVal
        }
    }

    const kowalski = new Osoba('Jan', 'Kowalski')
    console.log(kowalski)

    return (
        <div><h3>Klasy</h3>
            <p>{kowalski.LastName} {kowalski.firstName}</p>
        </div>
    )
}
