import { createSlice } from "@reduxjs/toolkit";

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    year: 2020,
    month: 0,
  },
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { setYear, setMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
