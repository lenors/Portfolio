import { Link } from "react-router-dom";
import styled from "styled-components";

export const CaixaM = styled.div`
display:flex;
  justify-content: space-between;
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
  margin-top:1rem;
  align-items:center;
  list-style: none;
  justify-content:center;
  width: 250px;
  font-size: 2rem;
  font-family: "Press Start 2P", cursive;
  text-decoration: none;
  @media (max-width: 768px) {
    width:150px;
    align-items:center;
    justify-content:center;
    font-size:20px;
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
    transition: ease-in-out 0.5s;
    color: #e9e0e0;
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
  width: 100%;
  flex-direction: row;
  justify-content:flex-end;
  
  @media (max-width: 768px) {
    display:none;
    

  }
`;
export const Burguir = styled.img`
  border: solid;
  width:50px;
`;

export const Menu = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    font-size:15px;
   
  }
`;
export const Teste = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content:center;
    align-items:center;
  }


`;
