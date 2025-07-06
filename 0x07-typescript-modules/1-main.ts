/**
 * Main file demonstrating module imports
 * Imports functions from math.ts module
 */

// Import specific functions
import { add, subtract, PI } from './0-math';

// Import all exports under a namespace
import * as MathUtils from './0-math';

function main() {
    console.log("TypeScript Modules Demo");
    console.log("----------------------");
    
    // Using the imported add function
    console.log(`5 + 3 = ${add(5, 3)}`);
    
    // Using the imported subtract function
    console.log(`10 - 4 = ${subtract(10, 4)}`);
    
    // Using the PI constant
    console.log(`The value of PI is approximately: ${PI}`);
    
    // Using functions imported via namespace
    console.log(`6 * 7 = ${MathUtils.multiply(6, 7)}`);
    
    try {
        console.log(`20 / 5 = ${MathUtils.divide(20, 5)}`);
        console.log(`Area of circle with radius 3: ${MathUtils.calculateCircleArea(3).toFixed(2)}`);
        
        // This will throw an error
        console.log(`10 / 0 = ${MathUtils.divide(10, 0)}`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
    }
}

main();
