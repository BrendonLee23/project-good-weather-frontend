import { format } from 'date-fns';
import { useContext } from "react";
import InfoContext from "../contexts/InfoContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function NextDayInfos() {
    const { graphicData, isFahrenheit } = useContext(InfoContext);

    const formatXAxis = (tickItem) => {
        return format(new Date(tickItem), 'dd/MM');
    };

    const temperatureFormatter = (value) => {
        // Arredonda para um número inteiro
        const roundedTemperature = Math.round(value);

        // Se isFahrenheit for verdadeiro, converte Celsius para Fahrenheit
        const temperature = isFahrenheit ? (roundedTemperature * 9/5) + 32 : roundedTemperature;

        return `${temperature}°${isFahrenheit ? 'F' : 'C'}`;
    };

    return (
        <ResponsiveContainer width="90%" height={330}>
            <LineChart
                data={graphicData}
                margin={{ top: 30, right: 30, left: 20, bottom: 0 }}
                style={{ backgroundColor: '#fff' }}
            >
                <XAxis dataKey="timestamp" tickFormatter={formatXAxis} interval={6} />
                <YAxis domain={[-5, 40]} />
                <CartesianGrid strokeDasharray="6 6" />
                <Tooltip formatter={temperatureFormatter} />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}
