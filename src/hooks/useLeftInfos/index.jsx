import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // Importe o locale correto para o idioma desejado
import { useContext, useEffect, useState } from "react";
import { getDayOfWeekInPortuguese, getNomeDiaSemana, kelvinToCelsius, kelvinToFahrenheit } from "../../utils/climate-data";
import InfoContext from "../../contexts/InfoContext";

const useLeftInfos = () => {
  const [currentDate, setCurrentDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [currentDay, setCurrentDay] = useState(dayjs().format("dddd"));
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm"));
  const { weatherData, setWeatherData, city, setCity, isFahrenheit, setIsFahrenheit, loading, setLoading, dataAno, cityLocation, graphicData, setGraphicData } = useContext(InfoContext)

  useEffect(() => {
    const updateInfos = () => {
      const now = dayjs();
      setCurrentDate(now.format("DD/MM/YYYY"));
      setCurrentDay(getDayOfWeekInPortuguese(now));
      setCurrentTime(now.format("HH:mm:ss"));
    };

    updateInfos(); 
    const interval = setInterval(updateInfos, 1000); 

    return () => clearInterval(interval); 
  }, []);

  
  const times = graphicData?.list.map(item => getNomeDiaSemana(item.dt_txt));
  const temperaturesInKelvin = graphicData?.list.map(item => item.main.temp);
  const temperaturesInCelsius = temperaturesInKelvin?.map(kelvin => kelvinToCelsius(kelvin));
  const temperaturesInFahrenheit = temperaturesInKelvin?.map(kelvin => kelvinToFahrenheit(kelvin));
  const uniqueDays = new Map();
  const unit = isFahrenheit ? "℉" : "℃";

  times?.forEach((time, index) => {
    if (!uniqueDays.has(time)) {
        uniqueDays.set(time, {
            time: time.toUpperCase(),
            temp: Math.round(isFahrenheit ? temperaturesInFahrenheit[index] : temperaturesInCelsius[index])
        });
    }
});

  const data = Array.from(uniqueDays.values());

  console.log(data)

  return {
    currentDate,
    currentDay,
    currentTime,
    weatherData, 
    setWeatherData, 
    city, 
    setCity, 
    isFahrenheit, 
    setIsFahrenheit, 
    loading, 
    setLoading, 
    dataAno, 
    cityLocation,
    graphicData, 
    setGraphicData,
    data,
    unit
  };
};

export default useLeftInfos;