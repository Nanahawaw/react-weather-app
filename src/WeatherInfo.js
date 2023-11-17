import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="flex">
        <div className="w-6/12 flex items-center">
          <img src={props.data.icon} alt="mostly_cloudy" className="mr-2" />
          <span className="text-lg">
            {Math.round(props.data.temperature)}°C
          </span>
        </div>
        <div className="w-6/12">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
