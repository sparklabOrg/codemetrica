import { PythonClass } from "../entities/class.js";
import { PythonFunction } from "../entities/function.js";
import { MethodMetric } from "./method-metric.js";
import { BaseClassMetric } from "../../metrics/class-metric.js";

export class ClassMetric extends BaseClassMetric {
  constructor(classObj: PythonClass) {
    super(classObj);
  }

  private getMethodAttributeAccesses(method: PythonFunction): Set<string> {
    const names = new Set<string>();
    const walk = (node: { type: string; children: Array<{ type: string; text: string; children: unknown[] }>; text: string }): void => {
      if (node.type === "attribute") {
        const objectNode = node.children.find((child) => child.type === "identifier");
        const attributeNode = node.children.find((child) => child.type === "identifier" && child !== objectNode);
        if (objectNode?.text === "self" && attributeNode?.text) {
          names.add(attributeNode.text);
        }
      }

      for (const child of node.children) {
        walk(child as never);
      }
    };

    walk(method["_node"] as never);
    return names;
  }

  private getMethodMetrics(): MethodMetric[] {
    return this.classObj.getMethods().map((method) => new MethodMetric(method as PythonFunction));
  }

  getWmc(): number {
    return this.getMethodMetrics().map((metric) => metric.getCc()).reduce((sum, value) => sum + value, 0);
  }

  getAverageCc(): number {
    const nom = this.getNom();
    if (nom === 0) {
      return 0;
    }

    return this.getWmc() / nom;
  }

  getRfc(): number {
    const remoteCalls = new Set<string>();
    for (const method of this.classObj.getMethods()) {
      for (const call of (method as PythonFunction).getRemoteCalls()) {
        remoteCalls.add(call);
      }
    }

    return this.getNom() + remoteCalls.size;
  }

  getCbo(): number {
    const superclasses = this.classObj["_node"].childForFieldName("superclasses");
    if (!superclasses) {
      return 0;
    }

    return superclasses.namedChildren.filter((child) => child.type !== ",").length;
  }

  getLcom(): number {
    const methods = this.classObj.getMethods().map((method) => method as PythonFunction);
    if (methods.length < 2) {
      return 0;
    }

    const accesses = methods.map((method) => this.getMethodAttributeAccesses(method));
    let disjointPairs = 0;
    let jointPairs = 0;

    for (let i = 0; i < accesses.length; i += 1) {
      for (let j = i + 1; j < accesses.length; j += 1) {
        const left = accesses[i];
        const right = accesses[j];
        const hasIntersection = Array.from(left).some((name) => right.has(name));
        if (hasIntersection) {
          jointPairs += 1;
        } else {
          disjointPairs += 1;
        }
      }
    }

    const totalPairs = (methods.length * (methods.length - 1)) / 2;
    if (totalPairs === 0 || disjointPairs <= jointPairs) {
      return 0;
    }

    return (disjointPairs - jointPairs) / totalPairs;
  }

  getDit(): number {
    return this.getCbo();
  }
}
