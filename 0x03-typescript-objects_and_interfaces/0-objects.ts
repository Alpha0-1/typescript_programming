/**
 * 0-objects.ts
 * Basic TypeScript object structures
 * 
 * This file demonstrates fundamental object types in TypeScript,
 * showing both inline typing and type aliases.
 */

// Inline typed object
const user1: { name: string; age: number; isAdmin: boolean } = {
    name: "Alice",
    age: 30,
    isAdmin: true
};

// Using type alias for better reusability
type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    hobbies?: string[]; // Optional property
};

const user2: User = {
    name: "Bob",
    age: 25,
    isAdmin: false,
    hobbies: ["coding", "reading"]
};

// Nested object example
type Address = {
    street: string;
    city: string;
    postalCode: string;
};

type UserWithAddress = User & {
    address: Address;
};

const user3: UserWithAddress = {
    name: "Charlie",
    age: 35,
    isAdmin: true,
    address: {
        street: "123 Main St",
        city: "Techville",
        postalCode: "TV123"
    }
};

// Function that accepts object parameter
function greetUser(user: { name: string }): void {
    console.log(`Hello, ${user.name}!`);
}

// Example usage
console.log("User1:", user1);
console.log("User2 hobbies:", user2.hobbies?.join(", ") || "none");
greetUser(user3);

// Demonstrating object mutation (will be important for readonly later)
user1.age += 1;
console.log("User1 after birthday:", user1);
