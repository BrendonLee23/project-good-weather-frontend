import { styled } from "styled-components";
import LeftInfos from "./LeftInfos/LeftInfos";
// import RightInfos from "../../components/RightInfos/RightInfos";
import { fetchCurrentWeather } from "../../services/data-services";
export default function HomePage() {

    const fetchData = async (city, setLoading, setWeatherData, isDarkMode) => {
        try {
            const weatherData = await fetchCurrentWeather(city, setLoading, setWeatherData, isDarkMode);
            setWeatherData(weatherData);
        } catch (error) {
            console.error("Erro ao carregar dados do clima:", error);
        }
    };

    return (
        <Home>
            <LeftInfos fetchData={fetchData} />
            {/* <RightInfos /> */}
        </Home>
    );
}

const Home = styled.div`
    background-color: #b5b5b5;
    display: flex;
    justify-content: center;
    align-items: center;
`;

