/**
 * Class Decorator - Adds metadata and modifies class behavior
 * @param constructor - The class constructor being decorated
 */
function ClassLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`New instance of ${constructor.name} created with args:`, args);
    }
  };
}

/**
 * Example class demonstrating class decorator usage
 * @description This class will log when instances are created
 */
@ClassLogger
class User {
  constructor(
    public name: string,
    public age: number
  ) {}

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Example usage
const user = new User('Alice', 30);
console.log(user.greet());

/**
 * How to run this example:
 * 1. Ensure tsconfig.json has "experimentalDecorators": true
 * 2. Compile with: tsc 0-class_decorator.ts
 * 3. Run with: node 0-class_decorator.js
 */
