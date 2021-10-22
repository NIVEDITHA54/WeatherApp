import { weatherActions, fetchingActions } from "../redux/index";

const getWeatherData = (param1, param2, type) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
  let apiUrl =
    type === "coordinates"
      ? `${baseUrl}lat=${param1}&lon=${param2}&units=imperial&appid=94ba1824f5bc142ac1082520e96f2e36`
      : `${baseUrl}q=${param1},${param2}&appid=94ba1824f5bc142ac1082520e96f2e36&units=imperial`;
  return (dispatch) => {
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => dispatch(weatherActions.setWeatherData(data)))
      .then(dispatch(fetchingActions.setFetching(false)));
  };
};

export default getWeatherData;
