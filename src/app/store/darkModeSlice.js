import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const slice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      customEntityAdapter.removeAll(state);
    });
  },
});

export const { setDarkMode } = slice.actions;

// Reducer
export default slice.reducer;
