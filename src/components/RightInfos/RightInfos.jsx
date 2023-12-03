import { styled } from "styled-components"
import TodayInfos from "../TodayInfos"
import NextDayInfos from "../NextDaysInfos"
import { useContext, useState } from "react";
import InfoContext from "../../contexts/InfoContext";

export default function RightInfos() {
    const { weatherData } = useContext(InfoContext)
    const [selectedComponent, setSelectedComponent] = useState('today');
    const formattedLatitude = weatherData ? Math.abs(weatherData.coord.lat).toFixed(2) : '--';
    const formattedLongitude = weatherData ? Math.abs(weatherData.coord.lon).toFixed(2) : '--';

    const handleTitleClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <RightInfosContainer>
            <TitleOptions selectedComponent={selectedComponent}>
                <h1 onClick={() => handleTitleClick('today')}>Hoje</h1>
                <h2 onClick={() => handleTitleClick('nextDays')}>Próximos dias</h2>
            </TitleOptions>
            <CityAndCoordinates weatherData={weatherData}>
                {weatherData ? <h1>{weatherData.name}</h1> : <h2>--</h2>}
                <p>Lat: {formattedLatitude} <span>...</span> Long: {formattedLongitude}</p>
            </CityAndCoordinates>
            {selectedComponent === 'today' ? <TodayInfos /> : <NextDayInfos />}
            <Footer>
                <p>Dados fornecidos pela <span>Open Weather API</span></p>
            </Footer>
        </RightInfosContainer>
    )
}

const RightInfosContainer = styled.div`
    background-color:#D8D8D8;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1912px;
    border: 2px solid #D8D8D8;
    padding-left: 40px;
    padding-top: 30px;
    @media (max-width: 574px) {
        height: 100%;
        margin: 0 auto;
        width: 574px;
    }
`
const CityAndCoordinates = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:10px;
    h1{
        font-family: Poppins;
        font-size: 80px;
        font-weight: 400;
        line-height: 65px;
        letter-spacing: 0em;
        text-align: left;
        color: #222222;
    }
    h2{
        font-family: Poppins;
        font-size: 50px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        color: #878787;
    }
    p{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        color: #222222;
        margin-top: 10px;
        margin-left: 5px;
    }
    span{
        color:#D8D8D8;
    }
`
const TitleOptions = styled.div`
    width: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap:50px;
    margin-bottom: 40px;
    h1{
        color: ${(props) =>
        props.selectedComponent === 'today' ? 'black' : '#a7a7a7'};
        font-family: Poppins;
        font-size: 28px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        cursor: pointer;
    }
    h2{
        color: ${(props) =>
        props.selectedComponent === 'nextDays' ? 'black' : '#a7a7a7'};
        font-family: Poppins;
        font-size: 28px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        cursor: pointer;
    }
`
const Footer = styled.div`
    bottom: 20px;
    position: fixed;
    @media (max-width: 574px) {
        width: 450px !important; /* Ajusta a largura para 100% em telas menores que 574px */
        position: relative;
        margin-top: 20px;
        text-align: center;
    }
    p{
        font-family: Poppins;
        font-size: 18px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        @media (max-width: 574px) {
        text-align: left;
        margin-bottom: 10px;
    }
    span{
        color: #96A7F2;
    }
    }
`