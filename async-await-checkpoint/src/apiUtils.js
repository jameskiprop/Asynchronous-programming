// Task 01: Iterating with Async/Await
export const iterateWithAsyncAwait = async (values, setLogs) => {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // implementing the 1 second delay
    setLogs((prevLogs) => [...prevLogs, `Value: ${value}`]);
  }
};

// Task 02 & 03: Awaiting a Call & Handling Errors
export const awaitCall = async (setLogs) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    setLogs((prevLogs) => [
      ...prevLogs,
      `Fetched Data: ${JSON.stringify(data)}`,
    ]);
  } catch (error) {
    setLogs((prevLogs) => [...prevLogs, `Error: ${error.message}`]);
  }
};

// Task 04: Chaining Async/Await
export const chainedAsyncFunctions = async (setLogs) => {
  const asyncTask = async (message) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLogs((prevLogs) => [...prevLogs, message]);
  };

  await asyncTask("Task 1 complete");
  await asyncTask("Task 2 complete");
  await asyncTask("Task 3 complete");
};

// Task 05: Awaiting Concurrent Requests
export const concurrentRequests = async (setLogs) => {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/2"),
      fetch("https://jsonplaceholder.typicode.com/posts/3"),
    ]);

    const data1 = await res1.json();
    const data2 = await res2.json();

    setLogs((prevLogs) => [
      ...prevLogs,
      `Concurrent Data: ${JSON.stringify([data1, data2])}`,
    ]);
  } catch (error) {
    setLogs((prevLogs) => [...prevLogs, `Error: ${error.message}`]);
  }
};

// Task 06: Awaiting Parallel Calls
export const parallelCalls = async (urls, setLogs) => {
  try {
    const responses = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    setLogs((prevLogs) => [
      ...prevLogs,
      `Parallel Data: ${JSON.stringify(responses)}`,
    ]);
  } catch (error) {
    setLogs((prevLogs) => [...prevLogs, `Error: ${error.message}`]);
  }
};
