import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export const weatherDescriptions = {
    'ceu limpo': { color: '#79b7ee' },
    'poucas nuvens': { color: '#969494' },
    'algumas nuvens': { color: '#969494' },
    'nublado': { color: '#807f7f' },
    'nuvens dispersas': { color: '#c1c0c0' },
    'nuvens quebradas': { color: '#ADD8E6' },
    'overcast clouds': { color: '#785478' },
    'chuva leve': { color: '#00BFFF' },
    'chuva moderada': { color: '#0000FF' },
    'chuva intensa': { color: '#000080' },
    'neve leve': { color: '#f9f9f9' },
    'neve moderada': { color: '#EEE8AA' },
    'neve intensa': { color: '#FFFAFA' },
    'nevoa': { color: '#8B4513' },
    'nevoeiro': { color: '#8B4513' },
    'tempestade': { color: '#0f0c37' },
    'chuvisco': { color: '#87CEEB' },
    'fumaça': { color: '#A9A9A9' },
};

export const capitalizeFirstLetter = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
    };
export const getDayOfWeekInPortuguese = (date) => {
    dayjs.locale("pt-br")
    return dayjs(date).format("dddd")
};
export const roundTemperature = (temperature) => {
    return Math.floor(temperature)
    };
export function celsiusToFahrenheit(celsius) {
    return roundTemperature(((celsius * 9/5) + 32).toFixed(2));
}

export function anoAtual() {
    return dayjs().year();
}