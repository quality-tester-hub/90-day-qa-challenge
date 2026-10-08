# Day 38 — Ministry of Testing Exploratory Testing

**Target:** [Ministry of Testing](https://www.ministryoftesting.com/)  
**Focus:** Network traffic, especially Fetch/XHR request payloads and response status codes/bodies  
**Session date:** October 8, 2026

## Outcome

The public homepage's observed Fetch/XHR traffic did not provide evidence of a product API defect. The application search page was also checked with the query `testing`; it returned HTTP 200 and displayed “Must be logged in to use global search.” That is consistent with an access gate, and no requirement was available to establish that it is defective.

The associated report preserves the request/response evidence and records why this session did **not** confirm a bug. It does not label expected access control or unrelated third-party telemetry as a Ministry of Testing defect. An authenticated session or a reproducible product API failure is needed to file a substantiated defect with a JSON API response.

## Contents

- [Network finding and evidence](./Defects_&_Bugreports/01-API-Log-Defect.md)

## Reproducing the observation

1. Open the public homepage and inspect Fetch/XHR traffic in the browser Network panel.
2. Submit the search query `testing`.
3. Observe the search response and the page message about needing to be logged in.

