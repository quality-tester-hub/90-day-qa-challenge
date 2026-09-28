User Perspective: As an API test engineer validating backend endpoints in Postman, encountering a persistent 400 Bad Request due to schema or payload malformation blocks API automation and integration testing. Since backend database adjustments resolved server-side crashes (500) and missing endpoints (404), an unresolvable 400 error indicates strict or broken request validation on the server that requires developer access to fix.

Bug Report: Persistent 400 Bad Request Due to Server-Side Payload Malformation Handling
1. Title: [API / Endpoint Defect] Endpoint returns 400 Bad Request due to strict schema validation/payload malformation on Postman requests

2. Environment:

OS: macOS / Windows / Linux / Android

Browser/App: Postman Client / API Test Runner

Device: Desktop / Mobile

Build/URL: Target API Endpoint (/api/v1/...)

3. Steps to Reproduce:

Open Postman and select the target request endpoint collection.

Configure request headers (e.g., Content-Type: application/json, Authorization).

Provide the required JSON request body payload.

Send the API request and observe the status code and response payload.

4. Actual Result:

The API server returns an HTTP 400 Bad Request error citing payload malformation or parameter parsing failure, which cannot be resolved from the client/tester end without backend schema/code modifications.

5. Expected Result:

The API endpoint should successfully parse valid request bodies, or return structured validation error messages indicating the exact missing/malformed parameter fields rather than rejecting valid requests with a generic 400 error.

6. Severity: High (Blocks API integration pipelines and prevents test completion for core endpoints).

7. Priority: P1 - Urgent (Requires immediate developer intervention to update schema validation rules or endpoint parsing logic).