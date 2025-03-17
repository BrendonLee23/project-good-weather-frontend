import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import useLeftInfos from "../../../../hooks/useLeftInfos";
import SkeletonGraphic from '../../../../components/Skeleton/Graphic-Skeleton';

export default function NextDayInfos() {
    const { data, unit, isDarkMode, loading } = useLeftInfos();

    console.log(isDarkMode)

    if(loading){
        return(
            <SkeletonGraphic></SkeletonGraphic>
        )
    }

    return (
        <ResponsiveContainer width={1300} height={500}>
            <LineChart data={data} margin={{ top: 20 }} accessibilityLayer style={{ backgroundColor:"#fff" }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="time" 
                    padding={{ left: 30, right: 30 }} 
                    tick={{ fill: isDarkMode ? "#fff" : "#000" }} 
                />
                <YAxis tickFormatter={(value) => `${value} ${unit}`} />
                <Tooltip
                    contentStyle={{ backgroundColor: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }}
                    formatter={(value) => `${value} ${unit}`}
                />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="#8884d8"
                    activeDot={{ r: 10 }}
                >
                </Line>
                </LineChart>
        </ResponsiveContainer>
    );
}
