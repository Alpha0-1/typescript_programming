/**
 * CustomErrorHandling - Demonstrates creating and using custom error classes in TypeScript
 * 
 * This example shows how to extend the base Error class to create custom error types
 * with additional properties and behaviors.
 */

/**
 * Custom error for authentication failures
 */
class AuthenticationError extends Error {
  constructor(public userId: string, message: string) {
    super(message);
    this.name = "AuthenticationError";
    // Maintains proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthenticationError);
    }
  }
}

/**
 * Custom error for network-related issues
 */
class NetworkError extends Error {
  constructor(public statusCode: number, public endpoint: string, message: string) {
    super(message);
    this.name = "NetworkError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NetworkError);
    }
  }
}

/**
 * Simulates a login operation that might fail
 * @throws {AuthenticationError} - When credentials are invalid
 * @throws {NetworkError} - When network issues occur
 */
function login(userId: string, password: string): void {
  // Simulate authentication failure
  if (password !== "correct-password") {
    throw new AuthenticationError(userId, "Invalid credentials");
  }

  // Simulate network failure 20% of the time
  if (Math.random() < 0.2) {
    throw new NetworkError(500, "/api/login", "Service unavailable");
  }

  console.log(`User ${userId} logged in successfully`);
}

/**
 * Handles login with proper error handling for custom errors
 */
function handleLogin(userId: string, password: string): void {
  try {
    login(userId, password);
  } catch (error) {
    if (error instanceof AuthenticationError) {
      console.error(`Auth failed for user ${error.userId}: ${error.message}`);
      // Maybe prompt for password again
    } else if (error instanceof NetworkError) {
      console.error(`Network error (${error.statusCode}) at ${error.endpoint}: ${error.message}`);
      // Maybe retry or show offline mode
    } else {
      console.error("Unexpected error:", error);
      // Generic error handling
    }
  }
}

// Example usage
handleLogin("user123", "wrong-pass");  // AuthenticationError
handleLogin("user123", "correct-password"); // Success (80% chance) or NetworkError (20% chance)

/**
 * Key Takeaways:
 * 1. Custom errors allow for more specific error handling
 * 2. You can add additional properties to errors for context
 * 3. Always set the error name for proper identification
 * 4. Consider using captureStackTrace for better debugging
 * 5. TypeScript's instanceof works well with custom errors
 */
