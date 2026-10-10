User Perspective: As a quality assurance engineer executing API tests via Postman against the AgileTravel backend, hitting core endpoints like authentication, flight selection, or passenger booking should return valid functional responses (such as 200 OK or 302 Redirect). When the server instead throws a 502 Bad Gateway error across critical routes, it indicates a gateway or upstream server failure crashing the API architecture.

Bug Report: AgileTravel API Endpoints Return 502 Bad Gateway Errors
1. Title: [API / Gateway Defect] AgileTravel backend endpoints return 502 Bad Gateway HTTP status responses during API test execution

2. Environment:

OS: macOS / Windows / Linux

Browser/App: Postman API Client / Modern REST Client   
JSON

Device: Desktop / API Server Environment

Build/URL: AgileTravel API (Module-3_Day-40_AgileTravel_API_Tests)   
JSON

3. Steps to Reproduce:

Import the Postman collection Module-3_Day-40_AgileTravel_API_Tests.   
JSON

Configure environment variables including {{baseUrl}}, {{username}}, and {{password}}.

Run requests sequentially: POST /login, GET /flights/select_date, and POST /flights/passenger.   
JSON
+ 2

Inspect the response status codes returned by the upstream server.

4. Actual Result:

The server responds with 502 Bad Gateway status codes, failing to route requests properly through the reverse proxy or upstream application server.

5. Expected Result:

API endpoints should successfully process incoming payloads and return expected success codes (200 OK or 302 Found) as defined in the test scripts.   
JSON

6. Severity: Critical (Completely blocks API testing and server communication).

7. Priority: P1 - Urgent (Requires investigating reverse proxy configurations, upstream server uptime, and application gateway logs).

8. Evidence: Postman collection request/response definitions And Enviroment