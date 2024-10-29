import React from 'react'
import { Basket } from '../Bassket/Basket'
import { Desserts } from '../Desserts/Desserts'
import { Test } from '../Desserts/Test'
import { Podsumowanie } from '../Bassket/Podsumowanie'

export const HomePage = () => {
  return (
    <article >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
        <Test />
        <Basket />
      </div>
    </article>
  )
}
