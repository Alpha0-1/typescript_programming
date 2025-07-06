# TypeScript Decorators Learning Module

This repository contains examples demonstrating different TypeScript decorators:

## Files

1. **0-class_decorator.ts**  
   Demonstrates a class decorator that logs instance creation.

2. **1-method_decorator.ts**  
   Shows a method decorator that measures execution time.

3. **2-parameter_decorator.ts**  
   Illustrates a parameter decorator for validation (note this is just metadata setup).

## Setup

1. Install TypeScript:  
   `npm install -g typescript`

2. Compile files:  
   `tsc <filename.ts>`

3. Run compiled JavaScript:  
   `node <filename.js>`

## Key Concepts

- **Decorators** are special declarations that can modify classes/methods/properties.
- They use the form `@expression` where `expression` evaluates to a function.
- Experimental decorators require `experimentalDecorators` in tsconfig.json.

## Best Practices

1. Keep decorators focused on a single responsibility
2. Document decorator behavior clearly
3. Consider decorator composition for complex scenarios
4. Remember decorators execute at class definition time, not runtime
