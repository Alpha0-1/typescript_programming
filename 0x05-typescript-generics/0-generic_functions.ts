/**
 * Generic Functions in TypeScript
 * 
 * This file demonstrates the use of generic functions to create reusable,
 * type-safe code that works with multiple data types.
 */

/**
 * A generic identity function that returns whatever is passed in.
 * This demonstrates the most basic generic function.
 * @param arg - The value to be returned
 * @returns The same value that was passed in
 */
function identity<T>(arg: T): T {
    return arg;
}

// Usage examples
const stringOutput = identity<string>("hello"); // Type is string
const numberOutput = identity<number>(42);      // Type is number

console.log(`String output: ${stringOutput}`);
console.log(`Number output: ${numberOutput}`);

/**
 * A generic function to reverse an array.
 * Shows how generics can work with arrays and more complex types.
 * @param array - The array to be reversed
 * @returns A new array with elements in reverse order
 */
function reverseArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

// Usage examples
const stringArray = reverseArray<string>(["a", "b", "c"]);
const numberArray = reverseArray<number>([1, 2, 3]);

console.log(`Reversed string array: ${stringArray}`);
console.log(`Reversed number array: ${numberArray}`);

/**
 * A generic function that works with multiple types.
 * Demonstrates multiple type parameters.
 * @param first - First value of type T
 * @param second - Second value of type U
 * @returns A tuple containing both values
 */
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Usage example
const stringAndNumber = pair<string, number>("age", 30);
console.log(`Pair result: ${stringAndNumber}`);

export { identity, reverseArray, pair };
