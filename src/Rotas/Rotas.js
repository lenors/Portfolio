import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Home from '../Components/Home'
import Projetos from '../Components/Projects'
import About from '../Components/About'
import Header from './Header'

export default function Rotas() {
  return (
    <BrowserRouter>
    <Header Rota1='Home'  Rota3='Projects' Rota4='About'/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Projects" element={<Projetos/>}/>
    <Route path="/About" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
