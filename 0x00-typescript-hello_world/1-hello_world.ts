```typescript
/**
 * 1-hello_world.ts
 * Basic TypeScript Hello World example demonstrating:
 * - Variable declarations with type annotations
 * - Function typing
 * - Basic console output
 * - Template literals
 * - Type safety demonstration
 */

// 1. Basic variable with type annotation
const greeting: string = "Hello, TypeScript World!";

// 2. Typed function with void return
function displayGreeting(message: string): void {
    console.log(`${message}`);
}

// 3. Function call with our greeting
displayGreeting(greeting);

// 4. Type safety demonstration
let counter: number = 5;
// counter = "five"; // Uncommenting this will show TypeScript's type checking

// 5. Using template literals
console.log(`Counter value: ${counter}`);

// 6. Additional examples showing type inference
const inferredString = "TypeScript infers this is a string";
const inferredNumber = 42;

// 7. Array with type annotation
const languages: string[] = ["TypeScript", "JavaScript", "Python"];

// 8. Iterating through array
console.log("\nPopular languages:");
languages.forEach((lang, index) => {
    console.log(`${index + 1}. ${lang}`);
});

/* 
 * Compilation and Execution:
 * 1. Compile: tsc 1-hello_world.ts
 * 2. Run: node 1-hello_world.js
 * 
 * Alternatively use the compile script:
 * ./2-compile.sh 1-hello_world.ts
 */

// 9. Interface example (bonus)
interface Person {
    name: string;
    age: number;
}

const user: Person = {
    name: "TypeScript Learner",
    age: 1 // Days since starting TS
};

console.log(`\nUser: ${user.name}, ${user.age} day(s) old`);
```
