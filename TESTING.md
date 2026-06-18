Page loads with current month:
  - manual test: I loaded the page and confirmed  the calendar displayed the current month and year in the header

Calendar displays every day of the current month:
  - manual test: I loaded the page and confirmed every day of the current month was displayed as a calendar day slot.

Calendar uses Sunday as the first column:
  -manual test: I checked the weekday headings and confirmed the first column is Sunday and the last column is Saturday.

Calendar rows show full weeks:
  -manual test: I checked that each row of the calendar represents one week, with empty slots used before or after the month where needed.

Previous month button:
  -manual test: I clicked the Previous button and confirmed the calendar moved back by one month. I clicked it multiple times and confirmed it continued moving backwards correctly.

Next month button:
  -manual test: I clicked the Next button and confirmed the calendar moved forward by one month. I clicked it multiple times and confirmed it continued moving forwards correctly.

Previous and next buttons from one year to the other:
  -manual test: I checked that moving from January to December of the previous year worked correctly. I also checked that moving from December to January of the next year worked correctly.

Month and year jump form
  -manual test: I selected a month and year from the form, clicked Go, and confirmed the calendar updated to the selected month and year.

October 2024 calendar layout
  -manual test: I opened October 2024 and October 1st appears under Tuesday

October 2024 commemorative days
  -manual test: I opened October 2024 and Ada Lovelace Day appears on October 8th,World Lemur Day appears on October 25th

Check for commemorative days from JSON
  -manual test: I confirmed that commemorative days are displayed using data from days.json, rather than hard-coded dates in the calendar.

Unit tests
  -unit tests are in common.test.mjs., they check that getCommemorativeDate() correctly calculates:
    the second Tuesday of October 2024
    the last Friday of October 2024
   -hese tests cover the shared date calculation logic used by both the web calendar and the iCal generator.

iCal file generation
  -anual test: I ran:node generate-ical.mjs and confirmed that it created a file named days.ics

Shared date logic
  -manual test: I confirmed that both the web calendar and the iCal generator use the shared getCommemorativeDate() function from common.mjs.

Accessibility
  -manual test: I ran Lighthouse Snapshot mode and confirmed the accessibility score was 100.
  -I checked the starting page and also checked after navigating to other months.

Deployment
  -manual test: I confirmed the website is deployed online and that changes are automatically deployed when merged into the GitHub repository.

