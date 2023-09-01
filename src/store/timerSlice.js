import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timerIsActive: false,
  },
  reducers: {
    startTimer: (state) => {
      state.timerIsActive = true;
    },
    stopTimer: (state) => {
      state.timerIsActive = false;
    },
  },
});

export const { startTimer, stopTimer } = timerSlice.actions;

export default timerSlice.reducer;
