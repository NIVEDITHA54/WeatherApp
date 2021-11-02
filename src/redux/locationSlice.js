import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: null,
    position: null,
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    clearLocation(state) {
      state.location = state;
    },
    setPosition(state, action) {
      state.position = action.payload;
    },
  },
});

export default locationSlice;
