/**
 * 2-optional_props.ts
 * Optional properties in TypeScript interfaces
 * 
 * This file demonstrates how to define and work with optional properties
 * in TypeScript interfaces and types.
 */

interface UserProfile {
    username: string;
    email: string;
    displayName?: string; // Optional property
    age?: number;        // Optional property
    // Methods can also be optional
    getFullProfile?(): string;
}

// Valid - only required properties
const user1: UserProfile = {
    username: "jsmith",
    email: "jsmith@example.com"
};

// Valid - with some optional properties
const user2: UserProfile = {
    username: "mjohnson",
    email: "mjohnson@example.com",
    displayName: "Mike"
};

// Valid - with all properties
const user3: UserProfile = {
    username: "dwilliams",
    email: "dwilliams@example.com",
    displayName: "David",
    age: 32,
    getFullProfile() {
        return `${this.displayName} (${this.username}), ${this.age} years old`;
    }
};

// Function that handles optional properties
function printUserProfile(user: UserProfile): void {
    console.log(`Username: ${user.username}`);
    console.log(`Email: ${user.email}`);
    
    // Optional property access
    if (user.displayName) {
        console.log(`Display Name: ${user.displayName}`);
    } else {
        console.log("No display name set");
    }
    
    // Optional chaining
    console.log(`Age: ${user.age ?? "Not specified"}`);
    
    // Optional method call
    const fullProfile = user.getFullProfile?.();
    if (fullProfile) {
        console.log("Full Profile:", fullProfile);
    }
}

// Example usage
console.log("User 1:");
printUserProfile(user1);

console.log("\nUser 2:");
printUserProfile(user2);

console.log("\nUser 3:");
printUserProfile(user3);
