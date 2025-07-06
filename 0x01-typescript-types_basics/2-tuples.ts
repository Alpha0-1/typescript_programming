/**
 * 2-tuples.ts - Tuples in TypeScript
 * 
 * Demonstrates fixed-length arrays with specific types at each position.
 */

// Basic tuple examples
let userInfo: [string, number, boolean] = ["Alice", 30, true];
let rgbColor: [number, number, number] = [255, 0, 127];

// Practical example: HTTP response with status code and message
type HttpResponse = [number, string];
const successResponse: HttpResponse = [200, "OK"];
const notFoundResponse: HttpResponse = [404, "Not Found"];

// Tuple with rest elements
type StringNumberPairs = [string, number, ...string[]];
const pairs: StringNumberPairs = ["one", 1, "uno", "eins"];

// Using tuples with destructuring
function getUser(): [string, number] {
    return ["Bob", 42];
}

const [userName, userAge] = getUser();

// Testing the examples
console.log("User info:", userInfo);
console.log("RGB color:", rgbColor);
console.log("HTTP responses:", successResponse, notFoundResponse);
console.log(`User: ${userName}, Age: ${userAge}`);

export { userInfo, rgbColor, successResponse };
