/**
 * 1-interfaces.ts
 * TypeScript interfaces introduction
 * 
 * This file demonstrates basic interface usage in TypeScript,
 * showing how they can define object shapes and be implemented.
 */

// Basic interface definition
interface Person {
    name: string;
    age: number;
    greet(): void;
}

// Implementing the interface
const alice: Person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hi, I'm ${this.name}!`);
    }
};

// Interface with optional property
interface Config {
    readonly id: number; // Can't be changed after creation
    name: string;
    settings?: {
        darkMode: boolean;
        notifications: boolean;
    };
}

const appConfig: Config = {
    id: 1,
    name: "MyApp",
    settings: {
        darkMode: true,
        notifications: false
    }
};

// Interface implementation in class
class Employee implements Person {
    constructor(public name: string, public age: number, public jobTitle: string) {}

    greet() {
        console.log(`Hello, I'm ${this.name}, the ${this.jobTitle}.`);
    }
}

const bob = new Employee("Bob", 35, "Developer");
bob.greet();

// Example usage
alice.greet();
console.log("App config ID:", appConfig.id);
// appConfig.id = 2; // Error: Cannot assign to 'id' because it's a read-only property
