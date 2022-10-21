import styled from "styled-components";
export const Section2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px 10px 10px 10px;
  border: solid black 2px;
`;

export const Who = styled.h1`
  font-family: "Press Start 2P", cursive;
  color: #f9f6f6;
  animation: typing 1s 1s normal steps(10) both, blink 500ms infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  margin-top: 1rem;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 9em;
    }
  }
  @keyframes blink {
    from {
      border-right: 3px solid;
    }
    to {
      border-color: transparent;
    }
  }
`;

export const Paragrafo = styled.p`
  font-family: "Montserrat", sans-serif;
  width: 500px;
  font-size: 2rem;
  font-weight: 900;
  color: #060303;
  @media (max-width: 768px) {
    width: 300px;
    font-size: 30px;
    color: white;
  }
`;
export const Language = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Icons3 = styled.ul`
  width: 100px;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
  }
`;
export const Icons4 = styled.li`
  color: #0a0a0a;
  width: 50px;
  font-size: 50px;
  @media (max-width: 768px) {
    color: white;
  }
`;
