import { Link } from "react-router-dom";
import styled from "styled-components";

export const CaixaM = styled.div`
display:flex;
  justify-content: space-between;
  border: solid pink;
  @media screen and(max-width:768px) {
    width: 30%;
    height: 80%;
    color: white;
    font-size: 10px;
    flex-direction: column-reverse;
  }
`;
export const Listinha = styled.li`
  display: flex;
  align-items:center;
  list-style: none;
  justify-content:center;
  width: 200px;
  font-size: 2rem;
  text-decoration: none;
  @media (max-width: 768px) {
    width:130px;
    align-items:center;
    justify-content:center;
  }
`;
export const Listas = styled(Link)`
  list-style: none;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 150px;
  color: black;
  text-decoration: none;

  :hover {
    transition: ease-out 0.5s;
    color: red;
  }
  @media screen {
    
  }
`;

export const Img2 = styled.img`
  width: 150px;
  margin-left: 2rem;
  @media (max-width: 768px) {
    display:none;
    /* width: 50px;
    height: 50px;
    margin-left: 1rem;
    margin-top: 10px;
    border: solid red; */
  }
`;
export const Navp = styled.nav`
  display: flex;
  width: 50%;
  flex-direction: row;

  @media (max-width: 768px) {
    display:none;
    /* width: 30%;
    display: flex;
    flex-direction: row; */
  }
`;
export const Burguir = styled.img`
  border: solid;
  width:50px;
`;

export const Menu = styled.ul`
  display: flex;
  @media (max-width: 768px) {

    width:20%;
   
  }
`;
export const Teste = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  flex-direction: row;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    /* flex-direction:column-reverse;
justify-content:center;
align-items:center; */
  }


`;
