import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import InfoContext from "./contexts/InfoContext"
import { useState } from "react";


function App() {
  const [weatherData, setWeatherData] = useState();
  const apiKey = '0f65746ebdd611271286b80eda237cde';
  console.log(weatherData)







  return (
    <InfoContext.Provider value={{apiKey, weatherData, setWeatherData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </InfoContext.Provider>
  )
}

export default App
