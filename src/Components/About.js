import React from 'react'
import { Globalstyle } from '../Styles/Globalstyle'
import * as S from "../Styles/About"
import About2 from '../Assets/About/About2.jpg'

export default function Sobre() {
  return (
    <S.Section2>
      <Globalstyle/>
      <S.Image src={About2} alt="" />
      <S.Who>
      Who am I?
      </S.Who>
      </S.Section2>
  )
}
