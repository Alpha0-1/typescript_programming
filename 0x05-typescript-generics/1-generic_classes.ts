/**
 * Generic Classes in TypeScript
 * 
 * This file demonstrates how to create generic classes that can work with
 * different types while maintaining type safety.
 */

/**
 * A generic Box class that can hold any type of value.
 */
class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent;
    }

    /**
     * Gets the current content of the box
     * @returns The content of type T
     */
    getContent(): T {
        return this.content;
    }

    /**
     * Sets new content for the box
     * @param newContent - The new content of type T
     */
    setContent(newContent: T): void {
        this.content = newContent;
    }
}

// Usage examples
const stringBox = new Box<string>("Initial string");
console.log(`String box content: ${stringBox.getContent()}`);

const numberBox = new Box<number>(100);
console.log(`Number box content: ${numberBox.getContent()}`);

/**
 * A generic Stack implementation.
 * Demonstrates generics with more complex class behavior.
 */
class Stack<T> {
    private items: T[] = [];

    /**
     * Adds an item to the top of the stack
     * @param item - The item to push
     */
    push(item: T): void {
        this.items.push(item);
    }

    /**
     * Removes and returns the top item from the stack
     * @returns The top item or undefined if stack is empty
     */
    pop(): T | undefined {
        return this.items.pop();
    }

    /**
     * Checks if the stack is empty
     * @returns True if stack is empty, false otherwise
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

// Usage example
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(`Popped from number stack: ${numberStack.pop()}`);

const stringStack = new Stack<string>();
stringStack.push("first");
stringStack.push("second");
console.log(`Popped from string stack: ${stringStack.pop()}`);

export { Box, Stack };
