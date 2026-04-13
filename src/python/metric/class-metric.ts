import { PythonClass } from "../entities/class.js";
import { PythonFunction } from "../entities/function.js";
import { MethodMetric } from "./method-metric.js";

export class ClassMetric {
  constructor(private readonly classObj: PythonClass) {}

  getNom(): number {
    return this.classObj.getMethods().length;
  }

  getNopm(): number {
    return this.classObj.getMethods().filter((method) => !method.getName().startsWith("_")).length;
  }

  getWmc(): number {
    return this.classObj
      .getMethods()
      .map((method) => new MethodMetric(method as PythonFunction).getCc())
      .reduce((sum, value) => sum + value, 0);
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
    return 0;
  }

  getDit(): number {
    return this.getCbo();
  }
}
