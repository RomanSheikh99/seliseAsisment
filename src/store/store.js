import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendar";
import appointmentReducer from "./appointment";

export default configureStore({
  reducer: {
    calendar: calendarReducer,
    appointment: appointmentReducer,
  },
});
