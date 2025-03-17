import styled from "styled-components";
export const TextoVazio = styled.div`
    font-size: 60px;
`

export const LeftInfosContainer = styled.div`
    background-color: ${({ theme }) => theme.background};
    height: 100%; 
    width: 500px;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px 10px 30px;
    border: 1px solid ${({ theme }) => theme.border};
    transition: all 0.3s ease-in-out;
`;


export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-right: 10px;
    img {
        width: 85px;
        height: 85px;
    }

    h1 {
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease-in-out;
        font-family: Poppins;
        font-size: 32px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const InputContainer = styled.div`
    width: 300px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    margin-top: 30px;
    margin-left: 20px;
    input {
        background-color: ${({ theme }) => theme.input};
        transition: all 0.3s ease-in-out;
        width: 400px;
        height: 55px;
        border: none;
        border-radius: 17px;
        box-shadow: 0px 24px 48px 0px #314f7c14;
        padding-left: 70px;
        margin-right: 20px;
    } 

    ::placeholder {
        color: ${({ theme }) => theme.placeholder};
        transition: all 0.3s ease-in-out;
    }

    div {
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const InfosContainer = styled.div`
    width: 500px;
    height: 150px;
`;

export const ResumeInfos = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    margin-bottom: 25px;
`;

export const StyledTemperature = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    h1 {
        display: flex;
        font-family: Poppins;
        font-size: 80px;
        font-weight: 300;
        line-height: 48px;
        letter-spacing: 0em;
    }
    
    img {
        width: 70px; 
        height: 70px;
    }
`;

export const Description = styled.div`
    width: 500px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    transition: all 0.3s ease-in-out;
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const SwitchsDiv = styled.div`
    height: auto;
    bottom: 90px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;
    hr {
        background: ${({ theme }) => theme.isDarkMode ? '#444' : '#EDEDED'};
        border: 3px solid ${({ theme }) => theme.isDarkMode ? '#444' : '#EDEDED'};
        transition: all 0.3s ease-in-out;
        width: 300px;
        margin-bottom: 35px;
    }
    h2, h3 {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: ${({ theme }) => theme.h1};
        transition: all 0.3s ease-in-out;
        margin-bottom: 25px;
    }
`;

export const Footer = styled.div`
    width: 400px;
    height: 120px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        color: ${({ theme }) => theme.h1};
        transition: all 0.3s ease-in-out;
    }
`;