import styled from "styled-components";

export const BoxGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    gap: 35px;
`
export const TopBoxes = styled.div`
    display: flex;
    width: 100%;
    gap: 50px
`
export const BottomBoxes = styled.div`
    display: flex;
    width: 100%;
    gap: 50px
`
export const StyledBox = styled.div`
    width: 350px;
    height: 140px;
    border-radius: 8px;
    background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
    box-shadow: 0px 24px 48px 0px #314F7C14;
    padding: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media (max-width: 574px) {
        width: 210px; 
        margin-right: 5px;
        padding: 18px;
    }
    p{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        @media (max-width: 574px) {
            font-size: 12px;
    }
    }
    h1{
        font-family: Poppins;
        font-size: 38px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        @media (max-width: 574px) {
            font-size: 22px;
    }
    }
`

export const ResultText = styled.p`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    margin-top: 80px;
    color: ${({ theme }) => theme.sugestion};
    transition: all 0.3s ease-in-out;
`;