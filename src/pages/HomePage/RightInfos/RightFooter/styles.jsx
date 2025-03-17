import styled from "styled-components";

export const Footer = styled.div`
    width: 400px;
    height: 120px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
  p {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease-in-out; 
  }

  span {
    color: #96a7f2;
  }
`;