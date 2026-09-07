# Day 07: Tricentis Obstacle Course - Advanced Challenges

## Overview
This day focuses on testing complex obstacles from the Tricentis Obstacle Course at https://obstaclecourse.tricentis.com/Obstacles

## Obstacles Tested

### Obstacle #45618 - "Tough Cookie" (Hard Random Text String)
**Difficulty:** Hard  
**Objective:** Extract 3 large numbers from a random text string and enter them into the correct input fields.

#### Challenge Description:
- A random text string is displayed that contains 3 large numbers mixed with other text
- The user must identify and extract these 3 numbers
- Enter each number into its corresponding textbox (#1, #2, #3)
- Submit the solution to complete the obstacle

#### Test Coverage:
1. **tough-cookie.spec.ts**
   - Extraction of numbers from random text
   - Sorting numbers to find the 3 largest
   - Form submission with extracted values
   - Navigation between obstacles
   - Form validation
   - Retry mechanism

## Running the Tests

### Run all tests for day 7:
```bash
npm test -- day-07-tricentis-Obstacale/Tests/tough-cookie.spec.ts
```

### Run specific test:
```bash
npm test -- day-07-tricentis-Obstacale/Tests/tough-cookie.spec.ts -g "Should extract three numbers"
```

### Run with headed browser (see the automation):
```bash
npx playwright test day-07-tricentis-Obstacale/Tests/tough-cookie.spec.ts --headed
```

### Run with debug mode:
```bash
npx playwright test day-07-tricentis-Obstacale/Tests/tough-cookie.spec.ts --debug
```

## Test Details

### Test 1: Extract and Submit Numbers
Validates the complete workflow of:
- Revealing the hidden random text
- Extracting all numbers using regex
- Sorting to find the 3 largest numbers
- Filling in the input fields
- Submitting the form

### Test 2: Navigate to Next Obstacle
Tests the ability to progress through the obstacle course by:
- Solving the current obstacle
- Verifying navigation to the next challenge

### Test 3: Input Field Validation
Checks that the three input fields properly accept and store numeric values.

### Test 4: Retry Functionality
Verifies that users can retry the current obstacle when they make a mistake.

### Test 5: Skip to Next
Ensures there's an option to skip the current obstacle and move to the next one.

## Key Testing Techniques

- **Regex pattern matching** to extract numbers from text
- **Array sorting** to identify the 3 largest numbers
- **Input field manipulation** and validation
- **Form submission** handling
- **Navigation** through the obstacle course

## Notes

- The random text string changes on each attempt, so the solution must be dynamic
- The algorithm extracts ALL numbers and then sorts them to find the 3 largest
- The test includes error handling and retry mechanisms




### Obstacle #33678 - "Wait a moment" (Async State & Timers)
**Difficulty:** Easy / Intermediate  
**Objective:** Trigger an asynchronous calculation process, wait for dynamic timing delays, and submit the form once the target button becomes enabled.

#### Challenge Description:
- Click the "CALCULATE" button to initiate a backend/timer process
- Monitor the async state update while the "SEND" button remains disabled
- Wait for the state transition to complete and the "SEND" button to become active
- Click "SEND" to successfully complete the obstacle

#### Test Coverage:
1. **wait-a-moment.spec.ts**
   - Verification of initial page structure and headings
   - Assertion of initial disabled state on action elements
   - Execution of asynchronous calculation triggers
   - Auto-waiting and assertions for enabled button state transitions
   - Form submission and completion verification