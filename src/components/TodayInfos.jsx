import { styled } from "styled-components"

export default function TodayInfos() {
    return (
        <>
            <BoxGroup>
                <StyledBox>
                    <p>Mínima</p>
                    <h1>31° C</h1>
                </StyledBox>
                <StyledBox>
                    <p>Máxima</p>
                    <h1>48° C</h1>
                </StyledBox>
                <StyledBox>
                    <p>Umidade</p>
                    <h1>64%</h1>
                </StyledBox>
                <StyledBox>
                    <p>Velocidade de movimento</p>
                    <h1>12 m/s</h1>
                </StyledBox>
            </BoxGroup>
            <TextResult>Não, você não deve levar um casaquinho!</TextResult>
        </>
    )
}

const BoxGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    height: 230px;
    gap:25px;
    margin-bottom: 20px;
`
const StyledBox = styled.div`
    width: 350px;
    height: 100px;
    border-radius: 22px;
    background: linear-gradient(117.33deg, #4D4494 22.83%, #4F43AE 90.03%);
    box-shadow: 0px 24px 48px 0px #314F7C14;
    margin-right: 30px;
    padding: 23px;
    p{
        font-family: Poppins;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }
    h1{
        font-family: Poppins;
        font-size: 29px;
        font-weight: 600;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }
`
const TextResult = styled.p`
    font-family: Poppins;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color:#9f9f9f;
`