import { configureStore } from "@reduxjs/toolkit";
import fetchingSlice from "./fetchingSlice";
import locationSlice from "./locationSlice";
import weatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    fetch: fetchingSlice.reducer,
    location: locationSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export const fetchingActions = fetchingSlice.actions;
export const locationActions = locationSlice.actions;
export const weatherActions = weatherSlice.actions;

export default store;
