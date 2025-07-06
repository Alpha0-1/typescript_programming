# TypeScript Advanced Types

This repository contains examples demonstrating advanced TypeScript type concepts:

## Files Overview

1. **0-union_intersection.ts**  
   Demonstrates union (`|`) and intersection (`&`) types with practical examples.

2. **1-literal_types.ts**  
   Shows how to use literal types to restrict values to specific strings, numbers, or booleans.

3. **2-type_aliases.ts**  
   Illustrates creating custom type aliases for complex types to improve code readability.

4. **3-type_guards.ts**  
   Covers different type guard techniques (`typeof`, `instanceof`, custom guards) to narrow types.

5. **4-discriminated_unions.ts**  
   Demonstrates discriminated unions (tagged unions) for handling different object shapes with a common discriminant.

## How to Use

1. Clone this repository
2. Install TypeScript: `npm install -g typescript`
3. Compile files: `tsc <filename.ts>`
4. Run compiled JavaScript: `node <filename.js>`

Each file contains commented examples that demonstrate the concepts in practical scenarios.

## Key Concepts Covered

- Union types for values that can be one of several types
- Intersection types for combining multiple types
- Literal types for exact value restrictions
- Type aliases for creating custom type names
- Type guards for runtime type checking
- Discriminated unions for handling different object shapes
