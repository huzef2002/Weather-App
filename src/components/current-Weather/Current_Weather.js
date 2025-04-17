import React from 'react';
import "./Current_Weather.css"

function Current_Weather({ data }) {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-discroption'>{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt='name' className='weather-icon' />
      </div>

      <div className='bottom'>
        <p className='tempretur'> {Math.round(data.main.temp)}°c</p>
        <div className='details'>
          <div className='paramiter-row'>
            <span className='paramiter-lable'>Details</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Feels like</span>
            <span className='paramiter-value'>{Math.round(data.main.feels_like)}c</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Wind</span>
            <span className='paramiter-value'>{data.wind.speed} m/s</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Humidity</span>
            <span className='paramiter-value'>{data.main.humidity}%</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Presure</span>
            <span className='paramiter-value'>{data.main.pressure} hPa</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Current_Weather;