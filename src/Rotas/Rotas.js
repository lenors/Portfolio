import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from '../Components/Home'
import Projetos from '../Components/Projetos'
import Sobre from '../Components/Sobre'
import Header from './Header'

export default function Rotas() {
  return (
    <BrowserRouter>
    <Header Rota1='Home'  Rota3='Projetos' Rota4='Sobre'/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Projetos" element={<Projetos/>}/>
    <Route path='/Sobre' element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
