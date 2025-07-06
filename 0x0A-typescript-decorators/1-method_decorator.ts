/**
 * Method Decorator - Measures execution time of a method
 * @param target - The prototype of the class
 * @param propertyKey - The name of the method
 * @param descriptor - Property descriptor for the method
 */
function MeasureTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`Method ${propertyKey} executed in ${(end - start).toFixed(2)}ms`);
    return result;
  };

  return descriptor;
}

class Calculator {
  /**
   * Example method with performance measurement
   * @param n - Number to calculate factorial for
   */
  @MeasureTime
  factorial(n: number): number {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }
}

// Example usage
const calc = new Calculator();
console.log('Factorial result:', calc.factorial(10));

/**
 * How to run this example:
 * 1. Ensure tsconfig.json has "experimentalDecorators": true
 * 2. Compile with: tsc 1-method_decorator.ts
 * 3. Run with: node 1-method_decorator.js
 */
