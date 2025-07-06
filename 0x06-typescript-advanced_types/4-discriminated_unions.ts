/**
 * Discriminated Unions in TypeScript
 * 
 * Shows how to use a common property (discriminant) to distinguish between
 * different types in a union.
 */

// Basic discriminated union
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; sideLength: number }
    | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}

const circle: Shape = { kind: "circle", radius: 5 };
console.log(`Circle area: ${getArea(circle)}`);

// More complex example with shared properties
type NetworkResponse =
    | { status: "success"; data: any; timestamp: Date }
    | { status: "error"; error: string; code: number }
    | { status: "pending"; requestId: string };

function handleResponse(response: NetworkResponse) {
    switch (response.status) {
        case "success":
            console.log(`Data received at ${response.timestamp}:`, response.data);
            break;
        case "error":
            console.error(`Error ${response.code}: ${response.error}`);
            break;
        case "pending":
            console.log(`Request ${response.requestId} is pending`);
            break;
    }
}

handleResponse({
    status: "success",
    data: { user: "Alice", age: 30 },
    timestamp: new Date()
});

// Discriminated union with functions
type Action =
    | { type: "add"; payload: number }
    | { type: "subtract"; payload: number }
    | { type: "reset" };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "add":
            return state + action.payload;
        case "subtract":
            return state - action.payload;
        case "reset":
            return 0;
    }
}

let total = 0;
total = reducer(total, { type: "add", payload: 10 });
total = reducer(total, { type: "subtract", payload: 5 });
total = reducer(total, { type: "reset" });
console.log(`Total: ${total}`);
