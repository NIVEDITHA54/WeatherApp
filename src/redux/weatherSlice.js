import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: null,
  },
  reducers: {
    setWeatherData(state, action) {
      state.weather = action.payload;
    },
    clearWeatherData(state) {
      state.selectedLocation = state;
    },
  },
});

export default weatherSlice;
