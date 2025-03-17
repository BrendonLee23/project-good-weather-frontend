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

    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s, color 0.3s; 
        display: flex;
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    .my-toast {
        font-family: 'Arial', sans-serif;
        font-size: 16px;
    }

    ::placeholder {
        color: ${({ theme }) => theme.placeholder};
    }
`;

