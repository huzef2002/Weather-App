import './App.css';
import Current_Weather from './components/current-Weather/Current_Weather';
import Search from './components/Search/Search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';

function App() {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handeOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherRespons = await response[0].json();
        const forecastRespons = await response[1].json();

        setWeather({ city: searchData.label, ...weatherRespons });
        setForecast({ city: searchData.label, ...forecastRespons });

      })

      .catch((err) => console.log(err));

  }

  // console.log(weather);
  // console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handeOnSearchChange} />
      {weather && <Current_Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
