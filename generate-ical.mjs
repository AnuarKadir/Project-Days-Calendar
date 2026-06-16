// Run this with: node generate-ical.mjs
// Generates a file named days.ics with all-day events for 2020–2030

import fs from "node:fs";
import daysData from "./days.json" with { type: "json" };
import { getCommemorativeDate } from "./common.mjs";

// Convert a JavaScript Date object into the iCal date format: YYYYMMDD.
function formatDateForICal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}

function generateICS() {
  // Start the iCal file with the required calendar header.
  let icsContent =
    "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "PRODID:-//Commemorative Days Calendar//EN\n";

  // Loop through each commemoration from days.json.
  for (const commemoration of daysData) {
    for (let year = 2020; year <= 2030; year++) {
      const commemorationDate = getCommemorativeDate(
        year,
        commemoration.monthName,
        commemoration.dayName,
        commemoration.occurrence,
      );

      const formattedDate = formatDateForICal(commemorationDate);

      icsContent += "BEGIN:VEVENT\n";
      icsContent += `SUMMARY:${commemoration.name}\n`;
      icsContent += `DTSTART;VALUE=DATE:${formattedDate}\n`;
      icsContent += "END:VEVENT\n";
    }
  }

  icsContent += "END:VCALENDAR\n";

  fs.writeFileSync("days.ics", icsContent);
}

generateICS();
