import { useContext } from "react"
import InfoContext from "../contexts/InfoContext"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function NextDayInfos() {
    const {  graphicData } = useContext(InfoContext)
    console.log(graphicData)



    const formatXAxis = (tickItem) => {
        // Formatar o valor do eixo X para exibir apenas a hora
        const date = new Date(tickItem);
        return date.getHours() + ":00";
        };

    return (
        <ResponsiveContainer width="90%" height={300}>
            <LineChart
                data={graphicData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                style={{ backgroundColor: '#fff' }}
            >
                <XAxis dataKey="timestamp" tickFormatter={formatXAxis}/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}