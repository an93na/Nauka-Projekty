import React from 'react'
import { Basket } from '../Bassket/Basket'
import { Desserts } from '../Desserts/Desserts'
import { Test } from '../Desserts/Test'

export const HomePage = () => {
  return (
    <article>
      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
        <Desserts />
        <Basket />
      </div> */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
        <Test />
        <Basket />
      </div>
    </article>
  )
}
