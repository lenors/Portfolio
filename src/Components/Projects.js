import React from "react";
import { Globalstyle } from "../Styles/Globalstyle";
import Pokedex from "../Imagens/Pokedex.png";
import Pokedexapi from "../Imagens/Pokedexapi.png";
import Recipes from "../Imagens/Recipes.png";
import Calculadora from "../Imagens/Calculadora.png";
import Beat from "../Imagens/Beat.png";
import Harry from "../Imagens/Harry.png";
import todo from "../Imagens/Todo.png";
import Lampada from "../Imagens/Lampada.png"
import Series from "../Imagens/Series.png"
import Ods from "../Imagens/Ods.png"
import * as S from "../Styles/Projects";


export default function Projetos() {
  return (
    <S.Container2>
      <Globalstyle />
      <figure>
        <a href="https://pokemon-9w04iojzf-lenors.vercel.app/" rel="noreferrer">
          {" "}
          <S.Projetos src={Pokedex} alt="Pokedex" />{" "}
        </a>
        <S.Titulinhos>Pokedex</S.Titulinhos>
      </figure>
      <figure>
        <a href="https://pokedex-j049je31p-lenors.vercel.app/">
          <S.Projetos src={Pokedexapi} alt="Api Pokemon" />
        </a>
        <S.Titulinhos>PokeApi</S.Titulinhos>
      </figure>
      <figure>
        <a href="https://recipes-flax.vercel.app/">
          {" "}
          <S.Projetos src={Recipes} alt="Recipes" />
        </a>
        <S.Titulinhos>Recipes</S.Titulinhos>
      </figure>
      <figure>
        <a href="https://calculator-bay-sigma.vercel.app/">
          {" "}
          <S.Projetos src={Calculadora} alt="Calculadora" />
        </a>
        <S.Titulinhos>Calculadora</S.Titulinhos>
      </figure>
      <figure>
        <a href="https://beat-six.vercel.app/">
          {" "}
          <S.Projetos src={Beat} alt="Beat" />
        </a>
        <S.Titulinhos>Beat</S.Titulinhos>
      </figure>
      <figure>
        <a href="https://harry-potter-pip3.vercel.app/">
          {" "}
          <S.Projetos src={Harry} alt="harry" />
        </a>
        <S.Titulinhos>Harry Potter</S.Titulinhos>
      </figure>
      <figure>
        <a href="https://todo-neon-two.vercel.app/">
          {" "}
          <S.Projetos src={todo} alt="Todo" />
        </a>
        <S.Titulinhos>ToDo List</S.Titulinhos>
      </figure>
      <figure>
      <a href="https://lampadajs.vercel.app/">
        <S.Projetos src={Lampada} alt="LampadaJs" /></a>
        <S.Titulinhos>Lampada Js</S.Titulinhos>
      </figure>
      <figure>
      <a href="https://vercel.com/lenors/seriestmdb">
        <S.Projetos src={Series} alt="Series" /></a>
        <S.Titulinhos>ReactFlix</S.Titulinhos>
      </figure>
      <figure>
      <a href="https://ods-one.vercel.app/">
        <S.Projetos src={Ods} alt="Ods" /></a>
        <S.Titulinhos>Onu Ods</S.Titulinhos>
      </figure>
    </S.Container2>
  );
}
