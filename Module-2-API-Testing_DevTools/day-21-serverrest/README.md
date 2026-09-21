Why We Updated the README.md File
The README.md file serves as the main documentation dashboard for your entire repository and daily progress tracking. Updating the README.md for Day 21 was necessary for a few key reasons:

Progress Tracking & Dashboard Status: It updates your Module 2 completion log, changing Day 21's status from pending/in-progress to completed ([x] Day 21 - ServeRest API Testing).

Directory Tree Documentation: It reflects the newly added project folder (Module-2-API-Testing_DevTools/day-21-serverest/) and its corresponding subfolders (Collections/, Environment/, Run Collection/, Screenshots/).

Execution Instructions: It provides clear instructions on how to execute the newly created Postman collection and environment locally using Newman or via GitHub Actions.

Detailed Summary: What We Accomplished on Day 21
Here is a comprehensive breakdown of everything built, tested, and automated during Day 21:

1. API Target & Scope
Target API: ServeRest ([https://serverest.dev](https://serverest.dev)), a RESTful E-commerce testing API.

Core Endpoints Tested: /login (Authentication) and /usuarios (User Management CRUD operations).

Localization & Assertions: Mapped all Portuguese API responses (Login realizado com sucesso, Cadastro realizado com sucesso, Registro excluído com sucesso, Usuário não encontrado) to English validations and logging assertions.

2. Environment Configuration
Created Day 21 - ServeRest Environment.postman_environment.json containing reusable environment variables:

baseUrl: [https://serverest.dev](https://serverest.dev)

email: Seed/login user email.

password: Seed/login user password.

authToken: Dynamically captured Bearer token from /login.

userId / johnWickId: Dynamically populated during POST creation for downstream GET, PUT, and DELETE requests.

3. Postman Collection & Test Scenarios (day-21-serverest.postman_collection.json)
Constructed a complete suite of 15 requests covering both Happy Path and Negative Edge Cases across 5 functional areas:

Authentication (/login):

Happy Path: Executed POST /login, verified 200 OK, verified response message, and automatically extracted and stored the Bearer authToken.

Negative Path: Executed invalid credentials test, asserting 401 Unauthorized.

User Catalog & Registration (/usuarios):

List Users: Executed GET /usuarios with query filters (_id, nome, email, administrador) and validated JSON schema response.

Create User ("John Wick"): Executed POST /usuarios with dynamic email generation (john.wick.{{$randomInt}}@qa.com), verified 201 Created, and saved userId.

Duplicate Email Constraint: Attempted registering with an existing email, asserting 400 Bad Request.

Fetching & Id Validation (GET /usuarios/{_id}):

Valid User: Executed GET /usuarios/{{userId}}, asserting 200 OK and verifying "John Wick" payload data.

Negative / Validation Test: Executed GET with a non-existent 16-character ID (nonexistent1234a), verifying 400 Bad Request or 404 Not Found response handling.

Server Error Simulation:

Executed a deliberate test request configured to test server failure and edge-case response handling (500 Internal Server Error).

Update Operations (PUT /usuarios/{_id}):

Existing Record: Updated "John Wick" details, asserting 200 OK.

Upsert Creation: Sent PUT with a non-existent ID, asserting 201 Created for newly generated user.

Duplicate Email: Tested PUT with an already taken email, asserting 400 Bad Request.

Cleanup & Wind Down (DELETE /usuarios/{_id}):

Executed deletion of "John Wick" and ghost test users, verifying 200 OK and ensuring no residual cart blocking.

Final GET /usuarios call to verify the test environment is completely clean.

4. CI/CD & Pipeline Integration
Directory Normalization: Fixed directory structure from github-workflows to the required .github/workflows/postman.yml path.

Dynamic Test Runner: Configured the root GitHub Actions workflow using Newman to automatically discover and run all Postman collections and matching environment files across any day directory upon git push.