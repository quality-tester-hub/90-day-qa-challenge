const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://apichallenges.eviltester.com';
const LOG_DIR = path.join(__dirname, 'Logs');

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function writeLog(filename, data) {
  const filePath = path.join(LOG_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`[Audit Trail] Saved: ${filePath}`);
}

async function runSimulation() {
  console.log('=== Starting Local API Challenge Simulation ===\n');

  // Step 1: Start Challenger Session
  console.log('1. Initiating Session (POST /challenger)...');
  const sessionRes = await fetch(`${BASE_URL}/challenger`, { method: 'POST' });
  const challengerToken = sessionRes.headers.get('x-challenger');

  const step1Log = {
    request: { method: 'POST', url: `${BASE_URL}/challenger` },
    response: {
      status: sessionRes.status,
      headers: { 'x-challenger': challengerToken }
    }
  };
  writeLog('01_POST_Start_Challenger_Session.log', step1Log);

  if (!challengerToken) throw new Error('Failed to acquire token!');

  // Step 2: Get Todos
  console.log('2. Fetching Todos (GET /todos)...');
  const getRes = await fetch(`${BASE_URL}/todos`, {
    method: 'GET',
    headers: { 'X-Challenger': challengerToken }
  });
  const getBody = await getRes.json();

  const step2Log = {
    request: { method: 'GET', url: `${BASE_URL}/todos`, headers: { 'X-Challenger': challengerToken } },
    response: { status: getRes.status, body: getBody }
  };
  writeLog('02_GET_Todos.log', step2Log);

  // Step 3: Create Todo
  console.log('3. Creating Todo Object (POST /todos)...');
  const newTodo = {
    title: "Complete Day 17 API Challenge",
    doneStatus: false,
    description: "Executing POST request to create a new todo object"
  };

  const postRes = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'X-Challenger': challengerToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  });
  const postBody = await postRes.json();

  const step3Log = {
    request: { method: 'POST', url: `${BASE_URL}/todos`, body: newTodo },
    response: { status: postRes.status, body: postBody }
  };
  writeLog('03_POST_Create_Todo.log', step3Log);

  console.log('\n=== Simulation Execution Complete! ===');
}

runSimulation().catch(console.error);