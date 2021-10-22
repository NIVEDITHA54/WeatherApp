import React from "react";
import { useSelector } from "react-redux";
import WeatherOutput from "./WeatherOutput.js";

const WeatherContainer = () => {
  const fetching = useSelector((state) => state.fetch.fetching);
  const weatherData = useSelector((state) => state.weather.weather);
  const fetchingMessage = () => {
    return (
      <div id="weather-data">
        <p>Working on it!</p>
        <p>This should only take a moment</p>
      </div>
    );
  };

  // this is what gets rendered
  if (fetching) {
    return fetchingMessage();
  }
  if (weatherData !== null) {
    console.log(weatherData);
    return <WeatherOutput />;
  } else {
    return null;
  }
};

export default WeatherContainer;
