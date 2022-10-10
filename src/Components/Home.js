import React from "react";
import { Globalstyle } from "../Styles/Globalstyle";
import * as S from "../Styles/Home";
import Update from "../Assets/Body/Update.jpg";
import { RiGithubFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function Home() {
  return (
    <S.ContainerM>
      <Globalstyle />

      <S.Caixa3>
        <S.Foto src={Update} alt="imagem" />
        <S.H1P>Hello, welcome to my page.</S.H1P>
        <S.Footer>
          <S.ReactIcons>
            <S.Links href="https://github.com/lenors" target="blank">
              <RiGithubFill />
            </S.Links>
          </S.ReactIcons>

          <S.ReactIcons>
            <S.Links href="https://www.instagram.com/lenors__/" target="blank">
              <RiInstagramFill />
            </S.Links>
          </S.ReactIcons>
          <S.ReactIcons>
            <S.Links
              href="https://www.linkedin.com/in/leno-rafael-85a2ab1ba/"
              target="blank"
            >
              <RiLinkedinBoxFill />
            </S.Links>
          </S.ReactIcons>
        </S.Footer>
      </S.Caixa3>
    </S.ContainerM>
  );
}
