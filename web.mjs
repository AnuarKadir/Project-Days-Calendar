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

function updateCurrentMonthYear(){
    const monthIndex=currentDate.getMonth()
    const year=currentDate.getFullYear()
    currentMonthYear.textContent=`${monthNames[monthIndex]} ${year}`
}

updateCurrentMonthYear()