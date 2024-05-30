import React from 'react'
import person from '../asets/person.png'

export const NumberOfPeople = () => {
  return (
    <div>
      <h6>NumberOfPeople</h6>
      <div>
        <img src={person} alt="person" />
        <p>0</p>
      </div>
    </div>
  )
}
