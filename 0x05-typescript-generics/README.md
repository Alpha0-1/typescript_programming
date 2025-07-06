# TypeScript Generics

This repository contains examples and explanations of TypeScript generics, covering:

1. **Generic Functions** (`0-generic_functions.ts`) - Basic to advanced generic function implementations
2. **Generic Classes** (`1-generic_classes.ts`) - How to create and use generic classes
3. **Generic Constraints** (`2-generic_constraints.ts`) - Restricting generic types with constraints
4. **The keyof Operator** (`3-keyof.ts`) - Using `keyof` for type-safe property access

## How to Use

1. Clone this repository
2. Install TypeScript: `npm install -g typescript`
3. Compile files: `tsc *.ts`
4. Run the compiled JavaScript files with Node.js

## Key Concepts Explained

### Generic Functions
Generic functions allow you to create reusable functions that work with multiple types while maintaining type safety. The identity function is the simplest example, but generics can be used for much more complex scenarios.

### Generic Classes
Generic classes enable you to create data structures (like Box or Stack) that can work with any data type while preserving type information.

### Generic Constraints
Constraints let you specify that a generic type must have certain properties or capabilities, making your generics more precise and safe.

### The keyof Operator
The `keyof` operator creates a union type of all property names of a given type, enabling type-safe property access in generic functions.

## Examples

Each file contains practical examples demonstrating these concepts. The code is heavily commented to explain the TypeScript features being used.
