/**
 * Demonstrates different ways to define functions in TypeScript
 * - Named functions
 * - Anonymous functions
 * - Arrow functions
 */

// 1. Named Function
function greetNamed(name: string): string {
  return `Hello, ${name}!`;
}

// 2. Anonymous Function assigned to variable
const greetAnonymous = function(name: string): string {
  return `Hello, ${name}!`;
};

// 3. Arrow Function (ES6+)
const greetArrow = (name: string): string => {
  return `Hello, ${name}!`;
};

// Shorter arrow function with implicit return
const greetArrowShort = (name: string): string => `Hello, ${name}!`;

// Example usage
console.log(greetNamed("Alice"));       // Output: Hello, Alice!
console.log(greetAnonymous("Bob"));     // Output: Hello, Bob!
console.log(greetArrow("Charlie"));     // Output: Hello, Charlie!
console.log(greetArrowShort("Dave"));   // Output: Hello, Dave!

// Practical differences:
// - 'this' binding (arrow functions don't have their own 'this')
// - Hoisting (named functions are hoisted)
// - Syntax brevity

// Context example showing 'this' difference
const person = {
  name: "Eve",
  greetNamed: function() {
    setTimeout(function() {
      console.log(`Named says: Hello, ${this.name}!`); // 'this' is not person
    }, 100);
  },
  greetArrow: function() {
    setTimeout(() => {
      console.log(`Arrow says: Hello, ${this.name}!`); // 'this' is person
    }, 100);
  }
};

person.greetNamed();  // Output: Named says: Hello, undefined!
person.greetArrow();  // Output: Arrow says: Hello, Eve!
