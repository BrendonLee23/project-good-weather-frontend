import dayjs from "dayjs";
import "dayjs/locale/pt-br"; // Importe o locale correto para o idioma desejado
import { useContext, useEffect, useState } from "react";
import { getDayOfWeekInPortuguese, weatherDescriptions } from "../../utils/climate-data";
import InfoContext from "../../contexts/InfoContext";

const useLeftInfos = () => {
  const [currentDate, setCurrentDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [currentDay, setCurrentDay] = useState(dayjs().format("dddd"));
  const [currentTime, setCurrentTime] = useState(dayjs().format("HH:mm"));
  const { weatherData, setWeatherData, city, setCity, isFahrenheit, setIsFahrenheit, loading, setLoading, dataAno, cityLocation } = useContext(InfoContext)

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

  const weatherDescription = weatherData?.description?.toLowerCase();
  const weatherColor = weatherDescriptions[weatherDescription]?.color || "#000000";
  const iconUrl = weatherData
      ? weatherData?.icon
      : null;

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
    weatherColor,
    iconUrl
  };
};

export default useLeftInfos;