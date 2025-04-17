import React from 'react';
import './forecast.css';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'react-bootstrap';


const WEEK_DAYS = ["Monday", "Tuseday", "Wednesday", "Thusday", "Friday", "Saterday", "Sunday"]

function Forecast({ data }) {

  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek).concat(WEEK_DAYS.slice(0, dayInWeek));
  // console.log(forecastDays);

  return (
    <div className='container samir'>
      <label >Daily</label>
      <Accordion defaultActiveKey="0">
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem eventKey={idx.toString()} key={idx}>
            <AccordionHeader>
              <div className='d-flex align-items-center gap-3'>
                <img
                  src={`icons/${item.weather[0].icon}.png`}
                  alt='weather icon'
                  style={{ width: 30 }}
                />

              </div>
              <span>{forecastDays[idx]}</span>
            </AccordionHeader>
            <AccordionBody>
              <p>discroption: {item.weather[0].description}</p>
              <p>Temperature: {item.main.temp} °C</p>
              <p>Humidity: {item.main.humidity}%</p>
              <p>Wind: {item.wind.speed} m/s</p>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Forecast;
