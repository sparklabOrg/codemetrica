import { describe, expect, it } from "vitest";
import {
  ClassMetric,
  ClassSmell,
  CodemetricaParser,
  FileMetric,
  FileSmell,
  MethodMetric,
  MethodSmell,
  PythonSource
} from "../src/index.js";

const PYTHON_FIXTURE = `
class ReportBuilder:
    def __init__(self):
        self.data = []
        self.errors = []

    def add_data(self, item):
        if item:
            self.data.append(item)
        else:
            self.errors.append("missing")

    def build(self, rows, formatter, logger, config, cache, context):
        result = []
        for row in rows:
            if row:
                normalized = formatter.format(row)
                result.append(normalized)
            else:
                logger.warn("empty")
        if config and context:
            result.append(cache.client.service.fetch().payload.value)
        return result


def complex_method_example(a, b, c, d, e, f):
    total = 0
    if a:
        total += 1
    if b:
        total += 2
    if c:
        total += 3
    return total
`;

const DISJOINT_CLASS_FIXTURE = `
class DisjointData:
    def first(self):
        self.alpha = 1

    def second(self):
        self.beta = 2
`;

describe("CodemetricaParser", () => {
  it("parses python classes and methods", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromString(PYTHON_FIXTURE) as PythonSource;

    const classes = source.getClasses();
    expect(classes.length).toBe(1);

    const firstClass = classes[0];
    expect(firstClass.getMethods().length).toBeGreaterThanOrEqual(2);
  });

  it("computes file and method metrics", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromString(PYTHON_FIXTURE) as PythonSource;

    const fileMetric = new FileMetric(source);
    expect(fileMetric.getLoc()).toBeGreaterThan(0);
    expect(fileMetric.getKloc()).toBeGreaterThan(0);
    expect(fileMetric.getCommentDensity()).toBeGreaterThanOrEqual(0);

    const method = source.getClasses()[0].getMethods().find((candidate) => candidate.getName() === "build");
    expect(method).toBeDefined();
    const methodMetric = new MethodMetric(method as any);
    expect(methodMetric.getCc()).toBeGreaterThan(0);
    expect(methodMetric.getNpath()).toBeGreaterThan(1);
    expect(methodMetric.getDecisionDensity()).toBeGreaterThan(0);
    expect(methodMetric.getHalsteadVolume()).toBeGreaterThan(0);
    expect(methodMetric.getHalsteadEffort()).toBeGreaterThan(0);
  });

  it("detects long parameter list smell in sample function", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromString(PYTHON_FIXTURE) as PythonSource;

    const topLevelFunction = source.getFunctions().find((fn) => fn.getName() === "complex_method_example");
    expect(topLevelFunction).toBeDefined();

    const smell = new MethodSmell(topLevelFunction as any);
    expect(smell.isLongParameterList()).toBe(true);
  });

  it("calculates class cohesion and class smells", () => {
    const parser = new CodemetricaParser("python");
    const cohesiveSource = parser.parseFromString(PYTHON_FIXTURE) as PythonSource;
    const disjointSource = parser.parseFromString(DISJOINT_CLASS_FIXTURE) as PythonSource;

    const cohesiveClass = cohesiveSource.getClasses()[0];
    const disjointClass = disjointSource.getClasses()[0];

    const cohesiveMetric = new ClassMetric(cohesiveClass as any);
    const disjointMetric = new ClassMetric(disjointClass as any);

    expect(cohesiveMetric.getWmc()).toBeGreaterThan(0);
    expect(cohesiveMetric.getAverageCc()).toBeGreaterThan(0);
    expect(disjointMetric.getLcom()).toBeGreaterThan(0);

    const classSmell = new ClassSmell(cohesiveClass as any);
    expect(classSmell.getSmells()).toMatchObject({
      complex_class: true,
      large_class: false
    });
  });

  it("detects method and file smells from expanded heuristics", () => {
    const parser = new CodemetricaParser("python");
    const source = parser.parseFromString(PYTHON_FIXTURE) as PythonSource;

    const classMethod = source.getClasses()[0].getMethods().find((method) => method.getName() === "build");
    expect(classMethod).toBeDefined();

    const methodSmell = new MethodSmell(classMethod as any);
    expect(methodSmell.isMessageChain()).toBe(true);

    const fileSmell = new FileSmell(source);
    expect(fileSmell.getSmells()).toMatchObject({
      feature_envy_file: false,
      duplicate_file: false
    });
  });
});
