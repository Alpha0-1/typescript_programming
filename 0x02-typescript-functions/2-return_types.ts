/**
 * Demonstrates different return type annotations in TypeScript
 */

// Explicit return type
function add(a: number, b: number): number {
  return a + b;
}

// Void return type (no return value)
function logMessage(message: string): void {
  console.log(`[LOG]: ${message}`);
}

// Never type for functions that never return
function throwError(message: string): never {
  throw new Error(message);
}

// Function that might return different types
function getValue(condition: boolean): string | number {
  return condition ? "Success" : 404;
}

// Async function returns Promise
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

// Type inference example (return type inferred as number)
function multiply(a: number, b: number) {
  return a * b;
}

// Example usage
console.log(add(2, 3)); // Output: 5
logMessage("Test message"); // Output: [LOG]: Test message

const result = getValue(true);
if (typeof result === 'string') {
  console.log(`String result: ${result}`);
} else {
  console.log(`Number result: ${result}`);
}

// Using the never type
function infiniteLoop(): never {
  while (true) {
    // This function never returns
  }
}

// Practical example with complex return type
interface ApiResponse<T> {
  data: T;
  status: number;
  timestamp: Date;
}

function getApiResponse(): ApiResponse<string> {
  return {
    data: "Sample data",
    status: 200,
    timestamp: new Date()
  };
}

const apiResponse = getApiResponse();
console.log(apiResponse); // Output: { data: "Sample data", status: 200, ... }
