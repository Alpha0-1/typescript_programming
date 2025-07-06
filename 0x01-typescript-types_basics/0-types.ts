/**
 * 0-types.ts - Basic TypeScript Primitive Types
 * 
 * This file demonstrates TypeScript's basic primitive types:
 * - string
 * - number
 * - boolean
 */

// String type examples
const username: string = "TypeScriptUser";
const greeting: string = `Hello, ${username}!`; // Template literal

// Number type examples (includes integers, floats, hex, binary etc.)
const age: number = 25;
const temperature: number = 36.6;
const hexValue: number = 0xff; // 255 in decimal

// Boolean type examples
const isActive: boolean = true;
const hasPermission: boolean = false;

// Practical use case: User authentication status
function checkLoginStatus(isLoggedIn: boolean): string {
    return isLoggedIn ? "User is logged in" : "Please log in";
}

// Testing the examples
console.log(greeting);
console.log(`Age: ${age}, Temperature: ${temperature}, Hex: ${hexValue}`);
console.log(`Active: ${isActive}, Permission: ${hasPermission}`);
console.log(checkLoginStatus(true));

export { username, age, isActive }; // Export for use in other files
