import { styled } from "styled-components";
import Casaco from "../../assets/casaco.svg";
import Lupa from "../../assets/lupa.svg";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useContext } from "react";
import axios from "axios";
import InfoContext from "../../contexts/InfoContext";

const colors = {
    orange: '#FFA500',
    gray: '#808080',
    blue: '#0000FF',
    lightGray: '#D3D3D3',
    purple: '#800080',
    lightBlue: '#ADD8E6',
    };

export default function LeftInfos() {
    const { apiKey, setWeatherData, weatherData, setGraphicData, city, setCity } = useContext(InfoContext)
    const currentDate = new Date();
    const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' }
    const formattedDate = currentDate.toLocaleDateString('pt-BR', optionsDate);
    const optionsWeekday = { weekday: 'long' };
    const formattedWeekday = currentDate.toLocaleDateString('pt-BR', optionsWeekday);
    const optionsHours = { hour: 'numeric', minute: 'numeric' };
    const formattedTime = currentDate.toLocaleTimeString('pt-BR', optionsHours);
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    const temperature = weatherData ? Math.round(kelvinToCelsius(weatherData.main.temp)) : 0;
    const weatherDescription = weatherData ? weatherData.weather[0].description : "- -";
    const weatherDescriptions = {
        'clear sky': 'céu limpo',
        'few clouds': 'poucas nuvens',
        'scattered clouds': 'nuvens dispersas',
        'broken clouds': 'nuvens quebradas',
        'overcast clouds': 'nuvens nubladas',
        'light rain': 'chuva leve',
        'moderate rain': 'chuva moderada',
        'heavy rain': 'chuva intensa',
        'light snow': 'neve leve',
        'moderate snow': 'neve moderada',
        'heavy snow': 'neve intensa',
        'mist': 'névoa',
        'fog': 'nevoeiro',
        'thunderstorm': 'tempestade',
        'drizzle': 'chuvisco',
        'smoke': 'fumaça',
    };
    const translatedDescription = weatherDescriptions[weatherDescription] || weatherDescription;

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Erro ao obter dados do clima:', error);
        }
    };
    const fetchGraphic = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
            setGraphicData(response.data);
        } catch (error) {
            console.error('Erro ao obter dados do grafico:', error);
        }
    };

    const fetchDataAndGraphic = async () => {
        await fetchData();
        await fetchGraphic();
    };

    const handleSearch = () => {
        fetchDataAndGraphic();
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            fetchDataAndGraphic();
        }
    };

    return (
        <LeftInfosContainer>
            <Title>
                <img src={Casaco} alt="" />
                <h1>Levo um casaquinho?</h1>
            </Title>
            <InputContainer>
                <img src={Lupa} alt="Lupa" onClick={handleSearch} />
                <input type="text"
                    placeholder="Procure por uma cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleEnterPress} />
            </InputContainer>
            <ResumeInfos>
                <StyledTemperature colors={colors} weatherType={weatherData ? weatherData.weather[0].main : ''}>
                    {temperature ? <h1><span>●</span> {temperature}°C</h1> : <h1></h1>}
                </StyledTemperature>
                <Description colors={colors} weatherType={weatherData ? weatherData.weather[0].main : ''}>
                    {translatedDescription}
                </Description>
                <hr />
                <h3>{formattedDate}</h3>
                <h3>{formattedWeekday}, {formattedTime}</h3>
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
    color: ${(props) => {
        switch (props.weatherType) {
            case 'Clear':
                return colors.orange;
            case 'Clouds':
                return colors.gray;
            case 'Rain':
                return colors.blue;
            case 'Snow':
                return colors.lightGray;
            case 'Thunderstorm':
                return colors.purple;
            case 'Drizzle':
                return colors.lightBlue;
            case 'Mist':
                return colors.lightGray;
            default:
                return '#000000'; // Cor padrão, caso o tipo de tempo não seja reconhecido
        }
    }};
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
const Description = styled.h2`
    font-family: Poppins;
    font-size: 23px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => {
        switch (props.weatherType) {
            case 'Clear':
                return colors.orange;
            case 'Clouds':
                return colors.gray;
            case 'Rain':
                return colors.blue;
            case 'Snow':
                return colors.lightGray;
            case 'Thunderstorm':
                return colors.purple;
            case 'Drizzle':
                return colors.lightBlue;
            case 'Mist':
                return colors.lightGray;
            default:
                return '#000000'; // Cor padrão, caso o tipo de tempo não seja reconhecido
        }
    }};
`;