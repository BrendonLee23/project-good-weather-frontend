import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InfoContext from "./contexts/InfoContext";
import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { anoAtual } from "./utils/climate-data";
import useGeolocation from "./hooks/useGeolocation";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [graphicData, setGraphicData] = useState();
  const [finalGraphicData, setFinalGraphicData] = useState();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const dataAno = anoAtual();
  const cityLocation = useGeolocation();
  console.log("Dados do clima no APP:", weatherData);


  return (

      <InfoContext.Provider
        value={{
          weatherData,
          setWeatherData,
          graphicData,
          setGraphicData,
          city,
          setCity,
          isFahrenheit,
          setIsFahrenheit,
          finalGraphicData,
          setFinalGraphicData,
          loading,
          setLoading,
          dataAno,
          cityLocation
        }}
      > 
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
  );
}

export default App;