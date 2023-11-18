import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteDesign } from '../SiteDesign/SiteDesign'
import { Books } from '../SiteDesign/Books'
import { Broszury } from '../SiteDesign/Broszury'
import { Czasopisma } from '../SiteDesign/Czasopisma'
import { Kartki } from '../SiteDesign/Kartki'
import { NotFound } from '../SiteDesign/NotFound'

export const Navigation = () => {
  return (
    <Routes>
        <Route path='/' element={<SiteDesign/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/broszury' element={<Broszury/>}/>
        <Route path='/czasopisma' element={<Czasopisma/>}/>
        <Route path='/kartki' element={<Kartki/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}
