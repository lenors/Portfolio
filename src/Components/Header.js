import { useState } from "react";
import headers from "../Assets/Header/headers.png";
import { Globalstyle } from "../Styles/Globalstyle";
import * as S from "../Styles/Header";
import Burguir from '../Assets/Header/Burguir.png'

const Header = ({Rota1, Rota2, Rota3, Rota4}) => {
  const [open, setOpen] = useState(true);

  const Toggle = () => {
    setOpen(!open);
  };

  return (
    <S.CaixaM>   
      <Globalstyle />
        <S.Img2 src={headers} alt="" />
      {open && <nav>
        <S.Menu>
          <S.listas>SOBRE</S.listas>
          <S.listas>PROJETOS</S.listas>
          <S.listas>CURRICULO</S.listas>
          <S.listas>ODS</S.listas>
        </S.Menu>
      </nav>}
      <S.Burguir src={Burguir} onClick={Toggle} />
    </S.CaixaM>
  );
};

export default Header;
