import daysData from "./days.json" with { type: "json" };

const calendar = document.querySelector("#calendar");
const currentMonthYear = document.querySelector("#current-month-year");
const previousButton = document.querySelector("#previous-month");
const nextButton = document.querySelector("#next-month");
const monthSelect = document.querySelector("#month-select");
const yearInput = document.querySelector("#year-input");
const form = document.querySelector("#month-form");

let currentDate = new Date();

const monthNames = [
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
