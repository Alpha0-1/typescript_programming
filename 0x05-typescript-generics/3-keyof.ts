/**
 * The keyof Operator in TypeScript
 * 
 * This file demonstrates how to use the keyof operator with generics
 * to create type-safe property accessors.
 */

/**
 * A function that gets a property value from an object
 * @param obj - The source object
 * @param key - The key of the property to get
 * @returns The value of the property
 */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Usage example
const person = {
    name: "Alice",
    age: 30,
    address: "123 Main St"
};

const nameValue = getProperty(person, "name"); // Type is string
const ageValue = getProperty(person, "age");   // Type is number

console.log(`Name: ${nameValue}, Age: ${ageValue}`);

// This would cause a compile error because "email" isn't a property of person
// const emailValue = getProperty(person, "email"); // Error

/**
 * A function that sets a property value on an object
 * @param obj - The target object
 * @param key - The key of the property to set
 * @param value - The new value for the property
 */
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

// Usage example
setProperty(person, "age", 31);
console.log(`Updated age: ${person.age}`);

/**
 * A more complex example using keyof with mapped types
 */
type ReadonlyPerson = {
    readonly [K in keyof typeof person]: typeof person[K];
};

// Usage example
const readonlyPerson: ReadonlyPerson = person;
// This would cause a compile error because properties are readonly
// readonlyPerson.age = 32; // Error

export { getProperty, setProperty, ReadonlyPerson };
