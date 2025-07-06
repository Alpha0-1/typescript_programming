/**
 * 3-readonly.ts
 * Readonly properties in TypeScript
 * 
 * This file demonstrates readonly properties in interfaces and types,
 * showing how they can be used to create immutable data structures.
 */

interface ImmutableUser {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly createdAt: Date;
    // Can have mutable properties too
    lastLogin?: Date;
}

// Initialization is allowed
const user: ImmutableUser = {
    id: 1,
    username: "immutable_user",
    email: "user@example.com",
    createdAt: new Date(),
    lastLogin: new Date()
};

// Trying to modify readonly properties causes errors
// user.id = 2; // Error: Cannot assign to 'id' because it's a read-only property
// user.username = "new_name"; // Error

// Non-readonly properties can still be modified
user.lastLogin = new Date();
console.log("Updated last login:", user.lastLogin);

// Readonly arrays
const readonlyHobbies: readonly string[] = ["reading", "coding"];
// readonlyHobbies.push("gaming"); // Error: Property 'push' does not exist on type 'readonly string[]'

// Readonly in type aliases
type Point = {
    readonly x: number;
    readonly y: number;
};

const origin: Point = { x: 0, y: 0 };
// origin.x = 1; // Error: Cannot assign to 'x' because it's a read-only property

// Readonly utility type
type ReadonlyUser = Readonly<{
    id: number;
    name: string;
}>;

const readonlyUser: ReadonlyUser = {
    id: 2,
    name: "Readonly User"
};
// readonlyUser.name = "New Name"; // Error

// Example usage
function createUser(username: string, email: string): ImmutableUser {
    return {
        id: Math.floor(Math.random() * 1000),
        username,
        email,
        createdAt: new Date()
    };
}

const newUser = createUser("new_user", "new@example.com");
console.log("Created new immutable user:", newUser);
