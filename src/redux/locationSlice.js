import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: null,
    selectedLocation: {
      city: null,
      country: null,
    },
  },
  reducers: {
    setCurrentLocation(state, action) {
      state.location = action.payload;
    },
    selectLocation(state, action) {
      state.selectedLocation = action.payload;
    },
    clearLocation(state) {
      state.selectedLocation = state;
    },
  },
});

export default locationSlice;
