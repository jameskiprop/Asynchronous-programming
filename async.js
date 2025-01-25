// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}

// Task 02 & 03: Awaiting a Call and Handling Errors
async function awaitCall() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Task 04: Chaining Async/Await
async function firstFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("First function complete");
}

async function secondFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Second function complete");
}

async function thirdFunction() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Third function complete");
}

async function chainedAsyncFunctions() {
  await firstFunction();
  await secondFunction();
  await thirdFunction();
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
  try {
    const [response1, response2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/todos/2").then((res) =>
        res.json()
      ),
    ]);
    console.log("Combined Results:", response1, response2);
  } catch (error) {
    console.error("Error with concurrent requests:", error.message);
  }
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
  try {
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    console.log("All responses:", responses);
  } catch (error) {
    console.error("Error with parallel calls:", error.message);
  }
}
