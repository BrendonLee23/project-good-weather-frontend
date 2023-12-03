import { styled } from "styled-components";
import Casaco from "../../assets/casaco.svg";
import Lupa from "../../assets/lupa.svg";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useContext } from "react";
import axios from "axios";
import InfoContext from "../../contexts/InfoContext";
import { weatherDescriptions } from "../../utils/climate-data";
import Swal from "sweetalert2";

export default function LeftInfos() {
    const { apiKey, setWeatherData, weatherData, setGraphicData, city, setCity, isFahrenheit, setIsFahrenheit } = useContext(InfoContext)
    const apiURL = import.meta.env.VITE_API_URL;
    const currentDate = new Date();
    const optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' }
    const formattedDate = currentDate.toLocaleDateString('pt-BR', optionsDate);
    const optionsWeekday = { weekday: 'long' };
    const formattedWeekday = currentDate.toLocaleDateString('pt-BR', optionsWeekday);
    const optionsHours = { hour: 'numeric', minute: 'numeric' };
    const formattedTime = currentDate.toLocaleTimeString('pt-BR', optionsHours);
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * (9 / 5) + 32;
    const temperatureInKelvin = weatherData ? weatherData.main.temp : 0;
    const temperatureInCelsius = Math.round(kelvinToCelsius(temperatureInKelvin));
    const temperatureInFahrenheit = Math.round(kelvinToFahrenheit(temperatureInKelvin));
    const displayTemperature = isFahrenheit ? temperatureInFahrenheit : temperatureInCelsius;
    const weatherDescription = weatherData ? weatherData.weather[0].description : "- -";

    const translatedDescription = weatherDescriptions[weatherDescription] || weatherDescription;

    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiURL}/weather?q=${city}&appid=${apiKey}`);
            if (response.data && response.data.main) {
                setWeatherData(response.data);
            } else {
                console.error('Erro ao obter dados do clima: Resposta da API mal formatada.');
                Swal.fire({
                    title: "Erro ao obter dados do clima",
                    text: "Os dados retornados pela API não estão no formato esperado.",
                    icon: "error",
                    confirmButtonText: "😢 okay..."
                })
            }
        } catch (error) {
            console.error('Erro ao obter dados do clima:', error);
            Swal.fire({
                title: "Cidade não encontrada!",
                text: "Verifique se o nome da cidade está correto ou insira uma cidade válida.",
                icon: "error",
                confirmButtonText: "😢 okay..."
            })
        }
    };
    const fetchGraphic = async () => {
        try {
            const response = await axios.get(`${apiURL}/forecast?q=${city}&appid=${apiKey}`);
            if (response.data && response.data.list) {
                const graphData = response?.data.list.map(item => ({
                    timestamp: new Date(item.dt * 1000), 
                    temperature: item.main.temp - 273.15, 
                }));
                setGraphicData(graphData);
            } else {
                console.error('Erro ao obter dados do gráfico: Resposta da API mal formatada.');
            }
        } catch (error) {
            console.error('Erro ao obter dados do gráfico:', error.message);
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

    const getIconUrl = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}.png`;
    const iconUrl = weatherData && weatherData.weather && weatherData.weather.length > 0
        ? getIconUrl(weatherData.weather[0].icon)
        : null;

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
                    onKeyDown={handleEnterPress}
                    autoFocus />
            </InputContainer>
            <ResumeInfos>
                <StyledTemperature weatherType={weatherData ? weatherData.weather[0].description : ''}>
                    {temperatureInKelvin ? (
                        <>

                            <h1>{iconUrl && <img src={iconUrl} alt="Weather Icon" />}{displayTemperature}°{isFahrenheit ? 'F' : 'C'}</h1>
                        </>
                    ) : (
                        <h1></h1>
                    )}
                </StyledTemperature>
                <Description weatherType={weatherData ? weatherData.weather[0].description : ''}>
                    {translatedDescription.description}
                </Description>
            </ResumeInfos>
            <SwitchsDiv>
                <hr />
                <h2>{formattedDate}</h2>
                <h3>{formattedWeekday}, {formattedTime}</h3>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isFahrenheit}
                                onChange={() => setIsFahrenheit(!isFahrenheit)}
                                color="primary"
                            />
                        }
                        label="°F" />
                    <FormControlLabel control={<Switch />} label="Dark Mode" />
                </FormGroup>
            </SwitchsDiv>
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
    width: 800px;
    height: 100%;
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
            width: 35px; 
            height: 35px; 
            cursor: pointer;
        }
`
const ResumeInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    margin-bottom: 25px;
    position: relative;
`
const StyledTemperature = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    margin-top: 25px;
    margin-bottom: 15px;
    color: ${(props) => {
        const weatherType = props.weatherType || '';
        const color = weatherDescriptions[weatherType]?.color || '#b6b4b4';

        return color;
    }};
    h1{
        font-family: Poppins;
        font-size: 80px;
        font-weight: 300;
        line-height: 48px;
        letter-spacing: 0em;
    }
    img{
        width: 70px; 
        height:70px;
    }
`
const Footer = styled.div`
    bottom: 20px;
    position: fixed;
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
        const weatherType = props.weatherType || '';
        const color = weatherDescriptions[weatherType]?.color || '#9b9999';

        return color;
    }};
`
const SwitchsDiv = styled.div`
    bottom: 90px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    hr{
        background: #EDEDED;
        border: 2px solid #EDEDED;
        width: 250px;
        margin-bottom: 30px;
    }
    h2{
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    }
    h3{
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 25px;
    }

`