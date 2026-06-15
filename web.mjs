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

//  Populate the Month Dropdown
monthNames.forEach((month, index) => {
  const option = document.createElement("option");
  option.value = index; // (0-11)
  option.textContent = month; // (January-December)
  monthSelect.appendChild(option);
});

function updateCurrentMonthYear() {
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Update the text at the top
  currentMonthYear.textContent = `${monthNames[monthIndex]} ${year}`;

  // Update the dropdown and input box to match
  monthSelect.value = monthIndex;
  yearInput.value = year;
}

function renderCalendar() {
  calendar.innerHTML = "";
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  // Find out how many days are in this month
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Find out what day of the week the 1st falls on (0-6)
  const firstDayOfWeek = new Date(year, monthIndex, 1).getDay();

  // Add the empty slots BEFORE the 1st of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptySlot = document.createElement("div");
    emptySlot.classList.add("day-slot");
    emptySlot.classList.add("empty-slot")
    calendar.appendChild(emptySlot);
  }

  //  Add the actual days
  for (let day = 1; day <= daysInMonth; day++) {
    const daySlot = document.createElement("div");
    daySlot.classList.add("day-slot");
    daySlot.textContent = day;
    calendar.appendChild(daySlot);
  }
}

// 3. The Button Click Events
previousButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1); // Go back 1 month
  updateCurrentMonthYear(); // Update the text
  renderCalendar(); // Redraw the calendar
});

nextButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1); // Go forward 1 month
  updateCurrentMonthYear();
  renderCalendar();
});

// 4. The "Go" Form Submit Event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values the user typed in
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearInput.value);

  // Change the exact year and month of our currentDate object
  currentDate.setFullYear(selectedYear, selectedMonth, 1);

  updateCurrentMonthYear();
  renderCalendar();
});

updateCurrentMonthYear();
renderCalendar();
