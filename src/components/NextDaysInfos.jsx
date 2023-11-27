import { useContext } from "react"
import InfoContext from "../contexts/InfoContext"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function NextDayInfos() {
    const { graphicData } = useContext(InfoContext)
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={graphicData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey="timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    )
}