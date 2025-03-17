import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export const weatherDescriptions = {
    'ceu limpo': { color: '#87CEEB', dark: '#E0F7FA' }, // Azul céu claro / Azul céu claro (claro)
    'poucas nuvens': { color: '#B0C4DE', dark: '#E0E7F0' }, // Azul acinzentado / Azul acinzentado (claro)
    'algumas nuvens': { color: '#A9A9A9', dark: '#D3D3D3' }, // Cinza médio / Cinza claro
    'nublado': { color: '#808080', dark: '#B0B0B0' }, // Cinza escuro / Cinza médio
    'nuvens dispersas': { color: '#C0C0C0', dark: '#E0E0E0' }, // Cinza claro / Cinza muito claro
    'nuvens quebradas': { color: '#ADD8E6', dark: '#D1E8F0' }, // Azul claro / Azul claro (claro)
    'overcast clouds': { color: '#696969', dark: '#8C8C8C' }, // Cinza escuro / Cinza médio
    'chuva leve': { color: '#00BFFF', dark: '#80DFFF' }, // Azul céu / Azul céu (claro)
    'chuva moderada': { color: '#1E90FF', dark: '#8FC7FF' }, // Azul dodger / Azul dodger (claro)
    'chuva intensa': { color: '#00008B', dark: '#0000CD' }, // Azul escuro / Azul médio
    'neve leve': { color: '#F0F8FF', dark: '#F8F8FF' }, // Branco azulado / Branco azulado (claro)
    'neve moderada': { color: '#E0FFFF', dark: '#F0FFFF' }, // Ciano claro / Ciano claro (claro)
    'neve intensa': { color: '#FFFFFF', dark: '#F5F5F5' }, // Branco / Branco (claro)
    'nevoa': { color: '#D3D3D3', dark: '#E8E8E8' }, // Cinza claro / Cinza muito claro
    'nevoeiro': { color: '#C0C0C0', dark: '#DCDCDC' }, // Cinza claro / Cinza muito claro
    'tempestade': { color: '#0F0C37', dark: '#1E1A6E' }, // Azul muito escuro / Azul escuro
    'chuvisco': { color: '#87CEEB', dark: '#B0E2FF' }, // Azul céu claro / Azul céu claro (claro)
    'fumaça': { color: '#708090', dark: '#A0A0A0' }, // Cinza ardósia / Cinza médio
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
export function ajustarLatitude(lat) {
    let novaLat = Math.max(-90, Math.min(90, lat));
    return parseFloat(Math.abs(novaLat).toFixed(2)); // Remove o sinal negativo
}

export function ajustarLongitude(lon) {
    let novaLon = Math.max(-180, Math.min(180, lon));
    return parseFloat(Math.abs(novaLon).toFixed(2)); // Remove o sinal negativo
}

export function removeAcentuacao(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function getNomeDiaSemana(dataHora) {
    const data = dayjs(dataHora);
    return data.format('dddd').split('-')[0]; // Pegando apenas o primeiro nome
}


export const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32;
    };

export const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
    };
    

export function arredondarTemperaturas(data) {
    return data?.map(entry => ({
        time: entry.time,
        temperature: Math.round(entry.temperature)
    }));
}

export function formatarNomeSemana(data) {
    return data?.map(entry => ({
        time: entry.time.toUpperCase(),
        temperature: entry.temperature
    }))
}

