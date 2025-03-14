import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        user-select: none;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s, color 0.3s; 
    }

    .my-toast {
        font-family: 'Arial', sans-serif;
        font-size: 16px;
    }

    ::placeholder {
        color: ${({ theme }) => theme.placeholder};
    }
`;
