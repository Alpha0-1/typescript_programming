#!/bin/bash
# Simple TypeScript compilation script
# Usage: ./2-compile.sh <filename.ts>

if [ -z "$1" ]; then
    echo "Error: Please provide a TypeScript filename"
    echo "Usage: ./2-compile.sh <filename.ts>"
    exit 1
fi

if [ ! -f "$1" ]; then
    echo "Error: File $1 not found"
    exit 1
fi

# Get filename without extension
filename=$(basename -- "$1")
filename="${filename%.*}"

echo "Compiling $1..."
tsc "$1"

if [ $? -eq 0 ]; then
    echo "Success! Compiled to $filename.js"
else
    echo "Compilation failed"
    exit 1
fi
