/**
 * Generic Constraints in TypeScript
 * 
 * This file demonstrates how to constrain generic types to ensure they
 * have certain properties or capabilities.
 */

interface HasLength {
    length: number;
}

/**
 * A generic function with constraint that the type must have a length property
 * @param arg - The argument with length property
 * @returns The length of the argument
 */
function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

// Usage examples
const stringLength = getLength("hello"); // Works because string has .length
const arrayLength = getLength([1, 2, 3]); // Works because array has .length

console.log(`String length: ${stringLength}`);
console.log(`Array length: ${arrayLength}`);

// This would cause a compile error because numbers don't have length
// const numLength = getLength(42); // Error: Argument of type 'number' is not assignable

/**
 * A function that combines two objects with constraints
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns A new combined object
 */
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

// Usage example
const merged = mergeObjects({ name: "Alice" }, { age: 30 });
console.log(`Merged object: ${JSON.stringify(merged)}`);

/**
 * A function that ensures the parameter has an id property
 */
interface Identifiable {
    id: string | number;
}

function logId<T extends Identifiable>(item: T): void {
    console.log(`The ID is: ${item.id}`);
}

// Usage example
logId({ id: 123, name: "item" });

export { getLength, mergeObjects, logId };
