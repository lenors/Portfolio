import React from 'react'
import { Globalstyle } from '../Styles/Globalstyle'
import Pokedex from '../Imagens/Pokedex.png'
import Pokedexapi from '../Imagens/Pokedexapi.png'
import Recipes from '../Imagens/Recipes.png'
import Calculadora from '../Imagens/Calculadora.png'
import Beat from '../Imagens/Beat.png'
import Harry from '../Imagens/Harry.png'
import todo from '../Imagens/Todo.png'
import * as S from '../Styles/Projects'

export default function Projetos() {
  return (
    <S.Container2>
      <Globalstyle/>
     <figure>
     <a href="https://pokemon-9w04iojzf-lenors.vercel.app/" rel= "noreferrer"> <S.Projetos src={Pokedex} alt="Pokedex" /> </a>
      <h2>Pokedex</h2>
     
     </figure>
     <figure>
     <a href="https://pokedex-j049je31p-lenors.vercel.app/"><S.Projetos src={Pokedexapi} alt="Api Pokemon" />
     </a><h2>PokeApi</h2>
      
     </figure>
     <figure>
     <a href="https://recipes-flax.vercel.app/">  <S.Projetos src={Recipes} alt="Recipes" /></a>
      <h2>Recipes</h2>
     </figure>
     <figure>
     <a href="https://calculator-bay-sigma.vercel.app/">  <S.Projetos src={Calculadora} alt="Calculadora" /></a>
      <h2>Calculadora</h2>
     </figure>
     <figure>
     <a href="https://beat-six.vercel.app/">   <S.Projetos src={Beat} alt="Beat" /></a>
      <h2>Beat</h2>
     </figure>
     <figure>
     <a href="https://harry-potter-pip3.vercel.app/">    <S.Projetos src={Harry} alt="harry" /></a>
     <h2>Harry Potter</h2>
     </figure>
     <figure>
     <a href="https://todo-neon-two.vercel.app/">  <S.Projetos src={todo} alt="" /></a>
     </figure>
    </S.Container2>
  )
}
