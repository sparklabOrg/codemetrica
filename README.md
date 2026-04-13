# Codemetrica (TypeScript)

Codemetrica is now rewritten for the Node.js + TypeScript ecosystem. It analyzes Python source code today, with Java adapter scaffolding in place, and computes metrics and smells for files, classes, and methods.

## Features

- Tree-sitter powered parsing for Python source code, with Java support planned through adapters
- File, class, and method metric calculation
- Code smell detection (file/class/method level)
- Strongly typed TypeScript API
- Test setup with Vitest

## Installation

```bash
npm install
```

## Quick Start

```ts
import { CodemetricaParser, PythonSource, FileMetric } from "codemetrica";

const parser = new CodemetricaParser("python");
const source = parser.parseFromFile("examples/complex_file.py") as PythonSource;

const fileMetric = new FileMetric(source);
console.log(fileMetric.getLoc());

for (const cls of source.getClasses()) {
    console.log(cls.getName());
    for (const method of cls.getMethods()) {
        console.log(method.getName());
    }
}
```

## Scripts

- `npm run build`: compile TypeScript to `dist/`
- `npm run dev`: run the example script
- `npm run test`: run test suite once
- `npm run test:watch`: run tests in watch mode
- `npm run lint`: run TypeScript type checks

## Project Structure

- `src/parser.ts`: parser entrypoint and language dispatch
- `src/entities/*`: base abstractions for source/class/function nodes
- `src/python/entities/*`: Python-specific AST wrappers
- `src/python/metric/*`: Python metrics
- `src/python/smell/*`: Python smell detectors
- `tests/*`: Vitest tests

## Migration Note

The previous Python implementation remains in the repository for reference during migration. The active implementation is now the TypeScript code in `src/`.

## License

MIT