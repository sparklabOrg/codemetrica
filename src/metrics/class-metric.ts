import type { BaseClass } from "../entities/class.js";

export abstract class BaseClassMetric {
  constructor(protected readonly classObj: BaseClass) {}

  getNom(): number {
    return this.classObj.getMethods().length;
  }

  getNopm(): number {
    return this.classObj.getMethods().filter((method) => !method.getName().startsWith("_")).length;
  }
}