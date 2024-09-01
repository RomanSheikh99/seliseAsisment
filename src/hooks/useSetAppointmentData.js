import { useDispatch } from "react-redux";
import { setAppointments } from "../store/appointment";

export default function useSetAppointmentData() {
  const dispatch = useDispatch();

  const setData = (data) => {
    const appoinment = { ...data, id: Math.random() * 100 + Date.now() + " " };

    const appointments = localStorage.getItem("appointments");
    if (appointments) {
      const parsedAppointments = JSON.parse(appointments);
      localStorage.setItem(
        "appointments",
        JSON.stringify([...parsedAppointments, appoinment])
      );
      dispatch(setAppointments([...parsedAppointments, appoinment]));
    } else {
      localStorage.setItem("appointments", JSON.stringify([appoinment]));
      dispatch(setAppointments([appoinment]));
    }
  };

  return { setData };
}
