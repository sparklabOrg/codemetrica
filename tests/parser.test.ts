import { describe, expect, it } from "vitest";
import { CodemetricaParser, PythonSource, FileMetric, MethodMetric, MethodSmell } from "../src/index.js";

describe("CodemetricaParser", () => {
  it("parses python classes and methods", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromFile("examples/complex_file.py") as PythonSource;

    const classes = source.getClasses();
    expect(classes.length).toBeGreaterThanOrEqual(2);

    const firstClass = classes[0];
    expect(firstClass.getMethods().length).toBeGreaterThan(0);
  });

  it("computes file and method metrics", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromFile("examples/complex_file.py") as PythonSource;

    const fileMetric = new FileMetric(source);
    expect(fileMetric.getLoc()).toBeGreaterThan(0);

    const method = source.getClasses()[0].getMethods()[0];
    const methodMetric = new MethodMetric(method as any);
    expect(methodMetric.getCc()).toBeGreaterThan(0);
  });

  it("detects long parameter list smell in sample function", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromFile("examples/complex_file.py") as PythonSource;

    const topLevelFunction = source.getFunctions().find((fn) => fn.getName() === "complex_method_example");
    expect(topLevelFunction).toBeDefined();

    const smell = new MethodSmell(topLevelFunction as any);
    expect(smell.isLongParameterList()).toBe(true);
  });
});
