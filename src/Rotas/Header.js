import { useState } from "react";
import headers from "../Assets/Header/headers.png";
import { Globalstyle } from "../Styles/Globalstyle";
import * as S from "../Styles/Header";
import Burguir from '../Assets/Header/Burguir.png'
import { Link } from "react-router-dom";

const Header = ({Rota1, Rota2, Rota3, Rota4}) => {
  const [open, setOpen] = useState(true);

  const Toggle = () => {
    setOpen(!open);
  };

  return (
    <S.CaixaM>   
      <Globalstyle />
        <S.Img2 src={headers} alt="" />
        <S.Navp>
        <S.Menu>
          <S.Listinha>
             <S.Listas to='/'>{Rota1}</S.Listas> 
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='./Ods'>{Rota2}</S.Listas>
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='/Projetos'>{Rota3}</S.Listas>
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='/Sobre' >{Rota4}</S.Listas>
          </S.Listinha>
        </S.Menu>
      </S.Navp>
      <S.Teste>
      {open && <nav>
        <S.Menu>
          <S.Listinha>
             <S.Listas to='/'>{Rota1}</S.Listas> 
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='./Ods'>{Rota2}</S.Listas>
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='/Projetos'>{Rota3}</S.Listas>
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='/Sobre' >{Rota4}</S.Listas>
          </S.Listinha>
        </S.Menu>
      </nav>}
      <S.Burguir src={Burguir} onClick={Toggle} />
      </S.Teste>
    </S.CaixaM>
  );
};

export default Header;
