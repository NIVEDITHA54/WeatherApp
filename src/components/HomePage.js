import React from "react";
import { useSelector } from "react-redux";
import CityCountryForm from "./CityCountryForm.js";
import WeatherContainer from "./WeatherContainer.js";
import CurrentLocationButton from "./CurrentLocationButton";

const HomePage = () => {
  const currentLocation = useSelector((state) => state.location.location);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const status = useSelector((state) => state.weather.status);
  console.log(
    "currentLocation = ",
    currentLocation,
    "  weatherData = ",
    weatherData,
    " status = ",
    status
  );
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 title mt-5">
            <h1> Weather App</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <CityCountryForm />
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-sm-4">
            <CurrentLocationButton />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            {weatherData !== null && status === "success" && (
              <WeatherContainer />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
