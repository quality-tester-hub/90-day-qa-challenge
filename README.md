# 90-day-qa-challenge
QA/QE 90-Days Portfolio | 7 Modules: UI Automation, API/DevTools, Buggy Sites, Security, E2E Workflows, Performance &amp; Advanced Target Envs
Day 2 Update
To wrap up Day 2, I completely finished automating all 6 core modules of the DemoQA application (Elements, Forms, Alerts & Windows, Widgets, Interactions, and Book Store Application). Even though today I couldn't find a lot of bugs, I still learned a valuable lesson.

What did I learn?
Today I learned how to cut out dynamic ad network frames and completely get rid of layout-shifting ad elements using custom beforeEach fixtures (combining page.route() interception and page.evaluate() DOM manipulation) to ensure bulletproof, flake-free Playwright test execution.