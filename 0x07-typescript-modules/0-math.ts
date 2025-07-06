/**
 * Math utility functions module
 * This demonstrates basic module exports in TypeScript
 */

/**
 * Adds two numbers
 * @param a - first number
 * @param b - second number
 * @returns sum of a and b
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * Subtracts two numbers
 * @param a - first number
 * @param b - second number
 * @returns difference between a and b
 */
export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * Multiplies two numbers
 * @param a - first number
 * @param b - second number
 * @returns product of a and b
 */
export function multiply(a: number, b: number): number {
    return a * b;
}

/**
 * Divides two numbers
 * @param a - numerator
 * @param b - denominator
 * @returns quotient of a divided by b
 * @throws Error when dividing by zero
 */
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

/**
 * Calculates the area of a circle
 * @param radius - radius of the circle
 * @returns area of the circle
 */
export const calculateCircleArea = (radius: number): number => {
    return Math.PI * radius * radius;
};

// Exporting a constant value
export const PI = Math.PI;
