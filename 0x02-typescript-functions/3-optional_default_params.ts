/**
 * Demonstrates optional and default parameters in TypeScript functions
 */

// Optional parameter (marked with ?)
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

// Default parameter
function createUser(
  username: string,
  role: string = "user",
  isActive: boolean = true
): { username: string; role: string; isActive: boolean } {
  return { username, role, isActive };
}

// Optional parameters must come after required ones
// This would be invalid:
// function invalid(a?: string, b: string) {}

// Practical example with configuration object
interface ConfigOptions {
  retries?: number;
  timeout?: number;
  logging?: boolean;
}

function initializeApp(config: ConfigOptions = {}): void {
  const finalConfig = {
    retries: config.retries ?? 3,
    timeout: config.timeout ?? 5000,
    logging: config.logging ?? true
  };

  console.log("Initializing app with config:", finalConfig);
}

// Example usage
console.log(buildName("John"));              // Output: John
console.log(buildName("John", "Doe"));       // Output: John Doe

console.log(createUser("alice")); 
// Output: { username: "alice", role: "user", isActive: true }

console.log(createUser("bob", "admin", false));
// Output: { username: "bob", role: "admin", isActive: false }

initializeApp(); 
// Output: Initializing app with config: { retries: 3, timeout: 5000, logging: true }

initializeApp({ retries: 5, logging: false });
// Output: Initializing app with config: { retries: 5, timeout: 5000, logging: false }

// Advanced example with callback and options
function processData(
  data: string,
  callback: (result: string) => void,
  options: {
    uppercase?: boolean;
    trim?: boolean;
  } = {}
): void {
  let result = data;
  
  if (options.trim) {
    result = result.trim();
  }
  
  if (options.uppercase) {
    result = result.toUpperCase();
  }
  
  callback(result);
}

processData("  hello world  ", console.log);
// Output: "  hello world  "

processData("  hello world  ", console.log, { uppercase: true, trim: true });
// Output: "HELLO WORLD"
