import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetching",
  initialState: {
    fetching: false,
  },
  reducers: {
    setFetching(state, action) {
      state.fetching = action.payload;
    },
  },
});

export default fetchingSlice;
