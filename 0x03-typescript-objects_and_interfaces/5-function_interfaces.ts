/**
 * 5-function_interfaces.ts
 * Function interfaces in TypeScript
 * 
 * This file demonstrates how interfaces can describe function types
 * and how they're used in TypeScript.
 */

// Basic function interface
interface StringTransformer {
    (input: string): string;
}

// Implementing the function interface
const toUpperCase: StringTransformer = (input) => input.toUpperCase();
const toLowerCase: StringTransformer = (input) => input.toLowerCase();

// Function that accepts the interface
function transformString(input: string, transformer: StringTransformer): string {
    return transformer(input);
}

// More complex function interface
interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

function calculate(a: number, b: number, operation: MathOperation): number {
    return operation(a, b);
}

// Hybrid interface (both function and object)
interface Counter {
    // Function signature
    (start: number): void;
    
    // Additional properties
    interval: number;
    reset(): void;
}

function createCounter(): Counter {
    let counter = 0;
    let intervalId: number;
    
    const counterFunction = ((start: number) => {
        counter = start;
        intervalId = setInterval(() => {
            counter++;
            console.log(`Count: ${counter}`);
        }, counterFunction.interval);
    }) as Counter;
    
    counterFunction.interval = 1000;
    
    counterFunction.reset = () => {
        clearInterval(intervalId);
        counter = 0;
        console.log("Counter reset!");
    };
    
    return counterFunction;
}

// Example usage
console.log("Uppercase:", transformString("Hello", toUpperCase));
console.log("Lowercase:", transformString("Hello", toLowerCase));

console.log("Add:", calculate(5, 3, add));
console.log("Multiply:", calculate(5, 3, multiply));

console.log("\nCounter example:");
const myCounter = createCounter();
myCounter(5); // Start counting from 5

// After 3 seconds, reset the counter
setTimeout(() => {
    myCounter.reset();
    myCounter(1); // Start again from 1
}, 3000);
