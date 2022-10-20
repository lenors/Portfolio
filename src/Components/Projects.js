import React from "react";
import { Globalstyle } from "../Styles/Globalstyle";
import Pokedex from "../Imagens/Pokedex.png";
import Pokedexapi from "../Imagens/Pokedexapi.png";
import Recipes from "../Imagens/Recipes.png";
import Calculadora from "../Imagens/Calculadora.png";
import Beat from "../Imagens/Beat.png";
import Harry from "../Imagens/Harry.png";
import todo from "../Imagens/Todo.png";
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
          <S.Projetos src={todo} alt="" />
        </a>
        <S.Titulinhos>ToDo List</S.Titulinhos>
      </figure>
    </S.Container2>
  );
}
