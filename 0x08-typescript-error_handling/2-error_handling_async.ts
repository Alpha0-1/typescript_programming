/**
 * AsyncErrorHandling - Demonstrates error handling patterns in asynchronous TypeScript code
 * 
 * This example covers error handling with:
 * - Promises with .catch()
 * - Async/await with try-catch
 * - Promise.all error handling
 * - Async error boundaries
 */

/**
 * Simulates an async operation that might fail
 * @param id - Operation ID
 * @param shouldFail - Whether to simulate failure
 */
async function asyncOperation(id: number, shouldFail: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`Operation ${id} failed intentionally`));
      } else {
        resolve(`Operation ${id} succeeded`);
      }
    }, 1000);
  });
}

/**
 * Error handling with .catch()
 */
function demonstratePromiseCatch(): void {
  console.log("\nDemonstrating Promise.catch()");
  asyncOperation(1, true)
    .then(result => console.log(result))
    .catch(error => console.error(`Caught error: ${error.message}`));
}

/**
 * Error handling with async/await try-catch
 */
async function demonstrateAsyncAwait(): Promise<void> {
  console.log("\nDemonstrating async/await try-catch");
  try {
    const result = await asyncOperation(2, true);
    console.log(result);
  } catch (error) {
    console.error(`Caught error: ${error.message}`);
  }
}

/**
 * Handling multiple async operations with Promise.all
 */
async function demonstratePromiseAll(): Promise<void> {
  console.log("\nDemonstrating Promise.all error handling");
  const operations = [
    asyncOperation(3, false),
    asyncOperation(4, true),
    asyncOperation(5, false)
  ];

  try {
    // Promise.all fails fast (rejects if any promise rejects)
    const results = await Promise.all(operations);
    console.log("All succeeded:", results);
  } catch (error) {
    console.error("One failed:", error.message);
  }

  // Promise.allSettled waits for all to complete
  const settledResults = await Promise.allSettled(operations);
  console.log("All settled:", settledResults.map(r => 
    r.status === 'fulfilled' ? r.value : r.reason.message
  ));
}

/**
 * Higher-level async error boundary
 */
async function withAsyncErrorBoundary<T>(fn: () => Promise<T>): Promise<T | { error: string }> {
  try {
    return await fn();
  } catch (error) {
    console.error("Error boundary caught:", error.message);
    return { error: "Operation failed" };
  }
}

// Example usage
demonstratePromiseCatch();
demonstrateAsyncAwait();
demonstratePromiseAll();

// Using error boundary
withAsyncErrorBoundary(async () => {
  const result = await asyncOperation(6, true);
  console.log(result); // Won't reach here
  return result;
}).then(result => console.log("Final result:", result));

/**
 * Key Takeaways:
 * 1. Always handle promise rejections (with .catch() or try-catch)
 * 2. Async/await allows synchronous-style error handling
 * 3. Promise.all fails fast, Promise.allSettled waits for all
 * 4. Consider error boundaries for high-level async error handling
 * 5. Unhandled promise rejections can crash Node.js processes
 */
