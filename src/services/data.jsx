import axios from 'axios';

export async function getWeatherData(city, apiKey) {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}forecast?q=${city}&appid=${apiKey}`);
    return response.data;
}