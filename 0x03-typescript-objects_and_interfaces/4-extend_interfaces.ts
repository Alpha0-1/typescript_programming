/**
 * 4-extend_interfaces.ts
 * Interface extension in TypeScript
 * 
 * This file demonstrates how interfaces can extend other interfaces
 * to create complex type hierarchies.
 */

// Base interface
interface Animal {
    name: string;
    age: number;
    makeSound(): void;
}

// Extending the base interface
interface Dog extends Animal {
    breed: string;
    bark(): void;
}

// Another extension
interface Cat extends Animal {
    color: string;
    purr(): void;
}

// Implementing extended interface
const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    makeSound() {
        this.bark();
    },
    bark() {
        console.log("Woof! Woof!");
    }
};

const myCat: Cat = {
    name: "Whiskers",
    age: 2,
    color: "Tabby",
    makeSound() {
        this.purr();
    },
    purr() {
        console.log("Purrrrr...");
    }
};

// Multiple interface extension
interface Bird extends Animal {
    wingspan: number;
    fly(): void;
}

interface Penguin extends Bird {
    canFly: false;
    swim(): void;
}

const myPenguin: Penguin = {
    name: "Pingu",
    age: 5,
    wingspan: 30,
    canFly: false,
    makeSound() {
        console.log("Honk!");
    },
    fly() {
        console.log("I wish I could fly!");
    },
    swim() {
        console.log("Swimming gracefully...");
    }
};

// Function that uses the base interface
function introduceAnimal(animal: Animal): void {
    console.log(`This is ${animal.name}, age ${animal.age}`);
    animal.makeSound();
}

// Example usage
console.log("Dog:");
introduceAnimal(myDog);

console.log("\nCat:");
introduceAnimal(myCat);

console.log("\nPenguin:");
introduceAnimal(myPenguin);
myPenguin.swim();
