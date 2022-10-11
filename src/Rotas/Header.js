import { useState } from "react";
import headers from "../Assets/Header/headers.png";
import { Globalstyle } from "../Styles/Globalstyle";
import * as S from "../Styles/Header";


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
            <S.Listas to='/Projects'>{Rota3}</S.Listas>
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='/About' >{Rota4}</S.Listas>
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
            <S.Listas to='/Projects'>{Rota3}</S.Listas>
          </S.Listinha>
          <S.Listinha>
            <S.Listas to='/About' >{Rota4}</S.Listas>
          </S.Listinha>
        </S.Menu>
      </nav>}
     
      </S.Teste> 
      
    </S.CaixaM>
  );
};

export default Header;
