import { styled } from "styled-components";
import LeftInfos from "./LeftInfos/LeftInfos";
import RightInfos from "./RightInfos/RightInfos";
import { fetchCurrentWeather } from "../../services/data-services";
import axios from "axios";
import useLeftInfos from "../../hooks/useLeftInfos";
export default function HomePage() {
    const { setGraphicData } = useLeftInfos()

    const fetchData = async (city, setLoading, setWeatherData, isDarkMode) => {
        try {
            const weatherData = await fetchCurrentWeather(city, setLoading, setWeatherData, isDarkMode);
            setWeatherData(weatherData);
            if(weatherData){
                fetchGraphic(weatherData?.city)
            }
            
        } catch (error) {
            console.error("Erro ao carregar dados do clima:", error);
        }
    };

    const fetchGraphic = async (city) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/forecast?q=${city}&cnt=${36}&appid=${import.meta.env.VITE_API_KEY}`);
            setGraphicData(response.data);
        } catch (error) {
            console.error('Erro ao obter dados do gráfico:', error.message);
        }
    };


    return (
        <Home>
            <LeftInfos fetchData={fetchData} />
            <RightInfos />
        </Home>
    );
}

const Home = styled.div`
    background-color: #b5b5b5;
    display: flex;
    justify-content: center;
    align-items: stretch; 
    height: 100vh;
    width: 100vw;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;