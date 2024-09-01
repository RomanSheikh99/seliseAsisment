import { useDispatch, useSelector } from "react-redux";
import { setMonth, setYear } from "../store/calendar";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function useSelect() {
  const yearOptions = [2019, 2020, 2021];
  const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { year: selectedYear, month: selectedMonth } = useSelector(
    (state) => state.calendar
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentMonth = dayjs().month() + 1;

  const setRouteUrl = useCallback(
    (year, month) => {
      const url = `/year/${year}/month/${month}`;
      navigate(url);
    },
    [navigate]
  );

  const onSetYear = (value) => {
    dispatch(setYear(value));
  };
  const onSetMonth = useCallback(
    (value) => {
      dispatch(setMonth(value));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!selectedMonth) onSetMonth(currentMonth);
    setRouteUrl(selectedYear, selectedMonth || currentMonth);
  }, [selectedYear, selectedMonth, currentMonth, setRouteUrl, onSetMonth]);

  return {
    yearOptions,
    monthOptions,
    selectedYear,
    selectedMonth,
    onSetYear,
    onSetMonth,
  };
}
