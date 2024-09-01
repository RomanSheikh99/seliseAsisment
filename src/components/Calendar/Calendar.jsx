import React, { useEffect } from "react";
import { generateDate } from "../../utils/genarateDays";
import { Grid } from "@chakra-ui/react";
import Day from "./Day";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../../store/appointment";

export default function Calendar() {
  const { year, month } = useSelector((state) => state.calendar);
  const daysOfMonth = generateDate(month - 1, year);

  const dispatch = useDispatch();

  useEffect(() => {
    const appointments = localStorage.getItem("appointments");
    if (appointments) {
      const parsedAppointments = JSON.parse(appointments);
      dispatch(setAppointments(parsedAppointments));
    }
  }, [dispatch]);

  return (
    <Grid p={"20px"} templateColumns="repeat(6, 1fr)" gap={"10px"}>
      {daysOfMonth.map((day, index) => {
        return <Day key={index} day={day.date} />;
      })}
    </Grid>
  );
}
