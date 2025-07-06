/**
 * Union and Intersection Types in TypeScript
 * 
 * This file demonstrates how to use union and intersection types
 * to create flexible and precise type definitions.
 */

// Union Type: A value can be one of several types
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
    console.log(`ID is: ${id}`);
}

printId(101);      // Works with number
printId("ABC101"); // Works with string
// printId(true);  // Error: boolean not in union

// Intersection Type: Combines multiple types into one
interface Employee {
    name: string;
    startDate: Date;
}

interface Manager {
    department: string;
    teamSize: number;
}

type ManagerEmployee = Employee & Manager;

const newManager: ManagerEmployee = {
    name: "Jane Doe",
    startDate: new Date(),
    department: "Engineering",
    teamSize: 10
};

console.log(newManager);

// Practical use-case: Function that accepts either string or number but handles them differently
function formatInput(input: string | number) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    return input.toFixed(2);
}

console.log(formatInput("hello")); // "HELLO"
console.log(formatInput(3.14159)); // "3.14"

// Intersection with existing types
type Named = { name: string };
type Aged = { age: number };

type Person = Named & Aged;

const person: Person = {
    name: "Alice",
    age: 30
};
