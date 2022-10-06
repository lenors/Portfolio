import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from '../Components/Home'
import Ods from '../Components/Ods'
import Projetos from '../Components/Projetos'
import Sobre from '../Components/Sobre'

export default function Rotas() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Ods' element={<Ods/>}/>
    <Route path='/Projetos' element={<Projetos/>}/>
    <Route path='/Sobre' element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
  )
}
