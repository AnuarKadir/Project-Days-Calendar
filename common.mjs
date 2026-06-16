export const monthNumbers = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export const dayNumbers = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getCommemorativeDate(year, monthName, dayName, occurrence) {
  const month = monthNumbers[monthName];
  const targetDay = dayNumbers[dayName];

  if (month === undefined) {
    throw new Error(`Invalid month name: ${monthName}`);
  }

  if (targetDay === undefined) {
    throw new Error(`Invalid day name: ${dayName}`);
  }

  if (occurrence === "last") {
    return getLastWeekdayOfMonth(year, month, targetDay);
  }

  return getNthWeekdayOfMonth(year, month, targetDay, occurrence);
}

function getNthWeekdayOfMonth(year, month, targetDay, occurrence) {
  const occurrenceNumbers = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
  };

  const occurrenceNumber = occurrenceNumbers[occurrence];

  if (occurrenceNumber === undefined) {
    throw new Error(`Invalid occurrence: ${occurrence}`);
  }

  const firstDayOfMonth = new Date(year, month, 1);

  while (firstDayOfMonth.getDay() !== targetDay) {
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
  }

  firstDayOfMonth.setDate(
    firstDayOfMonth.getDate() + (occurrenceNumber - 1) * 7,
  );

  return firstDayOfMonth;
}

function getLastWeekdayOfMonth(year, month, targetDay) {
  const lastDayOfMonth = new Date(year, month + 1, 0);

  while (lastDayOfMonth.getDay() !== targetDay) {
    lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);
  }

  return lastDayOfMonth;
}
