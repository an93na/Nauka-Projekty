import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteDesign } from '../SiteDesign/SiteDesign'

export const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<SiteDesign/>}/>
    </Routes>
  )
}
