/**
 * Type Aliases in TypeScript
 * 
 * Shows how to create custom names for types to improve code readability and reusability.
 */

// Basic type alias
type UserID = string;

function getUser(id: UserID) {
    // Implementation would fetch user by ID
    console.log(`Fetching user with ID: ${id}`);
}

getUser("abc123");

// Complex object type alias
type Point = {
    x: number;
    y: number;
};

function calculateDistance(point1: Point, point2: Point): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

const p1: Point = { x: 0, y: 0 };
const p2: Point = { x: 3, y: 4 };
console.log(`Distance: ${calculateDistance(p1, p2)}`); // 5

// Union type alias
type Result = "success" | "failure" | "pending";

function handleResult(result: Result): string {
    switch (result) {
        case "success": return "Operation succeeded!";
        case "failure": return "Operation failed!";
        case "pending": return "Operation in progress...";
    }
}

console.log(handleResult("success"));

// Tuple type alias
type Coordinates = [number, number];

function plotPoint(coords: Coordinates): void {
    console.log(`Plotting point at (${coords[0]}, ${coords[1]})`);
}

plotPoint([10, 20]);

// Combining type aliases
type Size = "small" | "medium" | "large";
type Animal = {
    species: string;
    size: Size;
    age: number;
};

const myPet: Animal = {
    species: "dog",
    size: "medium",
    age: 5
};
