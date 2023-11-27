import { useContext } from "react"
import { styled } from "styled-components"
import InfoContext from "../contexts/InfoContext"

export default function TodayInfos() {
    const { weatherData } = useContext(InfoContext)

    const kelvinToCelsius = (kelvin) => kelvin - 273.15;
    const temperature = weatherData ? Math.round(kelvinToCelsius(weatherData.main.temp)) : 0;
    const temperatureMax = weatherData ? Math.round(kelvinToCelsius(weatherData.main.temp_max)) : 0;
    const temperatureMin = weatherData ? Math.round(kelvinToCelsius(weatherData.main.temp_min)) : 0;
    const averageTemperature = (temperature + temperatureMax + temperatureMin) / 3;
    const humidity = weatherData ? weatherData.main.humidity : 0;

    const speedKmPerHour = weatherData ? weatherData.wind.speed : 0;
    const speedMetersPerSecond = speedKmPerHour / 3.6;
    const finalVelocity = speedMetersPerSecond.toFixed(2);
    return (
        <>
            <BoxGroup>
                <StyledBox>
                    <p>Mínima</p>
                    <h1>{temperatureMin}° C</h1>
                </StyledBox>
                <StyledBox>
                    <p>Máxima</p>
                    <h1>{temperatureMax}° C</h1>
                </StyledBox>
                <StyledBox>
                    <p>Umidade</p>
                    <h1>{humidity}%</h1>
                </StyledBox>
                <StyledBox>
                    <p>Velocidade de movimento</p>
                    <h1>{finalVelocity} m/s</h1>
                </StyledBox>
            </BoxGroup>
            {averageTemperature <= 22 ? <TextResult1>Você deve levar um casaquinho! 🧥</TextResult1> : <TextResult2>Não, você não deve levar um casaquinho! </TextResult2>}
            
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
const TextResult1 = styled.p`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color:#08164e;
`
const TextResult2 = styled.p`
    font-family: Poppins;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color:#9f9f9f;
`