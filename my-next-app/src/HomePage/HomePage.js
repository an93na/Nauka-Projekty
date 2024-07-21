import React from 'react'
import { Basket } from '../Bassket/Basket'
import { Desserts } from '../Desserts/Desserts'

export const HomePage = () => {
  return (
    <article>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <Desserts/>
        <Basket/>
      </div>
    </article>
  )
}
