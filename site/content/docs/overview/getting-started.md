---
title: Getting Started
date: 2024-02-17
weight: 10
---

## Class based api

```ts
import { ParseSource } from "../codemetrica/ParseSource";
import { CyclomaticComplexity } from "../codemetrica/metrics"
import { GodClass } from "../codemetrica/smells"

const pyFile = ParseSource.fromFileSync("test.py");

for (const cls of pyFile.getClasses()) {
    console.log(c.name);
    if(GodClass.detect(cls)){
      console.log(cls.name + " is a god class.")
    }

    for(const m of cls.getMethods()) {
        console.log(m.name + ": " + CyclomaticComplexity.calculate(m));
    }
}
```

## Functional API

```ts
import { ParseSource } from "../codemetrica/ParseSource";
import { detectCyclomaticComplexity } from "../codemetrica/metrics"
import { detectGodClass } from "../codemetrica/smells"

const pyFile = ParseSource.fromFileSync("test.py");

for (const cls of pyFile.getClasses()) {
    console.log(c.name);
    if(detectGodClass(cls)){
      console.log(cls.name + " is a god class.")
    }

    for(const m of cls.getMethods()) {
        console.log(m.name + ": " + calculateCyclomaticComplexity(m));
    }
}
```