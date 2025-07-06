```markdown
# TypeScript Installation Guide

This guide walks you through setting up TypeScript on your system.

## Prerequisites
- Node.js (version 12 or later recommended)
- npm (comes with Node.js)

## Installation Steps

1. **Install Node.js** (if not already installed):
   - Download from [nodejs.org](https://nodejs.org)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install TypeScript globally**:
   ```bash
   npm install -g typescript
   ```

3. **Verify TypeScript installation**:
   ```bash
   tsc --version
   ```

4. **Initialize a TypeScript project**:
   ```bash
   mkdir typescript-hello-world
   cd typescript-hello-world
   tsc --init
   ```

5. **Basic tsconfig.json** will be created. You can modify it as needed.

6. **Create your first TypeScript file** (e.g., `1-hello_world.ts`)

7. **Compile TypeScript to JavaScript**:
   ```bash
   tsc 1-hello_world.ts
   ```

8. **Run the compiled JavaScript**:
   ```bash
   node 1-hello_world.js
   ```

## Next Steps
- Explore the generated `tsconfig.json` file
- Try modifying the TypeScript file and recompiling
- Experiment with different TypeScript features like:
  - Type annotations
  - Interfaces
  - Classes

## Troubleshooting

**Common Issues:**

1. **Command not found errors**:
   - Ensure Node.js and npm are properly installed
   - Check that npm global binaries are in your PATH

2. **Version conflicts**:
   - Consider using `nvm` (Node Version Manager) if working with multiple projects

3. **Permission errors** (Linux/Mac):
   ```bash
   sudo npm install -g typescript
   ```

## Alternative Installation Methods

**Using npx (no global installation):**
```bash
npx tsc 1-hello_world.ts
```

**Using yarn:**
```bash
yarn global add typescript
```
```
