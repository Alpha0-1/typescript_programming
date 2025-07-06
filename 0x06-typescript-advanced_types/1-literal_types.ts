/**
 * Literal Types in TypeScript
 * 
 * Demonstrates how to use literal types to restrict values to specific literals.
 */

// String literal type
type Direction = "north" | "east" | "south" | "west";

function move(direction: Direction): void {
    console.log(`Moving ${direction}`);
}

move("north"); // Valid
// move("up"); // Error: Argument of type '"up"' is not assignable to parameter of type 'Direction'

// Numeric literal type
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1 as DiceRoll;
}

console.log(`You rolled: ${rollDice()}`);

// Boolean literal type (less common but possible)
type TrueOnly = true;

function verify(condition: TrueOnly): void {
    console.log("Condition is verified as true");
}

// verify(false); // Error: Argument of type 'false' is not assignable to parameter of type 'true'

// Combined literals
type TrafficLight = "red" | "yellow" | "green";

function handleLight(light: TrafficLight): string {
    switch (light) {
        case "red": return "Stop";
        case "yellow": return "Caution";
        case "green": return "Go";
    }
}

console.log(handleLight("green")); // "Go"

// Literal types with interfaces
interface ButtonProps {
    size: "small" | "medium" | "large";
    variant: "primary" | "secondary" | "danger";
}

const myButton: ButtonProps = {
    size: "medium",
    variant: "primary"
};
