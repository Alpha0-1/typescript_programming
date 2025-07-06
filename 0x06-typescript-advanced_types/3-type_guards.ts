/**
 * Type Guards in TypeScript
 * 
 * Demonstrates different ways to narrow down types using type guards.
 */

// typeof type guard
function processValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    } else {
        console.log(`Number value: ${value.toFixed(2)}`);
    }
}

processValue("hello");
processValue(3.14159);

// instanceof type guard
class Bird {
    fly() {
        console.log("Flying!");
    }
}

class Fish {
    swim() {
        console.log("Swimming!");
    }
}

function moveAnimal(animal: Bird | Fish) {
    if (animal instanceof Bird) {
        animal.fly();
    } else {
        animal.swim();
    }
}

moveAnimal(new Bird());
moveAnimal(new Fish());

// Custom type guard (user-defined type predicate)
interface Cat {
    meow(): void;
}

interface Dog {
    bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
}

function handlePet(pet: Cat | Dog) {
    if (isCat(pet)) {
        pet.meow();
    } else {
        pet.bark();
    }
}

const myCat: Cat = {
    meow: () => console.log("Meow!")
};

handlePet(myCat);

// in operator type guard
type Square = {
    size: number;
};

type Rectangle = {
    width: number;
    height: number;
};

function calculateArea(shape: Square | Rectangle) {
    if ("size" in shape) {
        return shape.size * shape.size;
    } else {
        return shape.width * shape.height;
    }
}

console.log(calculateArea({ size: 5 })); // 25
console.log(calculateArea({ width: 3, height: 4 })); // 12
