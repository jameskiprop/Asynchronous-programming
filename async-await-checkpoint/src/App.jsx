// src/App.jsx
import { useState } from "react";
import {
  iterateWithAsyncAwait,
  awaitCall,
  chainedAsyncFunctions,
  concurrentRequests,
  parallelCalls,
} from "./apiUtils";

function App() {
  const [logs, setLogs] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Asynchronous/await checkpoint</h1>
      <button onClick={() => iterateWithAsyncAwait([1, 2, 3, 4], setLogs)}>
        Iterate With Async/Await
      </button>
      <button onClick={() => awaitCall(setLogs)}>Await API Call</button>
      <button onClick={() => chainedAsyncFunctions(setLogs)}>
        Chain Async Calls
      </button>
      <button onClick={() => concurrentRequests(setLogs)}>
        Concurrent Requests
      </button>
      <button
        onClick={() =>
          parallelCalls(
            [
              "https://jsonplaceholder.typicode.com/posts/4",
              "https://jsonplaceholder.typicode.com/posts/5",
            ],
            setLogs
          )
        }
      >
        Parallel Calls
      </button>

      <h3>Logs:</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
