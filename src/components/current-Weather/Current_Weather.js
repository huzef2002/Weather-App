import React from 'react';
import "./Current_Weather.css"

function Current_Weather() {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>Mumbai</p>
          <p className='weather-discroption'>Sunny</p>
        </div>
        <img src='icons/01d.png' className='weather-icon' />
      </div>

      <div className='bottom'>
      <p className='tempretur'> 18c</p>
        <div className='details'>
          <div className='paramiter-row'>
            <span className='paramiter-lable'>Details</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Details</span>
            <span className='paramiter-value'>22c</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Wind</span>
            <span className='paramiter-value'>2 m/s</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Humidity</span>
            <span className='paramiter-value'>15%</span>
          </div>

          <div className='paramiter-row'>
            <span className='paramiter-lable'>Presure</span>
            <span className='paramiter-value'>15 hPa</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Current_Weather;