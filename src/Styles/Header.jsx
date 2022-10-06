import { Link } from "react-router-dom";
import styled from "styled-components";


export const CaixaM = styled.div`
display:flex;
justify-content:space-between;
border:solid pink;
@media screen and(max-width:768px){
    width:30%;
    height:80%;
    color:white;
    font-size:10px;
    flex-direction:column-reverse;
}

`
export const Listinha = styled.li`
display:flex;
list-style:none;
width: 150px;

font-size: 2rem;
text-decoration:none;
border:solid;
justify-content:center;
align-items:center;
@media(max-width:768px){
    width:30%;
    color:white;
    font-size:20px;
  
}
`
export const Listas = styled(Link)`
list-style:none;
justify-content:center;
align-items:center;
display:flex;
width: 150px;
color:white;
text-decoration:none;
border:solid white;
:hover{
    transition:ease-in-out 0.5s;
    color:red;
}
`

export const Img2 = styled.img`
width:150px;
margin-left:2rem;
@media (max-width: 768px){
    width:50px;
    height:50px;
    margin-left:1rem;
    margin-top:10px;
    border:solid red;
}

`
export const Navp = styled.nav`
display:flex;
width:50%;
flex-direction:row;

@media (max-width: 768px){
    display:none;
}
`
export const Burguir = styled.img`
display:none;

`

export const Menu = styled.ul`
display:flex;



`
export const Teste = styled.div`
display:flex;
justify-content:space-between;
width:60%;
flex-direction:row;
display:none;

@media (max-width: 768px){
flex-direction:column-reverse;
border:solid salmon;

}

`

