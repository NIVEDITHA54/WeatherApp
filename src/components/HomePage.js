import React from "react";
import { useSelector } from "react-redux";
import CityCountryForm from "./CityCountryForm.js";
import CurrentLocationButton from "./CurrentLocationButton.js";
import WeatherContainer from "./WeatherContainer.js";

const HomePage = () => {
  const currentLocation = useSelector((state) => state.location.location);
  const weatherData = useSelector((state) => state.weather.weather);

  return (
    <div className="row">
      <div className="col-md-6 title"></div>
      <div className="col-md-6 form">
        <div className="row">
          <div className="col-md-12">
            <CityCountryForm />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <CurrentLocationButton />
          </div>
          <div className="col-md-4"></div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            {currentLocation !== null && weatherData !== null && (
              <WeatherContainer />
            )}
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
