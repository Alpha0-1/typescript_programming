/**
 * 3-enums.ts - Enums in TypeScript
 * 
 * Demonstrates numeric and string enums with practical examples.
 */

// Numeric enum (default)
enum Direction {
    North,    // 0
    East,     // 1
    South,    // 2
    West      // 3
}

// String enum
enum FilePermission {
    Read = "READ",
    Write = "WRITE",
    Execute = "EXECUTE"
}

// Heterogeneous enum (mix of string and numeric values)
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = "ERROR"
}

// Const enum (optimized for performance)
const enum LogLevel {
    Debug,
    Info,
    Warning,
    Error
}

// Practical example: User roles
enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Subscriber = "SUBSCRIBER"
}

function checkAccess(role: UserRole): boolean {
    return role === UserRole.Admin || role === UserRole.Editor;
}

// Testing the examples
console.log("Directions:", Direction.North, Direction[0]); // Output: 0, "North"
console.log("File permissions:", FilePermission.Read);
console.log("Check editor access:", checkAccess(UserRole.Editor));

export { Direction, UserRole, ResponseStatus };
