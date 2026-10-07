Overview: The Jetlag Bug Challenge
Target Application: bugeater.web.app (Exploratory Testing Challenge: The Jetlag Bug)   
PNG

Module: Timezone Parsing & Task Scheduling Engine   
PNG
+ 3

Discovered Test Cases & Bugs: 5 Test Cases + 3 Bugs   
PNG
+ 4

Test Case 1: Empty Required Field Validation
User Perspective: As a user attempting to schedule a task without selecting a timezone or entering a scheduled time, I expect clear validation preventing the form submission so I know which required inputs are missing.

1. Title: [Validation] Enforce required validation when Timezone or Scheduled Time is empty

2. Environment:

OS: macOS / Windows / Linux / Mobile   
PNG

Browser/App: Google Chrome / Modern Web Browser   
PNG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG

Leave the Timezone or Scheduled Time field blank.   
PNG

Click the Schedule button.   
PNG

4. Actual Result:

Form evaluates input and displays: Result: Invalid Input.   
PNG

5. Expected Result:

The form prevents submission and requires both Timezone and Scheduled Time fields to be populated.   
PNG

6. Severity: Low (Validation baseline confirmation).

7. Priority: P3 - Low (Expected behavior verification).

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Test Case 2: Date-Time Format Validation (YYYY-MM-DD HH:mm)
User Perspective: As a user entering an improperly formatted timestamp into the scheduled time input, I expect the system to validate the date-time format and reject invalid string inputs gracefully.

1. Title: [Validation] Validate scheduled time string against standard format (YYYY-MM-DD HH:mm)

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG
+ 1

Enter a time value that does not match the required YYYY-MM-DD HH:mm pattern.   
JPG

Click the Schedule button.   
JPG

4. Actual Result:

The system flags the malformed entry with: Result: Invalid Input.   
JPG

5. Expected Result:

The application validates inputs strictly using the YYYY-MM-DD HH:mm date-time format.   
JPG

6. Severity: Low (Format validation baseline).

7. Priority: P3 - Low (Expected behavior verification).

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Test Case 3: Positive UTC Offset Baseline (UTC+3)
User Perspective: As a user in a positive UTC offset timezone (such as UTC+3), scheduling a task should correctly offset the scheduled time forward by 3 hours without errors.

1. Title: [Functional Baseline] Task scheduled correctly using positive offset (UTC+3)

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG
+ 1

Select UTC+3 from the Timezone dropdown.   
JPG
+ 1

Enter a valid timestamp in YYYY-MM-DD HH:mm format.   
JPG

Click the Schedule button.   
JPG

4. Actual Result:

Task is successfully scheduled using the +3-hour offset.   
JPG

5. Expected Result:

Scheduled time shifts +3 hours relative to UTC base time.   
JPG

6. Severity: Low (Functional baseline).

7. Priority: P3 - Low (Expected behavior verification).

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Test Case 4: European IANA Timezone Baseline (Europe/Paris)
User Perspective: As a user in Europe, selecting the Europe/Paris named timezone should map correctly to Central European Time offset rules and schedule the task without failure.

1. Title: [Functional Baseline] Task scheduled correctly using IANA timezone (Europe/Paris)

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG
+ 1

Select Europe/Paris from the Timezone dropdown.   
JPG
+ 1

Enter a valid timestamp in YYYY-MM-DD HH:mm format.   
JPG

Click the Schedule button.   
JPG

4. Actual Result:

Task is scheduled accurately using the Europe/Paris timezone rules.   
JPG

5. Expected Result:

System applies Paris regional timezone offset rules correctly.   
JPG

6. Severity: Low (Functional baseline).

7. Priority: P3 - Low (Expected behavior verification).

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Test Case 5: Timezone Selection Parsing
User Perspective: As a user choosing among available timezone options in the dropdown list, selecting a valid option should allow the form to process scheduling inputs.

1. Title: [Functional Baseline] Timezone selector properly registers user dropdown choices

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Open the Timezone dropdown selector.   
JPG

Choose any valid listed timezone (UTC, UTC+3, UTC-5, Europe/Paris, Asia/Tokyo).   
JPG

Enter valid scheduled time and submit.   
JPG

4. Actual Result:

Dropdown choice is correctly parsed and submitted to the backend engine.   
JPG

5. Expected Result:

System registers the selected timezone state for downstream calculations.   
JPG

