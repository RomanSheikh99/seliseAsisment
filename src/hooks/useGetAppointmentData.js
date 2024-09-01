import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useGetAppointmentData(date) {
  const [sortedAppointments, setSortedAppointments] = useState([]);

  const appointments = useSelector((state) => state.appointment.appointments);

  useEffect(() => {
    const filteredAppointments = appointments.filter(
      (appoinment) => appoinment.date === date
    );
    setSortedAppointments(
      filteredAppointments.sort((a, b) => a.time.localeCompare(b.time))
    );
  }, [date, appointments]);

  return {
    sortedAppointments,
  };
}
