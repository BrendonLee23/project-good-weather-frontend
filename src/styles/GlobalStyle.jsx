import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        user-select: none;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Poppins', sans-serif;
    }
    ::placeholder{
            color: black;
        }
`