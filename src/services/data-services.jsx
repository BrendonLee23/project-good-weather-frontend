import axios from "axios";
import dayjs from "dayjs";
import { roundTemperature } from "../utils/climate-data";
import { toast } from "react-toastify";


export async function fetchCurrentWeather(city, setLoading, setWeatherData, isDarkMode) {
    
    try {
        setLoading(true); // Inicia o estado de carregamento
        const startTime = Date.now(); // Marca o tempo inicial da requisição

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/weather`, {
            params: {
                q: city,
                appid: import.meta.env.VITE_API_KEY,
                units: "metric",
                lang: "pt_br"
            }
        });

        const elapsedTime = Date.now() - startTime; // Tempo decorrido
        const delay = Math.max(1000 - elapsedTime, 0); // Garante pelo menos 1s de loading

        const data = response.data;
        const payload = {
            city: data.name,
            temperature: roundTemperature(data.main.temp),
            feelsLike: data.main.feels_like,
            minTemp: roundTemperature(data.main.temp_min),
            maxTemp: roundTemperature(data.main.temp_max),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            updatedAt: dayjs.unix(data.dt).format("HH:mm:ss")
        };

        setTimeout(() => {
            setLoading(false); // Finaliza o estado de carregamento após o delay mínimo de 1s
            toast.success('Pesquisa bem sucedida!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: isDarkMode ? "dark" : "light",
                });
        }, delay);

        return payload;
    } catch (error) {
        setWeatherData()
        setTimeout(() => {
            setLoading(false); // Finaliza o estado de carregamento em caso de erro
            toast.error("Falha ao realizar busca.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: isDarkMode ? "dark" : "light",
                });
        }, 1000);

        console.error("Erro ao buscar dados do clima:", error);
        throw error;
    }
}
