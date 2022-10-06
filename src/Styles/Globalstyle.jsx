import { createGlobalStyle } from "styled-components";
import Bodi from "../Assets/Body/Bodi.png";
import BackCell from "../Assets/Header/BackCell.jpg";

export const Globalstyle = createGlobalStyle`
*{
  
    margin:0;
    padding:0;
    box-sizing:0;
    background-image:url(${Bodi});
       background-repeat:no-repeat;
       background-position:center;
       background-attachment:fixed;
       background-size:100%;
       @media screen and (max-width: 768px){
         background-image:none;
         background-color:#231f20;
    
       }
       
       
    
}
`;
