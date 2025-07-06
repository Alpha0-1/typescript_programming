/**
 * Demonstrates rest parameters in TypeScript functions
 */

// Basic rest parameter (must be last parameter)
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Rest parameter with other parameters
function greet(greeting: string, ...names: string[]): string {
  return `${greeting} ${names.join(', ')}!`;
}

// Typed tuple rest parameters (TypeScript 4.0+)
function processTuple(...args: [string, number, ...boolean[]]): void {
  const [name, age, ...flags] = args;
  console.log(`Name: ${name}, Age: ${age}, Flags: ${flags.join(', ')}`);
}

// Example usage
console.log(sumAll(1, 2, 3));          // Output: 6
console.log(sumAll(5, 10, 15, 20));    // Output: 50

console.log(greet("Hello", "Alice", "Bob", "Charlie"));
// Output: Hello Alice, Bob, Charlie!

console.log(greet("Hi"));
// Output: Hi !

processTuple("John", 30, true, false, true);
// Output: Name: John, Age: 30, Flags: true, false, true

// Practical example: logging function with dynamic data
function logEvents(eventName: string, ...eventData: any[]): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${eventName}:`, ...eventData);
}

logEvents("UserLogin", { userId: 123, username: "alice" });
// Output: [timestamp] UserLogin: { userId: 123, username: "alice" }

logEvents("Error", "Database connection failed", 500, "retrying...");
// Output: [timestamp] Error: Database connection failed 500 retrying...

// Combining with array spreading
const numbers = [1, 2, 3, 4, 5];
console.log(sumAll(...numbers)); // Output: 15

// Type-safe rest parameters
function createPerson(...details: [string, number, ...string[]]): {
  name: string;
  age: number;
  hobbies: string[];
} {
  const [name, age, ...hobbies] = details;
  return { name, age, hobbies };
}

const person = createPerson("Alice", 28, "Reading", "Hiking", "Swimming");
console.log(person);
// Output: { name: "Alice", age: 28, hobbies: ["Reading", "Hiking", "Swimming"] }
