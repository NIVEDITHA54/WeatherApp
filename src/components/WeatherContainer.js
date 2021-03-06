import React from "react";
import { useSelector } from "react-redux";
import WeatherOutput from "./WeatherOutput.js";

const WeatherContainer = () => {
  const fetching = useSelector((state) => state.weather.status);
  const { weatherData } = useSelector((state) => state.weather.weatherData);
  const fetchingMessage = () => {
    return (
      <div id="weather-data">
        <p>Working on it!</p>
        <p>This should only take a moment</p>
      </div>
    );
  };

  // this is what gets rendered
  if (fetching === "loading") {
    return fetchingMessage();
  }
  if (weatherData !== null && fetching === "success") {
    return <WeatherOutput />;
  } else {
    return null;
  }
};

export default WeatherContainer;
