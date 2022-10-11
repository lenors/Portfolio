import styled from "styled-components";
export const Section2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-top:2rem;

`
export const Image = styled.img`
width: 300px;
height:300px;
border-radius: 10px 10px 10px 10px;
border:solid black 2px;
`

export const Who = styled.h1`
    font-family: 'Press Start 2P', cursive;
    color: black;
    animation: typing 2s 1s normal steps(10) both, blink 500ms  infinite alternate ;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    margin-top:1rem;
    @keyframes typing {
        from{
            width: 0;
        }
        to{
            width: 9em;
        }
    }
    @keyframes blink {
        from{
            border-right: 3px solid;
        }
        to{
            border-color: transparent;
        }
    }
`