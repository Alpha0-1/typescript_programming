/**
 * Demonstrates typed parameters in TypeScript functions
 */

// Basic typed parameters
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Using interfaces for complex parameters
interface User {
  id: number;
  name: string;
  email: string;
}

function registerUser(user: User): void {
  console.log(`Registering user: ${user.name} (ID: ${user.id})`);
  // Database operation would go here
}

// Union types for parameters
function formatInput(input: string | number): string {
  return input.toString().toUpperCase();
}

// Example usage
console.log(calculateArea(5, 10)); // Output: 50

registerUser({
  id: 1,
  name: "John Doe",
  email: "john@example.com"
});
// Output: Registering user: John Doe (ID: 1)

console.log(formatInput("hello")); // Output: HELLO
console.log(formatInput(42));      // Output: 42

// Type checking at compile time
// This would cause a TypeScript error:
// calculateArea("five", "ten"); 

// Handling type errors gracefully
function safeCalculateArea(width: unknown, height: unknown): number | string {
  if (typeof width !== 'number' || typeof height !== 'number') {
    return "Invalid input: both width and height must be numbers";
  }
  return width * height;
}

console.log(safeCalculateArea(3, 4));    // Output: 12
console.log(safeCalculateArea("3", 4));  // Output: Invalid input...
