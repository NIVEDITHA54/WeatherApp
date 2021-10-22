import React from "react";
import { useDispatch } from "react-redux";
import { locationActions, fetchingActions } from "../redux/index";
import getWeatherData from "../redux/actions";

const CurrentLocationButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchingActions.setFetching(true));
    getCurrentLocationData();
  };

  const getCurrentLocationData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        // setLocation and getWeatherData go to Redux
        dispatch(
          locationActions.setCurrentLocation({
            position: { latitude, longitude },
          })
        );
        dispatch(getWeatherData(latitude, longitude, "coordinates"));
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-xs-4">
          <button onClick={handleClick}>Current Location</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentLocationButton;
