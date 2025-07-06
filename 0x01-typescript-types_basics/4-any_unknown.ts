/**
 * 4-any_unknown.ts - any vs unknown types in TypeScript
 * 
 * Demonstrates when to use any and unknown, and their differences.
 */

// any type - opt out of type checking
let looselyTyped: any = 42;
looselyTyped = "now a string";
looselyTyped = true; // No error

// unknown type - type-safe counterpart of any
let strictlyTyped: unknown = "Hello World";
// strictlyTyped.toUpperCase(); // Error: Object is of type 'unknown'

// Type narrowing with unknown
if (typeof strictlyTyped === "string") {
    console.log(strictlyTyped.toUpperCase()); // Now safe
}

// Practical example: Parsing JSON data
function parseJSON(jsonString: string): unknown {
    return JSON.parse(jsonString);
}

const userData = parseJSON('{"name":"Alice","age":30}');
// userData.name; // Error: Property 'name' does not exist on type 'unknown'

// Type assertion when we know the shape
interface User {
    name: string;
    age: number;
}

if (typeof userData === "object" && userData !== null && "name" in userData) {
    const knownUser = userData as User;
    console.log(`User: ${knownUser.name}, Age: ${knownUser.age}`);
}

// When to use any (rare cases)
const legacyCode: any = getSomeLegacyValue(); // From external JS library

// Testing the examples
console.log("Loosely typed:", looselyTyped);
console.log("User data:", userData);

export { looselyTyped, strictlyTyped, parseJSON };
