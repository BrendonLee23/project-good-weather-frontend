import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import useLeftInfos from "../../../../hooks/useLeftInfos";
import SkeletonGraphic from '../../../../components/Skeleton/Graphic-Skeleton';
import { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';

export default function NextDayInfos() {
    const { data, unit, loading } = useLeftInfos();
    const {isDarkMode} = useContext(ThemeContext)

    console.log(isDarkMode)

    if(loading){
        return(
            <SkeletonGraphic></SkeletonGraphic>
        )
    }

    const backgroundColor = isDarkMode ? "#686868" : "#fff";
    const textColor = isDarkMode ? "#fff" : "#000";

    return (
        <ResponsiveContainer width={1300} height={500}>
            <LineChart data={data} margin={{ top: 20 }} style={{ backgroundColor }}>
                <CartesianGrid strokeDasharray="3 2" stroke={isDarkMode ? "#d5d5d5" : "#bfbfbf"} />
                <XAxis 
                    dataKey="time" 
                    padding={{ left: 30, right: 30 }} 
                    tick={{ fill: textColor }} 
                />
                <YAxis 
                    tickFormatter={(value) => `${value} ${unit}`} 
                    tick={{ fill: textColor }}
                />
                <Tooltip
                    contentStyle={{ backgroundColor, color: textColor }}
                    formatter={(value) => `${value} ${unit}`}
                />
                <Legend wrapperStyle={{ color: textColor }} />
                <Line
                    type="monotone"
                    dataKey="temp"
                    stroke={isDarkMode ? "#e89bff" : "#8884d8"} 
                    activeDot={{ r: 10 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
