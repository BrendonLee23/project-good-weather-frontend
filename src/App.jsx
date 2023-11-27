import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import InfoContext from "./contexts/InfoContext"
import { useState } from "react";


function App() {
  const [weatherData, setWeatherData] = useState();
  const [graphicData, setGraphicData] = useState();
  const [city, setCity] = useState('');
  const apiKey = '0f65746ebdd611271286b80eda237cde';
  console.log(weatherData)
  console.log(graphicData)

  return (
    <InfoContext.Provider value={{apiKey, weatherData, setWeatherData, graphicData, setGraphicData, city, setCity}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </InfoContext.Provider>
  )
}

export default App
