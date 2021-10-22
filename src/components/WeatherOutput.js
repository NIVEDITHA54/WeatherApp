import React, { useState } from "react";
import { useSelector } from "react-redux";

const WeatherOutput = () => {
  const weatherData = useSelector((state) => state.weather.weather);

  const { temp, temp_min, temp_max, feels_like, pressure, humidity } =
    weatherData.list.main;
  let iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const [option, setOption] = useState("fahrenheit");
  console.log(weatherData);

  const toCelsius = (temp) => Math.round((5 / 9) * (temp - 32));
  const switchToC = () => setOption("celsius");
  const switchToF = () => setOption("fahrenheit");

  return (
    <div id="weather-data">
      <p id="location">
        {weatherData.name}, &nbsp;{weatherData.sys.country}
        <img src={iconUrl} alt="weather icon"></img>
        {option === "fahrenheit" ? `${temp} °F` : `${toCelsius(temp)} °C `}
      </p>
      <label>
        °F &nbsp;
        <input
          type="radio"
          value="f"
          checked={option === "fahrenheit"}
          onChange={switchToF}
        ></input>
      </label>{" "}
      &nbsp;
      <label>
        °C &nbsp;
        <input
          type="radio"
          value="c"
          checked={option === "celsius"}
          onChange={switchToC}
        ></input>
      </label>
      <br></br>
      <br></br>
      <p>
        Conditions: {weatherData.weather[0].main} -{" "}
        {weatherData.weather[0].description}
      </p>
      <p>
        Temperature:{" "}
        {option === "fahrenheit"
          ? `${Math.round(temp)} °F`
          : `${toCelsius(temp)} °C `}{" "}
      </p>
      <p>
        Min temperature:{" "}
        {option === "fahrenheit"
          ? `${Math.round(temp_min)} °F`
          : `${toCelsius(temp_min)} °C `}{" "}
      </p>
      <p>
        Max temperature:{" "}
        {option === "fahrenheit"
          ? `${Math.round(temp_max)} °F`
          : `${toCelsius(temp_max)} °C `}
      </p>
      <p>
        Feels like:{" "}
        {option === "fahrenheit"
          ? `${Math.round(feels_like)} °F`
          : `${toCelsius(feels_like)} °C `}
      </p>
      <p>Pressure: {pressure} hpa</p>
      <p>Humidity: {humidity} %</p>
      <p></p>
    </div>
  );
};

export default WeatherOutput;
