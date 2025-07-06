/**
 * Parameter Decorator - Validates parameter values
 * @param target - The prototype of the class
 * @param methodName - The name of the method
 * @param parameterIndex - The index of the parameter
 */
function ValidateParam(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  const validationsKey = `__validations_${methodName}`;
  
  // Store validation metadata
  if (!target[validationsKey]) {
    target[validationsKey] = [];
  }
  target[validationsKey][parameterIndex] = (value: number) => value > 0;
}

class Circle {
  private radius: number;

  /**
   * Creates a new Circle instance
   * @param radius - Must be positive number
   */
  constructor(@ValidateParam radius: number) {
    this.radius = radius;
  }

  get area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Example usage - validation would need to be implemented in a decorator factory
const smallCircle = new Circle(5);
console.log('Area:', smallCircle.area);

// This would ideally throw an error if validation was implemented:
// const invalidCircle = new Circle(-1);

/**
 * Note: Parameter decorators alone don't modify behavior.
 * They're typically used with method decorators to implement validation.
 * 
 * How to run this example:
 * 1. Ensure tsconfig.json has "experimentalDecorators": true
 * 2. Compile with: tsc 2-parameter_decorator.ts
 * 3. Run with: node 2-parameter_decorator.js
 */
