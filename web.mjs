import daysData from "./days.json" with { type: "json" };
import { monthNames } from "./common.mjs";

const calendar = document.querySelector("#calendar");
const currentMonthYear = document.querySelector("#current-month-year");
const previousButton = document.querySelector("#previous-month");
const nextButton = document.querySelector("#next-month");
const monthSelect = document.querySelector("#month-select");
const yearInput = document.querySelector("#year-input");
const form = document.querySelector("#month-form");

let currentDate = new Date();

function updateCurrentMonthYear() {
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();
  currentMonthYear.textContent = `${monthNames[monthIndex]} ${year}`;
}

updateCurrentMonthYear();

function renderCalendar() {
  calendar.innerHTML = "";
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const daySlot = document.createElement("div");
    daySlot.textContent = day;
    calendar.appendChild(daySlot);
  }
}
renderCalendar();