6. Severity: Low (UI/Functional verification).

7. Priority: P3 - Low (Expected behavior verification).

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Bug 1: Incorrect Server Offset Applied to UTC Timezone
User Perspective: As a user scheduling a task using the standard UTC timezone, I expect my scheduled time to be processed as requested. However, the server unexpectedly shifts my schedule by 1 hour later, causing missed deadlines or delayed execution.

1. Title: [Timezone Engine Defect] UTC timezone selection causes task to be scheduled 1 hour later than requested   
JPG
+ 1

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG
+ 1

Browser/App: Google Chrome / Modern Web Browser   
JPG
+ 1

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG
+ 1

Select UTC from the Timezone dropdown list.   
JPG

Enter a valid scheduled time in YYYY-MM-DD HH:mm format (e.g., 2026-10-07 18:00).   
PNG
+ 1

Click the Schedule button.   
PNG
+ 1

4. Actual Result:

The server processes the request with an incorrect offset, resulting in: Scheduled 1 hour late — UTC offset applied incorrectly.   
JPG
+ 1

5. Expected Result:

Tasks scheduled under UTC should process with a 0-hour offset and match the user's requested time exactly.

6. Severity: High (Directly corrupts scheduling accuracy for default/UTC users).   
JPG
+ 1

7. Priority: P1 - High (Requires immediate fix in backend timezone parsing logic).   
JPG
+ 1

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Bug 2: Server Inverts Offset Sign for UTC-5 Timezone
User Perspective: As a user in a negative offset timezone (such as UTC-5 / Eastern Time), scheduling a task causes the server to treat my timezone as UTC+5 instead. This shifts my schedule by 10 hours into the future, rendering scheduled events completely inaccurate.

1. Title: [Timezone Engine Defect] UTC-5 offset sign is inverted by backend server and processed as UTC+5   
JPG

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG
+ 1

Select UTC-5 from the Timezone dropdown list.   
JPG
+ 1

Enter a valid scheduled time in YYYY-MM-DD HH:mm format.   
PNG
+ 1

Click the Schedule button.   
PNG
+ 1

4. Actual Result:

The server inverts the negative offset math, evaluating the task as if it were in UTC+5 rather than UTC-5.   
JPG

5. Expected Result:

The server should subtract 5 hours relative to UTC (UTC-5), maintaining correct local time alignment.

6. Severity: High (Inverts negative time zone offsets, causing multi-hour schedule drift).   
JPG

7. Priority: P1 - High (Backend arithmetic bug in UTC offset parsing).   
JPG

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Bug 3: Asia/Tokyo Timezone Processed with Incorrect UTC Offset
User Perspective: As a user selecting the Asia/Tokyo timezone (JST), I expect my tasks to be scheduled using Japan Standard Time (UTC+9). However, the system incorrectly processes Tokyo as UTC+8, causing all tasks to be scheduled 1 hour earlier than intended.

1. Title: [Timezone Engine Defect] Asia/Tokyo timezone mapped to UTC+8 instead of correct UTC+9 offset   
JPG

2. Environment:

OS: macOS / Windows / Linux / Mobile   
JPG

Browser/App: Google Chrome / Modern Web Browser   
JPG

Build/URL: bugeater.web.app/exploratory/jetlag-bug

   
PNG
+ 1

3. Steps to Reproduce:

Navigate to "The Jetlag Bug" challenge on BugEater.   
PNG
+ 1

Select Asia/Tokyo from the Timezone dropdown list.   
JPG
+ 1

Enter a valid scheduled time in YYYY-MM-DD HH:mm format.   
PNG
+ 1

Click the Schedule button.   
PNG
+ 1

4. Actual Result:

The server responds with: Result: Scheduled with wrong offset — Asia/Tokyo interpreted as UTC+8 instead of UTC+9.   
JPG

5. Expected Result:

Asia/Tokyo must map to UTC+9 in the IANA/backend timezone database.

6. Severity: Medium (Affects regional user groups relying on named IANA timezones).   
JPG

7. Priority: P2 - Normal (Requires updating timezone mapping tables/libraries on the backend).   
JPG

8. Evidence: Refer to Consolidated Evidence Section at end of document.

Evidence & Artifacts
Video Recording (All 5 Test Cases & 3 Bugs): https://www.loom.com/share/fc150ecbdad64543b4bb63be2658af8a