/**
 * main.ts - Entry point for testing all TypeScript basic types
 * 
 * Imports and runs examples from all the type demonstration files.
 */

import { username, age, isActive } from './0-types';
import { primeNumbers, fruits, products } from './1-arrays';
import { userInfo, rgbColor, successResponse } from './2-tuples';
import { Direction, UserRole, ResponseStatus } from './3-enums';
import { looselyTyped, strictlyTyped, parseJSON } from './4-any_unknown';

console.log("\n=== Testing Basic Types ===");
console.log(`User: ${username}, Age: ${age}, Active: ${isActive}`);

console.log("\n=== Testing Arrays ===");
console.log("Primes:", primeNumbers);
console.log("Fruits:", fruits);
console.log("Products:", products);

console.log("\n=== Testing Tuples ===");
console.log("User Info:", userInfo);
console.log("RGB Color:", rgbColor);
console.log("Success Response:", successResponse);

console.log("\n=== Testing Enums ===");
console.log("North Direction:", Direction.North);
console.log("Admin Role:", UserRole.Admin);
console.log("Not Found Status:", ResponseStatus.NotFound);

console.log("\n=== Testing any/unknown ===");
console.log("Loosely Typed:", looselyTyped);
console.log("Strictly Typed:", strictlyTyped);

// Additional practical example combining different types
function processUserData(
    name: string,
    age: number,
    hobbies: string[],
    role: UserRole
): [string, number, string] {
    const greeting = `Hello ${name}`;
    const birthYear = new Date().getFullYear() - age;
    const status = role === UserRole.Admin ? "Admin" : "Standard User";
    
    return [greeting, birthYear, status];
}

const result = processUserData("Alice", 30, ["Reading", "Hiking"], UserRole.Admin);
console.log("\nCombined Example Result:", result);
