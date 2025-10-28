
import { useState } from 'react'
import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'
// import weatherData from './components/mockWeatherData'




function App() {
 const[chosenCity,setChosenCity]= useState(null)
  return (
    <>
    <h1>Weather App</h1>
     <CityList onClickCity={setChosenCity}></CityList>
     {chosenCity && (
        <CityForecast city={chosenCity} onBack={() => setChosenCity(null)} />
      )}
    </>
  )
}

export default App
