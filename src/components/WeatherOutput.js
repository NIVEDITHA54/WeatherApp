import React, { useState } from "react";
import { useSelector } from "react-redux";

const WeatherOutput = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const { temp, temp_min, temp_max, humidity } = weatherData.list[0].main;
  const windspeed = weatherData.list[0].wind.speed;
  let iconUrl = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;

  console.log(weatherData);

  const [option, setOption] = useState("fahrenheit");

  const toCelsius = (temp) => Math.round((5 / 9) * (temp - 32));
  const switchToC = () => setOption("celsius");
  const switchToF = () => setOption("fahrenheit");

  return (
    <div id="weather-data">
      <p id="location">
        {weatherData.city.name}, &nbsp;{weatherData.city.country}
        <br />
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
      <p>Humidity: {humidity} %</p>
      <p>Wind speed: {windspeed}m/s</p>
    </div>
  );
};

export default WeatherOutput;
