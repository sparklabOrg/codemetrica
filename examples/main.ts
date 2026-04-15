import { CodemetricaParser, FileMetric, type PythonSource } from "../src/index.ts";

const sourceCode = `
import os

class Greeter:
    def hello(self, name):
        if not name:
            return "Hi"
        return f"Hi {name}"


def top_level(x):
    return x * 2
`;

const parser = new CodemetricaParser("python");
const source = parser.parseFromString(sourceCode) as PythonSource;

const fileMetric = new FileMetric(source);

console.log("LOC:", fileMetric.getLoc());
console.log("SLOC:", fileMetric.getSloc());
console.log("Classes:", source.getClasses().map((cls) => cls.getName()));
console.log("Methods:", source.getMethods().map((fn) => fn.getName()));
