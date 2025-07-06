/**
 * BasicErrorHandling - Demonstrates basic try-catch error handling in TypeScript
 * 
 * This example shows how to use try-catch blocks to handle runtime errors gracefully.
 * We'll demonstrate with common error scenarios and proper error handling patterns.
 */

/**
 * A function that might throw different types of errors
 * @param input - A value that determines what error to throw
 * @throws {RangeError} - When input is 1
 * @throws {TypeError} - When input is 2
 * @throws {Error} - For any other invalid input
 */
function riskyOperation(input: number): number {
  if (input === 1) {
    throw new RangeError("Input cannot be 1");
  }
  if (input === 2) {
    throw new TypeError("Input cannot be 2");
  }
  if (input <= 0) {
    throw new Error("Input must be positive");
  }
  return input * 10;
}

// Basic try-catch demonstration
function demonstrateBasicErrorHandling(input: number): void {
  console.log(`\nAttempting operation with input: ${input}`);
  
  try {
    const result = riskyOperation(input);
    console.log(`Success! Result: ${result}`);
  } catch (error) {
    console.error(`Caught an error: ${error.message}`);
    
    // Type narrowing for different error types
    if (error instanceof RangeError) {
      console.error("Handling RangeError specifically");
    } else if (error instanceof TypeError) {
      console.error("Handling TypeError specifically");
    } else {
      console.error("Handling generic Error");
    }
  } finally {
    console.log("This always runs, regardless of success/failure");
  }
}

// Example usage
demonstrateBasicErrorHandling(5);  // Success case
demonstrateBasicErrorHandling(1);  // RangeError
demonstrateBasicErrorHandling(2);  // TypeError
demonstrateBasicErrorHandling(-3); // Generic Error

/**
 * Key Takeaways:
 * 1. Always wrap risky operations in try-catch blocks
 * 2. Use instanceof to handle different error types specifically
 * 3. The finally block executes regardless of success/failure
 * 4. Always provide meaningful error messages
 */
