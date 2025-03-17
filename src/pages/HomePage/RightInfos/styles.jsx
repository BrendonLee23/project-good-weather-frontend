import styled, { keyframes } from "styled-components";

export const RightInfosContainer = styled.div`
    padding: 30px 0px 75px 50px;
    transition: all 0.3s ease-in-out;
    height: 100%;
    background-color: ${({ theme }) => theme.rightBackground};
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Ocupa o espaço restante */
    overflow-y: auto; /* Adiciona scroll se o conteúdo for maior que a altura */
`
export const CloudDiv = styled.div`
    padding: 30px 0px 75px 50px;
    transition: all 0.3s ease-in-out;
    height: 100%;
    background-color: ${({ theme }) => theme.rightBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1; /* Ocupa o espaço restante */
    overflow-y: auto; /* Adiciona scroll se o conteúdo for maior que a altura */
`
export const CityAndCoordinates = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom:10px; 
    height: 170px;
    width: 100%;
    div{
        display: flex;
        align-items: center;
        justify-content: start;
        gap:40px;
    }
    h1{
        font-family: Poppins;
        font-size: 80px;
        font-weight: 400;
        line-height: 65px;
        letter-spacing: 0em;
        text-align: left;
        color: ${({ theme }) => theme.h1};
        transition: all 0.3s ease-in-out;
    }
    p{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        color: ${({ theme }) => theme.h1};
        transition: all 0.3s ease-in-out;
        margin-top: 10px;
        display: flex;
        gap: 70px;
    }
    span{
        color:#D8D8D8;
    }
`
export const NavRight = styled.div`
    width: auto;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 50px;

    h1, h2 {
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease-in-out;
        font-family: Poppins;
        font-size: 28px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        opacity: 0.6;
    }

    h1 {
        ${({ $selectedComponent }) => $selectedComponent === 'today' && `
            font-size: 32px;
            opacity: 1;
        `}
    }

    h2 {
        ${({ $selectedComponent }) => $selectedComponent === 'nextDays' && `
            font-size: 32px;
            opacity: 1;
        `}
    }
`;
export const dotsAnimation = keyframes`
  0% { content: ""; }
  33% { content: "•"; }
  66% { content: "••"; }
  100% { content: "•••"; }
`;

export const LoadingText = styled.p`
  font-size: 24px;
  font-weight: bolder;
  color: gray;
  &:after {
    content: "";
    animation: ${dotsAnimation} 1.5s infinite steps(4);
  }
`;