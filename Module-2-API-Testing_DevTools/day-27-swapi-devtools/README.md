Day 27 — SWAPI DevTools

Browser Console Log & HTTP Archive Analysis

This day focuses on using browser DevTools to inspect JavaScript execution, console messages, API requests, network traffic, and HTTP Archive (HAR) data while working with the Star Wars API (SWAPI).

1. Browser Console Log (swapi.dev-1790504306524.log)

This file records interactive session logs, JavaScript execution, API requests, and browser console warnings.

Extension & Content Script Warnings

Repeated messages: contentScript.js:201 This page is not reloaded.

Network Blocking Errors (net::ERR_BLOCKED_BY_CLIENT)

Failed GET requests to Twitter syndication endpoints: https://syndication.twitter.com/i/jot/embeds...

These requests were blocked by ad blockers or privacy extensions blocking embedded Twitter widgets.

Failed API Call (404 Not Found)

An interactive call made via jquery-2.1.0.min.js:
GET https://swapi.dev/api/vader

Result: 404 Not Found.

Asynchronous Message Channel Errors

Multiple uncaught errors were recorded:

Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received

These occurred from embedded frames and scripts such as:

github-btn.html

platform.twitter.com

Other embedded scripts

JavaScript Fetch Requests & Executed Results

1. Luke Skywalker Query

fetch('https://swapi.dev/api/people/1/')
  .then(res => res.json())
  .then(data => console.log(data));

Result: The response returned Luke Skywalker's data, including:

name: 'Luke Skywalker'

height: '172'

mass: '77'

hair_color: 'blond'

skin_color: 'fair'

2. Tatooine Planet Query (getPlanet(1))

An async function was executed and the result was logged using console.table().

Output Data:

name: 'Tatooine'

rotation_period: '23'

orbital_period: '304'

diameter: '10465'

climate: 'arid'

gravity: '1 standard'

terrain: 'desert'

population: '200000'

The response also contained links to associated:

residents such as people/1/, people/2/, etc.

films such as films/1/, films/3/, etc.

CLI Command Copy-Paste Attempts

curl commands were attempted directly inside the browser JavaScript console.

This produced:
Uncaught SyntaxError: Unexpected identifier 'url'

The error occurred because curl is a shell/CLI command and its Bash syntax is not valid JavaScript syntax in the browser console.

2. HTTP Archive Log (chromewebdata.har)

This .har file records network traffic, page navigation, static assets, and header/response details.

Page Navigation Timeline (pages)

Multiple page views were recorded while navigating between:

https://swapi.dev/

https://swapi.dev/about

https://swapi.dev/documentation

Outbound links were also accessed to third-party GitHub repositories such as:

SharpTrooper

xyz-angular-swapi

swapi-elixir

StarWarsAPI

Network Entries & Responses (entries)

Main Page Request

GET https://swapi.dev/

Response: 304 Not Modified

The response was cached through Amazon CloudFront / S3.

HTML Content Structure

The captured HTML included the full SWAPI landing-page structure, including:

SWAPI title and description: "The Star Wars API"

Interactive API runner: https://swapi.dev/api/

Example endpoints:

people/1/

planets/3/

starships/9/

Pre-populated JSON example for Luke Skywalker (people/1/)

FAQ sections:

"What is this?"

"How can I use it?"

Details regarding the transition from the legacy swapi.co domain

Static Resources Loaded

The HAR also captured static resources including:

Bootstrap CSS:

bootstrap.min.css

bootstrap.css

Custom stylesheet:

custom.css

JavaScript dependencies:

jquery-2.1.0.min.js

bootstrap.min.js

Google Tag Manager gtag.js

Twitter widgets widgets.js

GitHub follow widget: ghbtns.com/github-btn.html

favicon.ico

3. Evidence Collected

The DevTools session produced the following evidence artifacts:

Artifact

Evidence

Browser Console Log

JavaScript execution, API requests, warnings, blocked requests, and errors

HTTP Archive (.har)

Network requests, navigation timeline, responses, headers, and static resources

Performance Evaluation

Performance-related DevTools observations

XHR Breakpoint Screenshot

Evidence of XHR breakpoint/pause behavior

Storage Screenshot

Browser storage inspection evidence

4. Project Structure

day-27-swapi-devtools/
├── console-logs/
│   └── swapi.dev-1790504306524.log
├── network-logs/
│   └── chromewebdata.har
├── Performance logs/
│   └── Performance Evaluation.gz
├── scripts/
│   └── day-27/
│       └── screenshots/
│           └── day-27:screenshots:xhr-breakpoint-pause...
├── storage/
│   └── Storage.png
└── README.md

5. DevTools Coverage

The collected evidence covers:

Browser Console inspection

JavaScript execution through the Console

API request execution and response inspection

HTTP status-code analysis

Network request blocking

JavaScript and asynchronous messaging errors

XHR/API request investigation

HAR network capture

Page navigation analysis

Static resource inspection

Storage inspection

XHR breakpoint evidence

Performance evaluation evidence

6. Outcome

Day 27 documents a practical DevTools investigation of SWAPI using browser Console and Network tooling, supported by captured logs, HAR data, screenshots, storage evidence, and performance evidence.

The work demonstrates how browser DevTools can be used to distinguish between:

Application/API errors

Browser or extension-related blocking

JavaScript console errors

Network responses

Cached responses

Static resource loading

Client-side execution issues