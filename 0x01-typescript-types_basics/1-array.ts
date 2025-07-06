/**
 * 1-arrays.ts - Typed Arrays in TypeScript
 * 
 * Demonstrates how to define and work with typed arrays.
 */

// Array of numbers
const primeNumbers: number[] = [2, 3, 5, 7, 11];
const scores: Array<number> = [98, 85, 91]; // Alternative syntax

// Array of strings
const fruits: string[] = ["apple", "banana", "orange"];
const colors: Array<string> = ["red", "green", "blue"];

// Mixed type arrays (using union types)
const mixedData: (string | number | boolean)[] = ["text", 42, true];

// Practical example: Processing an array of products
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, inStock: true },
    { id: 2, name: "Mouse", price: 24.99, inStock: false },
    { id: 3, name: "Keyboard", price: 49.99, inStock: true }
];

function getAvailableProducts(products: Product[]): Product[] {
    return products.filter(product => product.inStock);
}

// Testing the examples
console.log("Prime numbers:", primeNumbers);
console.log("Available products:", getAvailableProducts(products));

export { primeNumbers, fruits, products };
