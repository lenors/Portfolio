import React from 'react'
import { Globalstyle } from '../Styles/Globalstyle'
import * as S from "../Styles/About"
import About2 from '../Assets/About/About2.jpg'
import { IoLogoReact } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3} from "react-icons/io5";
import {  IoLogoGithub } from "react-icons/io5";

export default function Sobre() {
  return (
    <S.Section2>
      <Globalstyle/>
      <S.Image src={About2} alt="" />
      <S.Who>
      Who am I?
      </S.Who>
      <S.Paragrafo>Hello, my name is Leno, I'm a systems analysis and development student and Front-end developer.
I'm currently studying for the backend, to become a fullstack developer.
My main languages ​​are Javascript, React.js.</S.Paragrafo> 
<S.Language>
 <S.Icons3>
  <S.Icons4><IoLogoReact/></S.Icons4>
<S.Icons4><IoLogoJavascript/></S.Icons4>
  <S.Icons4><IoLogoHtml5/></S.Icons4>
  <S.Icons4><IoLogoCss3/></S.Icons4>
  <S.Icons4><IoLogoGithub/></S.Icons4>
  <S.Icons4></S.Icons4>
 </S.Icons3>
</S.Language>
      </S.Section2>
     
  )
}
