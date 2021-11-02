import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherByCoordinates } from "../redux/weatherSlice";
import { locationActions } from "../redux/index";

const CurrentLocationButton = () => {
  const dispatch = useDispatch();
  const position = useSelector((state) => state.location.position);

  useEffect(() => {
    dispatch(getWeatherByCoordinates(position));
  }, [dispatch, position]);

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        dispatch(locationActions.setPosition({ latitude, longitude }));
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
