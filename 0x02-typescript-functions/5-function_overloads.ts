/**
 * Demonstrates function overloads in TypeScript
 */

// Overload signatures
function processInput(input: string): string;
function processInput(input: number): number;
function processInput(input: string | number): string | number {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

// Overloads with different parameter counts
function formatData(data: string): string;
function formatData(data: number, precision: number): string;
function formatData(data: any, precision?: number): string {
  if (typeof data === 'number' && precision !== undefined) {
    return data.toFixed(precision);
  }
  return data.toString();
}

// Complex example with interface types
interface User {
  id: number;
  name: string;
}

interface Product {
  sku: string;
  name: string;
  price: number;
}

function getItem(id: number): User;
function getItem(sku: string): Product;
function getItem(idOrSku: number | string): User | Product {
  if (typeof idOrSku === 'number') {
    // Simulate fetching user from database
    return { id: idOrSku, name: `User ${idOrSku}` };
  } else {
    // Simulate fetching product from database
    return { sku: idOrSku, name: `Product ${idOrSku}`, price: 99.99 };
  }
}

// Example usage
console.log(processInput("hello"));  // Output: HELLO
console.log(processInput(10));      // Output: 20

console.log(formatData("test"));            // Output: test
console.log(formatData(3.14159, 2));       // Output: 3.14

const user = getItem(123);
console.log(user); // Output: { id: 123, name: "User 123" }

const product = getItem("ABC123");
console.log(product); // Output: { sku: "ABC123", name: "Product ABC123", price: 99.99 }

// Overloads with callbacks
function onEvent(event: "click", handler: (x: number, y: number) => void): void;
function onEvent(event: "keypress", handler: (key: string) => void): void;
function onEvent(event: string, handler: (...args: any[]) => void): void {
  // Implementation would attach event listeners
  console.log(`Setting up handler for ${event} event`);
}

onEvent("click", (x, y) => console.log(`Clicked at (${x}, ${y})`));
onEvent("keypress", key => console.log(`Key pressed: ${key}`));

// This would cause a TypeScript error:
// onEvent("click", (key: string) => {});

// Practical example with API calls
interface ApiResponse<T> {
  data: T;
  status: number;
}

function fetchData(endpoint: "users"): Promise<ApiResponse<User[]>>;
function fetchData(endpoint: "products"): Promise<ApiResponse<Product[]>>;
function fetchData(endpoint: string): Promise<ApiResponse<any>> {
  // Implementation would make actual API call
  console.log(`Fetching data from ${endpoint}`);
  return Promise.resolve({ data: [], status: 200 });
}

// Usage with correct types
fetchData("users").then(response => {
  response.data.forEach(user => console.log(user.name));
});

fetchData("products").then(response => {
  response.data.forEach(product => console.log(product.price));
});
