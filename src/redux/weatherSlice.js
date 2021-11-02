import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getWeatherByCoordinates = createAsyncThunk(
  "weather/getWeatherByCoordinates",
  async (obj, { dispatch }) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${obj.latitude}&lon=${obj.longitude}&appid=94ba1824f5bc142ac1082520e96f2e36`;
    return await fetch(apiUrl).then((resp) => resp.json());
  }
);

export const getWeatherByCity = createAsyncThunk(
  "weather/getWeatherByCity",
  async (obj, { dispatch }) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${obj.city},${obj.country}&appid=94ba1824f5bc142ac1082520e96f2e36`;
    return await fetch(apiUrl).then((resp) => resp.json());
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    status: null,
  },
  extraReducers: {
    [getWeatherByCoordinates.pending]: (state) => {
      state.status = "loading";
    },

    [getWeatherByCoordinates.fulfilled]: (state, action) => {
      state.status = "success";
      state.weatherData = action.payload;
    },
    [getWeatherByCoordinates.rejected]: (state) => {
      state.status = "failed";
    },
    [getWeatherByCity.pending]: (state) => {
      state.status = "loading";
    },

    [getWeatherByCity.fulfilled]: (state, action) => {
      state.status = "success";
      state.weatherData = action.payload;
    },
    [getWeatherByCity.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default weatherSlice;
