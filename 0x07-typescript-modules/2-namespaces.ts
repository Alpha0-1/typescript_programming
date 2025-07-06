/**
 * Demonstration of TypeScript namespaces
 * Alternative to ES modules for organizing code
 */

namespace Geometry {
    export interface Point {
        x: number;
        y: number;
    }

    export function distance(p1: Point, p2: Point): number {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    export namespace Area {
        export function rectangle(width: number, height: number): number {
            return width * height;
        }

        export function circle(radius: number): number {
            return Math.PI * radius * radius;
        }
    }
}

// Using the namespace
const pointA: Geometry.Point = { x: 0, y: 0 };
const pointB: Geometry.Point = { x: 3, y: 4 };

console.log(`Distance between points: ${Geometry.distance(pointA, pointB)}`);
console.log(`Area of rectangle: ${Geometry.Area.rectangle(5, 10)}`);
console.log(`Area of circle: ${Geometry.Area.circle(7).toFixed(2)}`);

// Triple-slash reference to use across files (alternative to modules)
/// <reference path="./0-math.ts" />

// Note: In modern TypeScript, modules are preferred over namespaces
