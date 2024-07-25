import React from 'react'
import { Dessert } from './Dessert'

export const Desserts = () => {
  return (
    <div>
      <h3>
        Desserts
      </h3>
      <div>
        <div style={{ display: 'flex' }}>
          <Dessert />
          <Dessert />
          <Dessert />
        </div>
      </div>
    </div>
  )
}
