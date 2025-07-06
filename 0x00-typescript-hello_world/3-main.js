/**
 * hello_world.js
 * Compiled JavaScript output from 1-hello_world.ts
 */
"use strict";
// Define a constant message
var greeting = "Hello, TypeScript World!";
// Create a function to display the greeting
function showGreeting(message) {
    console.log(message);
}
// Call the function with our greeting
showGreeting(greeting);
// Additional example showing type safety
var count = 5;
// count = "five"; // This would cause a TypeScript error (uncomment to see)
console.log("The count is ".concat(count));
/*
 * To compile and run:
 * 1. tsc 1-hello_world.ts
 * 2. node 1-hello_world.js
 */
