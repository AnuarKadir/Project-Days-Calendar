# Days Calendar

Days Calendar is a web app that displays commemorative days which happen every year but not always on the same date.

For example, Ada Lovelace Day happens on the second Tuesday of October, so the exact date changes depending on the year.

The app uses the data from `days.json` to calculate and display these days dynamically.

## Features

Displays the current month as a calendar
Shows each day of the month in a calendar grid
Uses Sunday as the first column
Allows users to move to the previous or next month
Allows users to jump to a selected month and year
Displays commemorative days from `days.json`
Calculates commemorative days dynamically, without hard-coding specific dates
Generates a `days.ics` file for importing the commemorative days into Google Calendar
Uses shared date calculation logic for both the web calendar and the iCal generator

## Project requirements covered

This project includes the requirements for a team of 2:

Web calendar
Dynamic commemorative day calculation
Unit tests
Node script for generating `days.ics`
Shared date logic between the web calendar and iCal generator

The group-of-3 description-fetching feature is not included because this project was completed by a team of 2.

## Files

`index.html` - main HTML page
`style.css` - page styling
`web.mjs` - browser JavaScript for rendering the calendar
`common.mjs` - shared date logic and shared data
`days.json` - commemorative day data
`generate-ical.mjs` - Node script for generating `days.ics`
`common.test.mjs` - unit tests
`TESTING.md` - manual and automated testing notes
`README.md` - project documentation

## Run the website locally

Because this project uses JavaScript modules, the page should be served over HTTP.

Install dependencies if needed:
npm install

Start a local server:
npx http-server

Then open the local URL shown in the terminal.

## Run unit tests
node --test common.test.mjs

The tests check the shared `getCommemorativeDate()` function.

## Generate the iCal file

Run:
node generate-ical.mjs

This creates:
days.ics

The generated file can be imported into Google Calendar.

## Deployment

Deployed website:
https://days-calendaranuarndalex.netlify.app/


GitHub repository:
https://github.com/AnuarKadir/Project-Days-Calendar

## Accessibility

The website was checked with Lighthouse Snapshot mode and should score 100 for accessibility.
