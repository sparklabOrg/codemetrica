# Getting Started

This guide will help you get started with Codemetrica.

## Installation

Follow these steps to install Codemetrica:

```bash
npm install codemetrica
```

## Usage

To parse a file and analyze metrics:

```typescript
import { parseFromFile } from 'codemetrica';

const result = parseFromFile('example.py', 'python');
console.log(result);
```