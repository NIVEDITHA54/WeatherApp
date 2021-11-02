import { configureStore } from "@reduxjs/toolkit";

import locationSlice from "./locationSlice";
import weatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    weather: weatherSlice.reducer,
  },
});

export const locationActions = locationSlice.actions;
export const weatherActions = weatherSlice.actions;

export default store;
