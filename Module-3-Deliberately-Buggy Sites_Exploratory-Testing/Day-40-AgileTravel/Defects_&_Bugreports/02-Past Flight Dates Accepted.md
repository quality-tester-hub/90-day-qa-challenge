User Perspective: As a traveler booking a flight, I should only be able to select dates that are still in the future. If the booking form accepts an itinerary from years ago, I can proceed with a booking that cannot be fulfilled.

Bug Report: Agile Travel Accepts Past Flight Dates

1. Title: [Flight Search / Date Validation Defect] Past departure and return dates are accepted and proceed to passenger details

2. Environment:

OS: macOS

Browser/App: Chromium browser

Device: Desktop

Build/URL: https://travel.agileway.net/flights/start

3. Steps to Reproduce:

1. Sign in to Agile Travel and open the Select Flight page.
2. Select Sydney as the origin and New York as the destination.
3. Select January 15, 2016 as the departure date and February 16, 2016 as the return date.
4. Click Continue.
5. Inspect the itinerary shown on the Passenger Details page.

4. Actual Result:

The application accepts both dates in the past and advances to Passenger Details, displaying a return itinerary for January 15 and February 16, 2016.

5. Expected Result:

Departure and return dates in the past should not be offered as selectable options or accepted by the server. The application should require a valid future itinerary and show a clear validation message if an invalid date is submitted.

6. Severity: Medium (Allows users to proceed with an impossible itinerary, but the defect occurs before passenger or payment submission).

7. Priority: P2 - Normal (Date options and server-side validation should be corrected to prevent invalid itineraries).

8. Evidence: [Screenshot of the Passenger Details page showing the accepted 2016 itinerary](../Evidence/02-Past-Flight-Dates-Accepted.png).
