import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "e6fcbcft268220745f113aof372ae233";
  return (
    <div className="Weather">
      <form>
        <div className="flex">
          <div className="w-10/12">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="w-2/12">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>Lagos</h1>
      <ul>
        <li>Thursday 07: 00</li>
        <li>Partly cloudy</li>
      </ul>
      <div className="flex">
        <div className="w-6/12 flex items-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly_cloudy"
            className="mr-2"
          />
          <span className="text-lg">6°C</span>
        </div>
        <div className="w-6/12">
          <ul>
            <li>Precipitation: 75%</li>
            <li>Humidity: 60%</li>
            <li>Wind: 6</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
