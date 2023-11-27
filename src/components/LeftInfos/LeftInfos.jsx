import { styled } from "styled-components";
import Casaco from "../../assets/casaco.svg";
import Lupa from "../../assets/lupa.svg";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function LeftInfos() {
    return (
        <LeftInfosContainer>
            <Title>
                <img src={Casaco} alt="" />
                <h1>Levo um casaquinho?</h1>
            </Title>
            <InputContainer>
                <img src={Lupa} alt="Lupa" />
                <input type="text" placeholder="Procure por uma cidade" />
            </InputContainer>
            <ResumeInfos>
                <StyledTemperature>
                    <h1><span>●</span> 31°C</h1>
                </StyledTemperature>
                <h2>Céu aberto</h2>
                <hr />
                <h3>16/11/2023</h3>
                <h3>Quinta-feira, 16:32</h3>
            </ResumeInfos>
            <FormGroup>
                <FormControlLabel control={<Switch />} label="°F" />
                <FormControlLabel control={<Switch />} label="Dark Mode" />
            </FormGroup>
            <Footer>
                <p>Todos os direitos reservados. 2023.</p>
            </Footer>
        </LeftInfosContainer>
    )
}

const LeftInfosContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 960px;
    height: 630px;
    padding: 30px 20px 10px 30px;
    border: 1px solid #f3f1f1
`
const Title = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    padding-left: 35px;
    img{
        width: 85px;
        height: 85px;
    }
h1{
    color: #030303;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 15px;
}

`
const InputContainer = styled.div`
    width: auto;
    height: 40px;
    display: flex;
    position: relative;
        input {
        background-color: #ededef;
        margin-top: 30px;
        width: 290px;
        height: 55px;
        border: none;
        border-radius: 17px;
        box-shadow: 0px 24px 48px 0px #314f7c14;
        padding-left: 70px;
        margin-right: 10px;
        } 
        img{
            position: absolute;
            top: 146%;
            left: 20px;
            transform: translateY(-50%);
            width: 35px; /* Ajuste o tamanho conforme necessário */
            height: 35px; /* Ajuste o tamanho conforme necessário */
            cursor: pointer;
        }
`
const ResumeInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 25px;
    h2{
        font-family: Poppins;
        font-size: 23px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
    }
    hr{
        background: #EDEDED;
        border: 2px solid #EDEDED;
        width: 250px;
        margin-bottom: 30px;
    }
    h3{
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    }
`
const StyledTemperature = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    margin-top: 25px;
    margin-bottom: 15px;
    color: #EC6E4C;
    h1{
        font-family: Poppins;
        font-size: 80px;
        font-weight: 300;
        line-height: 48px;
        letter-spacing: 0em;
    }
    span{
        font-size: 100px;
    }
`
const Footer = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
}
`