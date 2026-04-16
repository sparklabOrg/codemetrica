import type { BaseFunction } from "../entities/function.js";

export abstract class BaseMethodMetric {
  constructor(protected readonly methodObj: BaseFunction) {}

  getLoc(): number {
    return this.methodObj.getLines().length;
  }

  getSloc(): number {
    return this.methodObj.getLines().filter((line) => line.trim()).length;
  }

  getCloc(): number {
    return this.methodObj.getLines().filter((line) => line.trim().startsWith("#")).length;
  }
}