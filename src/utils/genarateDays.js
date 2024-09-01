import dayjs from "dayjs";

export const generateDate = (month, year) => {
  const firstDateOfMonth = dayjs().month(month).year(year).startOf("month");
  const lastDateOfMonth = dayjs().month(month).year(year).endOf("month");

  const arrayOfDates = [];

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDates.push({
      date: dayjs().month(month).year(year).date(i).startOf("day"),
    });
  }

  return arrayOfDates;
};
