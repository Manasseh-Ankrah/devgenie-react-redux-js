import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setDarkMode: (state, { payload }) => {
      state.isDarkMode = payload.isDarkMode;
    },
  },
  extraReducers: (builder) => {},
});

export const { setDarkMode } = slice.actions;

// Reducer
export default slice.reducer;
