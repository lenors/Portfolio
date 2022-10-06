import { createGlobalStyle } from "styled-components";
import Bodi from '../Assets/Body/Bodi.png'


export const Globalstyle = createGlobalStyle`
*{
  
    margin:0;
    padding:0;
    box-sizing:0;
    body{
       background-image:url(${Bodi})

    }
}
`

