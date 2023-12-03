import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        user-select: none;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
    }
    ::placeholder{
            color: black;
        }
    body{
        @media (max-width: 574px) {
        background-color: black;
        width: 574px !important;
        height: 600px;
    }
    }
`